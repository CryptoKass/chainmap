export const asProxyArray = (data) => {
    return new Proxy(data, {
        get(target, prop) {
            // If the property is a number (index)
            if (typeof prop === "string" && !isNaN(Number(prop))) {
                const index = Number(prop);
                const keys = Object.keys(target);
                if (index >= 0 && index < keys.length) {
                    return target[keys[index]];
                }
                return undefined;
            }
            // Otherwise, access by key
            return target[prop];
        },
    });
};
export const asProxyWithChainId = (data, chainIdMap) => {
    return new Proxy(data, {
        get(target, prop) {
            // If the property is a number (index)
            if (typeof prop === "string" && !isNaN(Number(prop))) {
                const chainId = Number(prop);
                const chainInfo = chainIdMap[chainId];
                return target[chainInfo.network][chainInfo.chain];
            }
            // Otherwise, access by key
            return target[prop];
        },
    });
};
