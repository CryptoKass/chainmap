import { ChainMap } from "./types";

// bsc
export default {
  mainnet: {
    chainId: 56,
    name: "Binance SmartChain mainnet",
    rpc: {
      Binance: "https://bsc-dataseed1.binance.org",
      Binance2: "https://bsc-dataseed2.binance.org",
      Binance3: "https://bsc-dataseed3.binance.org",
      Binance4: "https://bsc-dataseed4.binance.org",
      PublicNode: "https://bsc.publicnode.com",
      LLamaNodes: "https://binance.llamarpc.com",
      Blast: "https://bsc.public.blastapi.io",
      Meow: "https://bsc.meowrpc.com",
    },
  },
  testnet: {
    chainId: 97,
    name: "Binance SmartChain testnet",
    rpc: {
      Binance: "https://data-seed-prebsc-1-s1.binance.org:8545",
      Binance2: "https://data-seed-prebsc-2-s1.binance.org:8545",
      Binance3: "https://data-seed-prebsc-1-s2.binance.org:8545",
      Binance4: "https://data-seed-prebsc-2-s2.binance.org:8545",
      PublicNode: "https://bsc-testnet.publicnode.com",
      Blast: "https://bsc-testnet.public.blastapi.io",
    },
  },
} as ChainMap;
