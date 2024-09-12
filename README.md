# 🗺️ ChainMap

[![npm](https://img.shields.io/npm/v/chainmap?logo=npm&label=npm&style=flat&color=blue)](https://www.npmjs.com/package/chainmap)

ChainMap provides a comprehensive map of EVM blockchain networks and their associated data. It includes information such as chain IDs, network names, RPC URLs, and currency details.

```ts
import chainMap from "chainmap";
import { JsonRpcProvider, formatUnits } from "ethers";

const ethereum = chainMap.ethereum.mainnet;
const provider = new JsonRpcProvider(ethereum.rpc[0]);
```

## Features

- 🗺️ A Comprehensive map of blockchain networks.
- 📝 Includes chain IDs, network names, image assets, RPC URLs, and currency details.
- ⚡️ Free RPC URLs for each network.
- 📅 Built daily to ensure RPCs are working.

## Installation

You can install ChainMap using npm/yarn/bun:

```bash
npm install chainmap
```

## Supported Networks

Arbitrum Goerli (421613), Arbitrum Mainnet (42161), Arbitrum Nova (42170), Arbitrum Sepolia (421614), Aurora Mainnet (1313161554), Aurora Testnet (1313161555), Avalanche C-chain (43114), Avalanche Fuji Testnet (43113), Base (8453), Binance SmartChain Mainnet (56), Binance SmartChain Testnet (97), Celo Alfajores Testnet (44787), Celo Baklava Testnet (62320), Celo Mainnet (42220), Cronos Mainnet (25), Ethereum Goerli (5), Ethereum Mainnet (1), Ethereum Sepolia (11155111), Fantom Opera (250), Fantom Testnet (4002), Gnosis (100), Harmony Mainnet Shard 0 (1666600000), Harmony Testnet Shard 0 (1666700000), Klayton Mainnet (8217), Moonbase Alpha (1287), Moonbeam (1284), Moonriver (1285), Moonrock (1288), OP Mainnet (10), Polygon (137), Polygon Mumbai (80001), Polygon Zkevm (1101), Polygon Zkevm Testnet (1442), ZkSync Mainnet (324), Zora (7777777)

## Usage

Get a specific chains data:

```ts
import chainMap from "chainmap";

chainMap.ethereum.mainnet.rpc; // <- an array of free RPC URLs
chainMap.ethereum.mainnet.chainId; // <- the chain ID e.g. "1"
chainMap.ethereum.mainnet.name; // <- the network name e.g. "Ethereum Mainnet"
chainMap.ethereum.mainnet.currency; // <- the currency details e.g. { name: "Ether", symbol: "ETH", decimals: 18 }
chainMap.ethereum.mainnet.explorerUrl; // <- the explorer URL e.g. "https://etherscan.io"
```

Get a chains data by its chain ID:

```ts
import chainMap from "chainmap";

const ethereumInfo = chainMap[1] // <- in this example '1' is the chain ID for Ethereum Mainnet.
ethereumInfo.rpc; // <- an array of free RPC URLs
... // etc
```

## Docs

`ChainInfo`: An object containing information about a blockchain.

| Property      | Type              | Description                                         |
| ------------- | ----------------- | --------------------------------------------------- |
| `name`        | string            | The name of the blockchain                          |
| `chainId`     | number            | The ID of the blockchain                            |
| `rpc`         | string[]          | An array of RPC URLs                                |
| `currency`    | CurrencyInfo      | Information about the blockchain's currency         |
| `explorerUrl` | string (optional) | The URL of the blockchain's explorer (if available) |
| `iconUrl`     | string (optional) | The URL of the blockchain's icon (if available)     |

`CurrencyInfo`: An object containing information about a blockchain's currency.

| Property   | Type              | Description                                   |
| ---------- | ----------------- | --------------------------------------------- |
| `name`     | string            | The name of the currency                      |
| `symbol`   | string            | The symbol of the currency                    |
| `decimals` | number            | The number of decimal places for the currency |
| `iconUrl`  | string (optional) | The URL of the currency's icon (if available) |

## Contributing

Chainmap source files are generated from specifications in `data` directory. During the generation process, rpcs are tested to ensure they are working. If a network fails to connect, it is removed from the generated source files.

### ✏️ Modify a network

Open the network data file `data/<network>.list.ts`, and make your modifications, ensuring the
default exported Object still confroms to the `ChainMap` interface.

### ➕ Add a network

Create a new file in the `data` directory, named `<network>.list.ts`. The file should export an object that conforms to the `ChainMap` interface.

e.g. Creating a new network called `mychain` with chain ID `1234` and RPC URL `https://mychain.com`:

```ts
import { ChainMap } from "./types";

export const MYC {
  name: "MyCoin",
  symbol: "MYC",
  decimals: 18,
  }

export default {
  mainnet: {
    chainId: 1234,
    name: "MyChain mainnet",
    currency: MYC,
    explorerUrl: "https://mychain.com",
    rpc: [
      "https://rpc.mychain.com",
      "https://rpc2.mychain.com",
    ],
  },
} as ChainMap; // <- ensures the object conforms to the ChainMap interface
```

## Generate and build

Typically source files should be generated by the github action, but you can generate them locally using bun.

**Prerequisites:**

- [Bun](https://bun.sh)

```bash
bun run generate
```

You can then build the distribution files:

```bash
bun run build
```

### Testing networks

You can check that all network RPCs are working by running:

```bash
bun test
```
