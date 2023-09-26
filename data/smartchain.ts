import { ChainMap } from "./types";

export const BNB = {
  name: "BNB",
  symbol: "BNB",
  decimals: 18,
};

// bsc
export default {
  mainnet: {
    chainId: 56,
    name: "Binance SmartChain mainnet",
    currency: BNB,
    rpc: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc.publicnode.com",
      "https://binance.llamarpc.com",
      "https://bsc.public.blastapi.io",
      "https://bsc.meowrpc.com",
    ],
  },
  testnet: {
    chainId: 97,
    name: "Binance SmartChain testnet",
    currency: BNB,
    rpc: [
      "https://data-seed-prebsc-1-s1.binance.org:8545",
      "https://data-seed-prebsc-2-s1.binance.org:8545",
      "https://data-seed-prebsc-1-s2.binance.org:8545",
      "https://data-seed-prebsc-2-s2.binance.org:8545",
      "https://bsc-testnet.publicnode.com",
      "https://bsc-testnet.public.blastapi.io",
    ],
  },
} as ChainMap;
