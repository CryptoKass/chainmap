import { RpcMap } from "../data/types";
import { JsonRpcProvider } from "ethers";

export const getWorkingRPCs = async (rpcs: RpcMap) => {
  const working: RpcMap = {};

  // Check if RPCs are working
  const promises = Object.entries(rpcs).map(async ([k, v]) => {
    const provider = new JsonRpcProvider(v, undefined, { polling: false });

    try {
      await Promise.race([
        provider.getBlockNumber(),
        new Promise((_, reject) => setTimeout(reject, 1000)),
      ]);
      provider.destroy();
      console.log(` + RPC ${v} is working`);
      return [k, v];
    } catch (e) {
      console.log(` - RPC ${v} is not working.`);
      return null;
    }
  });

  const results = await Promise.all(promises);
  results.forEach((result) => {
    if (result) {
      const [k, v] = result;
      working[k] = v;
    }
  });

  return working;
};
