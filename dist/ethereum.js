"use strict";
// THIS FILE IS AUTOGENERATED
// DO NOT EDIT
Object.defineProperty(exports, "__esModule", { value: true });
// ETHEREUM MAINNET
var mainnetInfo = {
    "chainId": 1,
    "name": "Ethereum mainnet",
    "currency": {
        "name": "Ethereum",
        "symbol": "ETH",
        "decimals": 18
    },
    "explorerUrl": "https://etherscan.io",
    "rpc": [
        "https://ethereum.publicnode.com",
        "https://eth.llamarpc.com",
        "https://eth-mainnet.public.blastapi.io",
        "https://rpc.ankr.com/eth",
        "https://cloudflare-eth.com"
    ]
};
// ETHEREUM GOERLI
var goerliInfo = {
    "chainId": 5,
    "name": "Ethereum goerli",
    "currency": {
        "name": "Ethereum",
        "symbol": "ETH",
        "decimals": 18
    },
    "explorerUrl": "https://goerli.etherscan.io",
    "rpc": [
        "https://ethereum-goerli.publicnode.com",
        "https://rpc.ankr.com/eth_goerli",
        "https://eth-goerli.public.blastapi.io",
        "https://rpc.notadegen.com/eth/goerli"
    ]
};
// ETHEREUM SEPOLIA
var sepoliaInfo = {
    "chainId": 11155111,
    "name": "Ethereum sepolia",
    "currency": {
        "name": "Ethereum",
        "symbol": "ETH",
        "decimals": 18
    },
    "explorerUrl": "https://sepolia.etherscan.io",
    "rpc": [
        "https://rpc.sepolia.org",
        "https://rpc2.sepolia.org",
        "https://eth-sepolia.public.blastapi.io",
        "https://rpc.notadegen.com/eth/sepolia"
    ]
};
exports.default = {
    mainnet: mainnetInfo,
    goerli: goerliInfo,
    sepolia: sepoliaInfo,
};
