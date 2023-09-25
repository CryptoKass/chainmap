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
    },
  },
} as ChainMap;
