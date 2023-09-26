// THIS FILE IS AUTOGENERATED
// DO NOT EDIT
import { asProxyArray } from "./utils";
// BINANCE SMARTCHAIN MAINNET
const mainnetRPCs = {
  Binance: "https://bsc-dataseed1.binance.org",
  Binance2: "https://bsc-dataseed2.binance.org",
  Binance3: "https://bsc-dataseed3.binance.org",
  Binance4: "https://bsc-dataseed4.binance.org",
  PublicNode: "https://bsc.publicnode.com",
  LLamaNodes: "https://binance.llamarpc.com",
  Meow: "https://bsc.meowrpc.com",
};
// BINANCE SMARTCHAIN TESTNET
const testnetRPCs = {
  Binance: "https://data-seed-prebsc-1-s1.binance.org:8545",
  Binance2: "https://data-seed-prebsc-2-s1.binance.org:8545",
  Binance3: "https://data-seed-prebsc-1-s2.binance.org:8545",
  Binance4: "https://data-seed-prebsc-2-s2.binance.org:8545",
  PublicNode: "https://bsc-testnet.publicnode.com",
  Blast: "https://bsc-testnet.public.blastapi.io",
};
export default {
  mainnet: asProxyArray(mainnetRPCs),
  testnet: asProxyArray(testnetRPCs),
};
