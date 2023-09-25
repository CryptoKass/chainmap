import type { NetworkMap, Proxied, RpcMap } from "./types";

export const asProxyArray = <T extends object, Y = any>(
  data: T
): Proxied<T, Y> => {
  return new Proxy(data, {
    get(target, prop) {
      // If the property is a number (index)
      if (typeof prop === "string" && !isNaN(Number(prop))) {
        const index = Number(prop);
        const keys = Object.keys(target);
        if (index >= 0 && index < keys.length) {
          return (target as any)[keys[index]];
        }
        return undefined;
      }
      // Otherwise, access by key
      return (target as any)[prop];
    },
  }) as Proxied<T, Y>;
};

interface ChainIdMap {
  [key: number]: { network: string; chain: string };
}

export const asProxyWithChainId = <
  T extends NetworkMap,
  Y = Proxied<RpcMap, string>
>(
  data: T,
  chainIdMap: ChainIdMap
): Proxied<T, Y> => {
  return new Proxy(data, {
    get(target, prop) {
      // If the property is a number (index)
      if (typeof prop === "string" && !isNaN(Number(prop))) {
        const chainId = Number(prop);
        const chainInfo = chainIdMap[chainId];
        return (target as any)[chainInfo.network][chainInfo.chain] as Proxied<
          RpcMap,
          string
        >;
      }
      // Otherwise, access by key
      return (target as any)[prop];
    },
  }) as Proxied<T, Y>;
};
