"use strict";
// THIS FILE IS AUTOGENERATED
// DO NOT EDIT
Object.defineProperty(exports, "__esModule", { value: true });
// POLYGON
var mainnetInfo = {
    "chainId": 137,
    "name": "polygon",
    "currency": {
        "name": "Polygon",
        "symbol": "MATIC",
        "decimals": 18
    },
    "explorerUrl": "https://polygonscan.com",
    "rpc": [
        "https://polygon-bor.publicnode.com",
        "https://polygon.llamarpc.com",
        "https://polygon-mainnet.public.blastapi.io",
        "https://rpc.ankr.com/polygon",
        "https://polygon.meowrpc.com",
        "https://1rpc.io/matic"
    ]
};
// POLYGON ZKEVM
var zkevmInfo = {
    "chainId": 1101,
    "name": "polygon zkevm",
    "currency": {
        "name": "Ethereum",
        "symbol": "ETH",
        "decimals": 18
    },
    "explorerUrl": "https://zkevm.polygonscan.com",
    "rpc": [
        "https://polygon-zkevm.publicnode.com",
        "https://polygon-zkevm-mainnet.public.blastapi.io",
        "https://1rpc.io/polygon/zkevm"
    ]
};
// POLYGON MUMBAI
var mumbaiInfo = {
    "chainId": 80001,
    "name": "polygon mumbai",
    "currency": {
        "name": "Polygon",
        "symbol": "MATIC",
        "decimals": 18
    },
    "explorerUrl": "https://mumbai.polygonscan.com",
    "rpc": [
        "https://polygon-mumbai-bor.publicnode.com",
        "https://polygon-testnet.public.blastapi.io",
        "https://rpc.ankr.com/polygon_mumbai"
    ]
};
// POLYGON ZKEVM TESTNET
var zkevmtestInfo = {
    "chainId": 1442,
    "name": "polygon zkevm testnet",
    "currency": {
        "name": "Ethereum",
        "symbol": "ETH",
        "decimals": 18
    },
    "rpc": [
        "https://rpc.public.zkevm-test.net"
    ]
};
exports.default = {
    mainnet: mainnetInfo,
    zkevm: zkevmInfo,
    mumbai: mumbaiInfo,
    zkevmtest: zkevmtestInfo,
};
