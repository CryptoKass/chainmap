import type { ChainInfo, NetworkMap, Proxied } from "./types.js";

interface ChainIdMap {
  [key: number]: { network: string; chain: string };
}

export const asProxyWithChainId = <T extends NetworkMap, Y = ChainInfo>(
  data: T,
  chainIdMap: ChainIdMap
): Proxied<T, Y> => {
  return new Proxy(data, {
    get(target, prop) {
      // If the property is a number (index)
      if (typeof prop === "string" && !isNaN(Number(prop))) {
        const chainId = Number(prop);
        const chainInfo = chainIdMap[chainId];
        return (target as any)[chainInfo.network][chainInfo.chain] as ChainInfo;
      }
      // Otherwise, access by key
      return (target as any)[prop];
    },
  }) as Proxied<T, Y>;
};
