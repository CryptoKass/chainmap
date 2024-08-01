declare const _default: import("./types").Proxied<{
    optimism: {
        mainnet: {
            chainId: number;
            name: string;
            infoURL: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
    };
    base: {
        mainnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
    };
    zora: {
        mainnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
    };
    gnosis: {
        mainnet: {
            chainId: number;
            name: string;
            infoURL: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
    };
    avalanche: {
        mainnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
        testnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: string[];
        };
    };
    polygon: {
        mainnet: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
        zkevm: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
        mumbai: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
        zkevmtest: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
        };
    };
    moonbeam: {
        beam: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
        river: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
        testnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
        rock: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
    };
    smartchain: {
        mainnet: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
        };
        testnet: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
        };
    };
    harmony: {
        mainnet: {
            explorerUrl: string;
            ensAddress: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
        testnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: string[];
        };
    };
    fantom: {
        mainnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
        testnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: string[];
        };
    };
    celo: {
        mainnet: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: any[];
        };
        alfajores: {
            explorerUrl: string;
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: string[];
        };
        baklava: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            infoUrl: string;
            faucets: string[];
        };
    };
    klayton: {
        mainnet: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            infoUrl: string;
            explorerUrl: string;
            rpc: string[];
        };
    };
    cronos: {
        mainnet: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpc: string[];
            explorerUrl: string;
        };
    };
    ethereum: {
        mainnet: {
            chainId: number;
            name: string;
            iconUrl: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
        goerli: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
        sepolia: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
    };
    arbitrum: {
        mainnet: {
            chainId: number;
            name: string;
            iconUrl: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
        goerli: {
            chainId: number;
            name: string;
            iconUrl: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
        sepolia: {
            chainId: number;
            name: string;
            iconUrl: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
        nova: {
            chainId: number;
            name: string;
            currency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            explorerUrl: string;
            rpc: string[];
        };
    };
}, import("./types").ChainInfo>;
export default _default;
//# sourceMappingURL=index.d.ts.map