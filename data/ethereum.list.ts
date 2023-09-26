import { ChainMap, CurrencyInfo } from "./types";

export const ETH: CurrencyInfo = {
  name: "Ethereum",
  symbol: "ETH",
  decimals: 18,
};

export default {
  mainnet: {
    chainId: 1,
    name: "Ethereum mainnet",
    currency: ETH,
    explorerUrl: "https://etherscan.io",
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
    name: "Ethereum goerli",
    currency: ETH,
    explorerUrl: "https://goerli.etherscan.io",
    rpc: {
      PublicNode: "https://ethereum-goerli.publicnode.com",
      Ankr: "https://rpc.ankr.com/eth_goerli",
      Blast: "https://eth-goerli.public.blastapi.io",
      NotADegen: "https://rpc.notadegen.com/eth/goerli",
    },
  },

  sepolia: {
    chainId: 11155111,
    name: "Ethereum sepolia",
    currency: ETH,
    explorerUrl: "https://sepolia.etherscan.io",
    rpc: {
      Sepolia: "https://rpc.sepolia.org",
      Sepolia2: "https://rpc2.sepolia.org",
      Blast: "https://eth-sepolia.public.blastapi.io",
      NotADegen: "https://rpc.notadegen.com/eth/sepolia",
      Tenderly: "https://gateway.tenderly.co/public/sepolia",
    },
  },
} as ChainMap;
