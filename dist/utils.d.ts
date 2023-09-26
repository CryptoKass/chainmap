import type { NetworkMap, Proxied, RpcMap } from "./types";
export declare const asProxyArray: <T extends object, Y = any>(data: T) => Proxied<T, Y>;
interface ChainIdMap {
    [key: number]: {
        network: string;
        chain: string;
    };
}
export declare const asProxyWithChainId: <T extends NetworkMap, Y = Proxied<RpcMap, string>>(data: T, chainIdMap: ChainIdMap) => Proxied<T, Y>;
export {};
//# sourceMappingURL=utils.d.ts.map