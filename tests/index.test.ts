import { describe, expect, test } from "bun:test";
import rpclist from "../src";
import { JsonRpcProvider } from "ethers";
import chainIds from "../src/chainIds";

describe("RPCs have the correct network Id", async () => {
  for (let [chainId, chainInfo] of Object.entries(chainIds)) {
    const rpcs = (rpclist as any)[chainInfo.network][chainInfo.chain];
    for (let rpc of Object.values(rpcs)) {
      test(`${rpc} has the correct chainId`, async () => {
        const provider = new JsonRpcProvider(rpc as string, undefined, {
          polling: false,
        });
        const network = await provider.getNetwork();
        console.log(rpc, network.chainId);
        expect(Number(network.chainId)).toEqual(Number(chainId));
        provider.destroy();
      });
    }
  }
});
