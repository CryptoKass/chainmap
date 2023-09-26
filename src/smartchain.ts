// THIS FILE IS AUTOGENERATED
// DO NOT EDIT


// BINANCE SMARTCHAIN MAINNET
const mainnetInfo = {
  "chainId": 56,
  "name": "Binance SmartChain mainnet",
  "currency": {
    "name": "BNB",
    "symbol": "BNB",
    "decimals": 18
  },
  "rpc": [
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed3.binance.org",
    "https://bsc-dataseed4.binance.org",
    "https://bsc.publicnode.com",
    "https://binance.llamarpc.com",
    "https://bsc.public.blastapi.io",
    "https://bsc.meowrpc.com"
  ]
} 

// BINANCE SMARTCHAIN TESTNET
const testnetInfo = {
  "chainId": 97,
  "name": "Binance SmartChain testnet",
  "currency": {
    "name": "BNB",
    "symbol": "BNB",
    "decimals": 18
  },
  "rpc": [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-2-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545",
    "https://bsc-testnet.publicnode.com",
    "https://bsc-testnet.public.blastapi.io"
  ]
} 

export default {
  mainnet: mainnetInfo,
  testnet: testnetInfo,
}
