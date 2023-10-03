"use strict";
// THIS FILE IS AUTOGENERATED
// DO NOT EDIT
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var chainIds_1 = require("./chainIds");
// Supported Networks
var harmony_1 = require("./harmony");
var cronos_1 = require("./cronos");
var moonbeam_1 = require("./moonbeam");
var base_1 = require("./base");
var fantom_1 = require("./fantom");
var smartchain_1 = require("./smartchain");
var avalanche_1 = require("./avalanche");
var gnosis_1 = require("./gnosis");
var polygon_1 = require("./polygon");
var optimism_1 = require("./optimism");
var arbitrum_1 = require("./arbitrum");
var klayton_1 = require("./klayton");
var ethereum_1 = require("./ethereum");
var celo_1 = require("./celo");
var zora_1 = require("./zora");
exports.default = (0, utils_1.asProxyWithChainId)({
    harmony: harmony_1.default,
    cronos: cronos_1.default,
    moonbeam: moonbeam_1.default,
    base: base_1.default,
    fantom: fantom_1.default,
    smartchain: smartchain_1.default,
    avalanche: avalanche_1.default,
    gnosis: gnosis_1.default,
    polygon: polygon_1.default,
    optimism: optimism_1.default,
    arbitrum: arbitrum_1.default,
    klayton: klayton_1.default,
    ethereum: ethereum_1.default,
    celo: celo_1.default,
    zora: zora_1.default,
}, chainIds_1.default);
