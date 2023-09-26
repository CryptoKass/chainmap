export type Proxied<T, Y = any> = T & {
    [index: number]: Y;
};
export interface ChainInfo {
    name: string;
    chainId: number;
    rpc: string[];
    currency: CurrencyInfo;
    explorerUrl?: string;
    iconUrl?: string;
}
export interface ChainMap {
    [key: string]: ChainInfo;
}
export interface NetworkMap {
    [key: string]: ChainMap;
}
export interface CurrencyInfo {
    name: string;
    symbol: string;
    decimals: number;
    iconUrl?: string;
}
//# sourceMappingURL=types.d.ts.map