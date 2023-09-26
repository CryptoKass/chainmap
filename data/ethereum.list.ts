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
    rpc: [
      "https://ethereum.publicnode.com",
      "https://eth.llamarpc.com",
      "https://eth-mainnet.public.blastapi.io",
      "https://rpc.ankr.com/eth",
      "https://rpc.flashbots.net/",
      "https://cloudflare-eth.com",
    ],
  },

  goerli: {
    chainId: 5,
    name: "Ethereum goerli",
    currency: ETH,
    explorerUrl: "https://goerli.etherscan.io",
    rpc: [
      "https://ethereum-goerli.publicnode.com",
      "https://rpc.ankr.com/eth_goerli",
      "https://eth-goerli.public.blastapi.io",
      "https://rpc.notadegen.com/eth/goerli",
    ],
  },

  sepolia: {
    chainId: 11155111,
    name: "Ethereum sepolia",
    currency: ETH,
    explorerUrl: "https://sepolia.etherscan.io",
    rpc: [
      "https://rpc.sepolia.org",
      "https://rpc2.sepolia.org",
      "https://eth-sepolia.public.blastapi.io",
      "https://rpc.notadegen.com/eth/sepolia",
      "https://gateway.tenderly.co/public/sepolia",
    ],
  },
} as ChainMap;
