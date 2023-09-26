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
    rpc: {
      PublicNode: "https://polygon-bor.publicnode.com",
      LlamaNodes: "https://polygon.llamarpc.com",
      Blast: "https://polygon-mainnet.public.blastapi.io",
      Ankr: "https://rpc.ankr.com/polygon",
      Meow: "https://polygon.meowrpc.com",
      OneRPC: "https://1rpc.io/matic",
    },
  },

  zkevm: {
    chainId: 1101,
    name: "polygon zkevm",
    currency: MATIC,
    explorerUrl: "https://zkevm.polygonscan.com",
    rpc: {
      PublicNode: "https://polygon-zkevm.publicnode.com",
      Blast: "https://polygon-zkevm-mainnet.public.blastapi.io",
      OneRPC: "https://1rpc.io/polygon/zkevm",
    },
  },

  mumbai: {
    chainId: 80001,
    name: "polygon mumbai",
    currency: MATIC,
    rpc: {
      PublicNode: "https://polygon-mumbai-bor.publicnode.com",
      Blast: "https://polygon-testnet.public.blastapi.io",
      Ankr: "https://rpc.ankr.com/polygon_mumbai",
    },
  },

  zkevmtest: {
    chainId: 1442,
    name: "polygon zkevm testnet",
    currency: MATIC,
    rpc: {
      ZkevmTest: "https://rpc.public.zkevm-test.net",
    },
  },
} as ChainMap;
