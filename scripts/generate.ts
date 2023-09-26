import { NetworkMap, ChainMap } from "../data/types";
import { getWorkingRPCs, loadRawNetworkMap, writeFile } from "./utils";

/** Returns a network map containing only working network RPCs */
const filterWorkingNetworks = async (networks: NetworkMap) => {
  const workingNetworks: NetworkMap = {};

  for (let [networkName, networkMap] of Object.entries(networks)) {
    const chains: ChainMap = {};

    for (let [chainName, chainInfo] of Object.entries(networkMap)) {
      console.log(`Checking RPCs for ${networkName} ${chainName}...`);
      chains[chainName] = {
        ...chainInfo,
        rpc: await getWorkingRPCs(chainInfo.rpc),
      };
    }

    workingNetworks[networkName] = chains;
  }

  return workingNetworks;
};

/** Generates the contents of 'src/<networkName>.ts' */
const generateNetworkCode = (networkMap: ChainMap) => {
  let src = `// THIS FILE IS AUTOGENERATED\n// DO NOT EDIT\n\n`;

  for (let [chainName, chainInfo] of Object.entries(networkMap)) {
    src += `\n// ${chainInfo.name.toUpperCase()}\n`;
    src += `const ${chainName}Info = ${JSON.stringify(chainInfo, null, 2)} \n`;
  }

  src += `\nexport default {`;
  for (let [chainName, chainInfo] of Object.entries(networkMap)) {
    src += `\n  ${chainName}: ${chainName}Info,`;
  }
  src += `\n}\n`;
  return src;
};

/** Generates the contents of 'src/chainids.ts' */
const generateChainIdCode = (networks: NetworkMap) => {
  let chainIdsSrc = `// THIS FILE IS AUTOGENERATED\n// DO NOT EDIT\n\n`;

  chainIdsSrc += `export default {\n`;
  for (let [networkName, networkMap] of Object.entries(networks)) {
    for (let [chainName, chainInfo] of Object.entries(networkMap)) {
      chainIdsSrc += `  ${chainInfo.chainId}: { network: "${networkName}", chain: "${chainName}" },\n`;
    }
  }
  chainIdsSrc += `}\n`;
  return chainIdsSrc;
};

/** Generates the contents of 'src/index.ts' */
const generateIndexCode = (networks: NetworkMap) => {
  let indexSrc = `// THIS FILE IS AUTOGENERATED\n// DO NOT EDIT\n\n`;
  indexSrc += `import { asProxyWithChainId } from "./utils";\n`;
  indexSrc += `import chainIds from "./chainIds";\n`;

  indexSrc += `\n// Supported Networks`;
  for (let [networkName, networkMap] of Object.entries(networks)) {
    indexSrc += `\nimport ${networkName} from "./${networkName}";`;
  }

  indexSrc += `\n\nexport default asProxyWithChainId({`;
  for (let networkName of Object.keys(networks)) {
    indexSrc += `\n  ${networkName},`;
  }
  indexSrc += `\n}, chainIds);\n`;
  return indexSrc;
};

const generateReadMe = async (networks: NetworkMap) => {
  const chains = Object.values(networks)
    .map((network) => Object.values(network))
    .flat();

  let readmeTxt = await Bun.file("./data/README.tmpl.md").text();
  readmeTxt = readmeTxt.replace(
    "#SUPPORTED_NETWORKS#",
    chains.map((chain) => `${chain.name} (${chain.chainId})`).join(", ")
  );

  return readmeTxt;
};

const main = async () => {
  const networks = await loadRawNetworkMap();

  // 1. Filter out non-working RPCs
  const workingNetworks = await filterWorkingNetworks(networks);

  // 2. Create a file for each network containing the chain info
  for (let [networkName, networkMap] of Object.entries(networks))
    await writeFile(`./src/${networkName}.ts`, generateNetworkCode(networkMap));

  // 3. Create a file containing the chainId map, which maps
  //    chainIds to network and chain names
  await writeFile(`./src/chainIds.ts`, generateChainIdCode(networks));

  // 4. Create the main entrypoint file, which exports a chainMap with all networks
  await writeFile(`./src/index.ts`, generateIndexCode(networks));

  // 5. Create a json file containing the all the chainInfos
  await writeFile("./chainmap.json", JSON.stringify(workingNetworks, null, 2));

  // 6. Generate the README
  await writeFile("./README.md", await generateReadMe(workingNetworks));
};

main()
  .then(() => console.log("Done!"))
  .catch((e) => console.error(e))
  .finally(() => process.exit(0));
