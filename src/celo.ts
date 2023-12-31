// THIS FILE IS AUTOGENERATED
// DO NOT EDIT


// CELO MAINNET
const mainnetInfo = {
  "explorerUrl": "https://celoscan.io",
  "chainId": 42220,
  "name": "Celo Mainnet",
  "currency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": [
    "https://forno.celo.org",
    "wss://forno.celo.org/ws"
  ],
  "infoUrl": "https://docs.celo.org/",
  "faucets": []
} 

// CELO ALFAJORES TESTNET
const alfajoresInfo = {
  "explorerUrl": "https://alfajores.celoscan.io",
  "chainId": 44787,
  "name": "Celo Alfajores Testnet",
  "currency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": [
    "https://alfajores-forno.celo-testnet.org",
    "wss://alfajores-forno.celo-testnet.org/ws"
  ],
  "infoUrl": "https://docs.celo.org/",
  "faucets": [
    "https://celo.org/developers/faucet",
    "https://cauldron.pretoriaresearchlab.io/alfajores-faucet"
  ]
} 

// CELO BAKLAVA TESTNET
const baklavaInfo = {
  "chainId": 62320,
  "name": "Celo Baklava Testnet",
  "currency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": [
    "https://baklava-forno.celo-testnet.org"
  ],
  "infoUrl": "https://docs.celo.org/",
  "faucets": [
    "https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform",
    "https://cauldron.pretoriaresearchlab.io/baklava-faucet"
  ]
} 

export default {
  mainnet: mainnetInfo,
  alfajores: alfajoresInfo,
  baklava: baklavaInfo,
}
