// THIS FILE IS AUTOGENERATED
// DO NOT EDIT

import { asProxyWithChainId } from "./utils";
import chainIds from "./chainIds";

// Supported Networks
import ethereum from "./ethereum";
import smartchain from "./smartchain";
import arbitrum from "./arbitrum";
import polygon from "./polygon";

export default asProxyWithChainId({
  ethereum,
  smartchain,
  arbitrum,
  polygon,
}, chainIds);
