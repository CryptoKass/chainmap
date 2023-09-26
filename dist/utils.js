"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asProxyWithChainId = void 0;
var asProxyWithChainId = function (data, chainIdMap) {
    return new Proxy(data, {
        get: function (target, prop) {
            // If the property is a number (index)
            if (typeof prop === "string" && !isNaN(Number(prop))) {
                var chainId = Number(prop);
                var chainInfo = chainIdMap[chainId];
                return target[chainInfo.network][chainInfo.chain];
            }
            // Otherwise, access by key
            return target[prop];
        },
    });
};
exports.asProxyWithChainId = asProxyWithChainId;
