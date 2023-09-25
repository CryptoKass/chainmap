import { ChainMap } from "./types";

export default {
  mainnet: {
    chainId: 42161,
    name: "Arbitrum mainnet",
    rpc: {
      Arbitrum: "https://arb1.arbitrum.io/rpc",
      PublicNode: "https://arbitrum-one.publicnode.com",
      LLamaNodes: "https://arbitrum.llamarpc.com",
      Blast: "https://arbitrum-one.public.blastapi.io",
      Meow: "https://arbitrum.meowrpc.com",
      Ankr: "https://rpc.ankr.com/arbitrum",
    },
  },

  goerli: {
    chainId: 421613,
    name: "Arbitrum goerli",
    rpc: {
      Arbitrum: "https://goerli-rollup.arbitrum.io/rpc",
      PublicNode: "https://arbitrum-goerli.publicnode.com",
      Blast: "https://arbitrum-goerli.public.blastapi.io",
    },
  },

  sepolia: {
    chainId: 421614,
    name: "Arbitrum sepolia",
    rpc: {
      Arbitrum: "https://sepolia-rollup.arbitrum.io/rpc",
    },
  },

  nova: {
    chainId: 42170,
    name: "Arbitrum nova",
    rpc: {
      Arbitrum: "https://nova.arbitrum.io/rpc",
      PublicNode: "https://arbitrum-nova.publicnode.com",
      Blast: "https://arbitrum-nova.public.blastapi.io",
    },
  },
} as ChainMap;
