import { loadNetworkMap, toCamelCase, writeFile } from "./utils.js";
import { ChainInfo, NetworkMap } from "../data/types.js";

type RawChainData = {
  name: string;
  chain: string;
  icon: string;
  status?: string;
  rpc: string[];
  features: { name: string }[];
  faucets: any[];
  nativeCurrency: { name: string; symbol: string; decimals: number };
  infoURL: string;
  shortName: string;
  chainId: number;
  networkId: number;
  slip44: number;
  ens: { registry: string };
  explorers?: { name: string; url: string; standard: string }[];
};

type RawChainDataMap = Record<string, RawChainData[]>;

const useBetterNames = (chains: RawChainData[]) => {
  let betterChainNames: Record<string, string> = {};
  let totalChainsInNetwork: Record<string, number> = {};

  for (let chain of chains) {
    chain.chain = chain.chain.toLowerCase().trim();
    chain.name = chain.name.toLowerCase().trim();

    // SPECIAL CASES
    switch (chain.chain) {
      case "eth": {
        chain.chain = "ethereum";
        continue;
      }
      case "etc": {
        chain.chain = "ethereumClassic";
        continue;
      }
      case "matic": {
        chain.chain = "polygon";
        continue;
      }
      case "bsc": {
        chain.chain = "smartchain";
        continue;
      }
    }

    if (chain.name.includes("mainnet"))
      betterChainNames[chain.chain] = chain.name.replace("mainnet", "").trim();

    totalChainsInNetwork[chain.chain]++;
  }

  // apply better names
  for (let chain of chains) {
    if (
      totalChainsInNetwork[chain.chain] == 1 &&
      !chain.name.includes("testnet")
    )
      chain.name = `mainnet`;
    else if (
      totalChainsInNetwork[chain.chain] == 2 &&
      chain.name.includes("testnet")
    )
      chain.name = `testnet`;

    if (betterChainNames[chain.chain])
      chain.chain = betterChainNames[chain.chain];
  }
};

const fetchChainList = async () => {
  // 1. fetch chain data from chainid.network
  // aka chainlist.wtf
  let raw: RawChainData[] = await (
    await fetch("https://chainid.network/chains.json")
  ).json();

  // 2. format
  raw.forEach((chain) => {
    chain.chain = chain.chain.toUpperCase().trim();
    chain.name = chain.name.toLowerCase().trim();
    // remove rpcs containing '${'
    chain.rpc = chain.rpc.filter((r) => !r.includes("${"));
    chain.explorers = (chain.explorers || []).filter(
      (e) => !e.url.includes("${")
    );
    chain.faucets = (chain.faucets || []).filter(
      (f) => !f?.url?.includes("${")
    );
  });

  // 3. Filter out the crap
  // - no rpcs
  raw.filter((chain) => chain.rpc.length > 0);
  // - dead info urls
  raw.filter(async (chain) => {
    try {
      await fetch(chain.infoURL);
      return true;
    } catch (e) {
      return false;
    }
  });
  // - deprecated chains
  raw.filter((chain) => chain.status !== "deprecated");

  // 4. use better names where possible
  useBetterNames(raw);

  // 5. sort chains by ChainData.chain
  const rawChains: RawChainDataMap = raw.reduce((acc, chain) => {
    if (!acc[chain.chain]) {
      acc[chain.chain] = [];
    }

    acc[chain.chain].push(chain);
    return acc;
  }, {} as RawChainDataMap);

  return rawChains;
};

const getExplorerURL = (explorers?: RawChainData["explorers"]) => {
  if (!explorers) return undefined;
  if (explorers.length === 0) return undefined;
  return explorers[0].url;
};

export const rawChainToChainInfo = (raw: RawChainData): ChainInfo => {
  return {
    chainId: raw.chainId,
    name: raw.name,
    currency: {
      name: raw.nativeCurrency.name,
      symbol: raw.nativeCurrency.symbol,
      decimals: raw.nativeCurrency.decimals,
    },
    rpc: raw.rpc,
    infoUrl: raw.infoURL,
    explorerUrl: getExplorerURL(raw.explorers),
    ensAddress: raw.ens?.registry,
    faucets: raw.faucets,
  };
};

const inferChainVariableName = (name: string, chain: string) => {
  if (name.includes("mainnet")) return "mainnet";
  if (name.toLowerCase() == `${chain} testnet`) return "testnet";

  // remove testnet from name
  if (name.replace("testnet", "").length > 0)
    name = name.replace("testnet", "");

  // strip chain name from network name
  name = name.replace(chain.toLowerCase(), "").trim();
  name = toCamelCase(name);

  if (name == "" || name == undefined) return "mainnet";
  return name;
};

const mergeNetworkMap = (raw: RawChainDataMap, networks: NetworkMap) => {
  for (let [networkName, rawChains] of Object.entries(raw)) {
    networkName = toCamelCase(networkName);

    for (let rawChain of rawChains) {
      const variableName = inferChainVariableName(
        rawChain.name,
        rawChain.chain
      );

      if (!networks[networkName]) networks[networkName] = {}; // create network if it doesn't exist

      const chainMap = networks[networkName];

      if (!chainMap[variableName])
        chainMap[variableName] = rawChainToChainInfo(rawChain); // create chain if it doesn't exist

      // merge rpcs and faucets
      chainMap[variableName].rpc = [
        ...new Set([...chainMap[variableName].rpc, ...rawChain.rpc]),
      ];
      chainMap[variableName].faucets = [
        ...new Set([
          ...(chainMap[variableName].faucets || []),
          ...rawChain.faucets,
        ]),
      ];

      // merge other features
      chainMap[variableName] = {
        ...{
          explorerUrl: getExplorerURL(rawChain.explorers),
          ensAddress: rawChain.ens?.registry,
        },
        ...chainMap[variableName],
      };
    }
  }

  return networks;
};

export const main = async () => {
  const raw = await fetchChainList();
  const networks = await loadNetworkMap();

  // 5. merge with existing data
  const mergedNetworks = mergeNetworkMap(raw, networks);

  // 6. write to disk
  for (let [networkName, chainMap] of Object.entries(mergedNetworks)) {
    const src = JSON.stringify(chainMap, null, 2);
    await writeFile(`./candidate/${networkName}.json`, src);
  }
};

main().catch(console.error);
