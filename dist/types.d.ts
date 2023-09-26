export type Proxied<T, Y = any> = T & {
    [index: number]: Y;
};
export interface RpcMap {
    [key: string]: string;
}
export interface ChainInfo {
    name: string;
    chainId: number;
    rpc: Proxied<RpcMap>;
}
export interface ChainMap {
    [key: string]: Proxied<RpcMap>;
}
export interface NetworkMap {
    [key: string]: ChainMap;
}
//# sourceMappingURL=types.d.ts.map