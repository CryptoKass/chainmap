import { ETH } from "./ethereum.list";
import { ChainMap } from "./types";

export default {
  mainnet: {
    chainId: 42161,
    name: "Arbitrum mainnet",
    currency: ETH,
    explorerUrl: "https://arbiscan.io",
    rpc: [
      "https://arb1.arbitrum.io/rpc",
      "https://arbitrum-one.publicnode.com",
      "https://arbitrum.llamarpc.com",
      "https://arbitrum-one.public.blastapi.io",
      "https://arbitrum.meowrpc.com",
      "https://rpc.ankr.com/arbitrum",
    ],
  },

  goerli: {
    chainId: 421613,
    name: "Arbitrum goerli",
    currency: ETH,
    explorerUrl: "https://goerli.arbiscan.io",
    rpc: [
      "https://goerli-rollup.arbitrum.io/rpc",
      "https://arbitrum-goerli.publicnode.com",
      "https://arbitrum-goerli.public.blastapi.io",
    ],
  },

  sepolia: {
    chainId: 421614,
    name: "Arbitrum sepolia",
    currency: ETH,
    explorerUrl: "https://sepolia.arbiscan.io",
    rpc: ["https://sepolia-rollup.arbitrum.io/rpc"],
  },

  nova: {
    chainId: 42170,
    name: "Arbitrum nova",
    currency: ETH,
    explorerUrl: "https://nova.arbiscan.io",
    rpc: [
      "https://nova.arbitrum.io/rpc",
      "https://arbitrum-nova.publicnode.com",
      "https://arbitrum-nova.public.blastapi.io",
    ],
  },
} as ChainMap;
