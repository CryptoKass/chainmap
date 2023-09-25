import { ChainMap } from "./types";

export default {
  mainnet: {
    chainId: 1,
    name: "mainnet",
    rpc: {
      PublicNode: "https://ethereum.publicnode.com",
      LlamaNodes: "https://eth.llamarpc.com",
      Blast: "https://eth-mainnet.public.blastapi.io",
      Ankr: "https://rpc.ankr.com/eth",
      Flashbots: "https://rpc.flashbots.net/",
      CloudFlare: "https://cloudflare-eth.com",
    },
  },

  goerli: {
    chainId: 5,
    name: "goerli",
    rpc: {
      PublicNode: "https://ethereum-goerli.publicnode.com",
      Ankr: "https://rpc.ankr.com/eth_goerli",
      Blast: "https://eth-goerli.public.blastapi.io",
      NotADegen: "https://rpc.notadegen.com/eth/goerli",
    },
  },

  sepolia: {
    chainId: 11155111,
    name: "sepolia",
    rpc: {
      Sepolia: "https://rpc.sepolia.org",
      Sepolia2: "https://rpc2.sepolia.org",
      Blast: "https://eth-sepolia.public.blastapi.io",
      NotADegen: "https://rpc.notadegen.com/eth/sepolia",
      Tenderly: "https://gateway.tenderly.co/public/sepolia",
    },
  },
} as ChainMap;
