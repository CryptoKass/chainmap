import { ETH } from "./ethereum.list";
import { ChainMap } from "./types";

export default {
  mainnet: {
    chainId: 42161,
    name: "Arbitrum mainnet",
    currency: ETH,
    explorerUrl: "https://arbiscan.io",
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
    currency: ETH,
    explorerUrl: "https://goerli.arbiscan.io",
    rpc: {
      Arbitrum: "https://goerli-rollup.arbitrum.io/rpc",
      PublicNode: "https://arbitrum-goerli.publicnode.com",
      Blast: "https://arbitrum-goerli.public.blastapi.io",
    },
  },

  sepolia: {
    chainId: 421614,
    name: "Arbitrum sepolia",
    currency: ETH,
    explorerUrl: "https://sepolia.arbiscan.io",
    rpc: {
      Arbitrum: "https://sepolia-rollup.arbitrum.io/rpc",
    },
  },

  nova: {
    chainId: 42170,
    name: "Arbitrum nova",
    currency: ETH,
    explorerUrl: "https://nova.arbiscan.io",
    rpc: {
      Arbitrum: "https://nova.arbitrum.io/rpc",
      PublicNode: "https://arbitrum-nova.publicnode.com",
      Blast: "https://arbitrum-nova.public.blastapi.io",
    },
  },
} as ChainMap;
