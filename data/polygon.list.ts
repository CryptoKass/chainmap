import { ChainMap } from "./types";

export const MATIC = {
  name: "Polygon",
  symbol: "MATIC",
  decimals: 18,
};

// polygon
export default {
  mainnet: {
    chainId: 137,
    name: "polygon",
    currency: MATIC,
    explorerUrl: "https://polygonscan.com",
    rpcs: [
      "https://polygon-bor.publicnode.com",
      "https://polygon.llamarpc.com",
      "https://polygon-mainnet.public.blastapi.io",
      "https://rpc.ankr.com/polygon",
      "https://polygon.meowrpc.com",
      "https://1rpc.io/matic",
    ],
  },

  zkevm: {
    chainId: 1101,
    name: "polygon zkevm",
    currency: MATIC,
    explorerUrl: "https://zkevm.polygonscan.com",
    rpcs: [
      "https://polygon-zkevm.publicnode.com",
      "https://polygon-zkevm-mainnet.public.blastapi.io",
      "https://1rpc.io/polygon/zkevm",
    ],
  },

  mumbai: {
    chainId: 80001,
    name: "polygon mumbai",
    currency: MATIC,
    explorerUrl: "https://mumbai.polygonscan.com",
    rpcs: [
      "https://polygon-mumbai-bor.publicnode.com",
      "https://polygon-testnet.public.blastapi.io",
      "https://rpc.ankr.com/polygon_mumbai",
    ],
  },

  zkevmtest: {
    chainId: 1442,
    name: "polygon zkevm testnet",
    currency: MATIC,
    rpcs: ["https://rpc.public.zkevm-test.net"],
  },
} as ChainMap;
