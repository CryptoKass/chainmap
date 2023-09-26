import type { ChainInfo, NetworkMap, Proxied } from "./types";
interface ChainIdMap {
    [key: number]: {
        network: string;
        chain: string;
    };
}
export declare const asProxyWithChainId: <T extends NetworkMap, Y = ChainInfo>(data: T, chainIdMap: ChainIdMap) => Proxied<T, Y>;
export {};
//# sourceMappingURL=utils.d.ts.map