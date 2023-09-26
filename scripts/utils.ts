import { JsonRpcProvider } from "ethers";

export const getWorkingRPCs = async (rpcs: string[]) => {
  const working: string[] = [];

  // Check if RPCs are working
  const promises = rpcs.map(async (v) => {
    const provider = new JsonRpcProvider(v, undefined, { polling: false });

    try {
      await Promise.race([
        provider.getBlockNumber(),
        new Promise((_, reject) => setTimeout(reject, 1000)),
      ]);
      provider.destroy();
      console.log(` + RPC ${v} is working`);
      return v;
    } catch (e) {
      console.log(` - RPC ${v} is not working.`);
      return null;
    }
  });

  const results = await Promise.all(promises);
  results.forEach((result) => {
    if (result) working.push(result);
  });

  return working;
};

export const writeFile = async (path: string, data: string) => {
  const res = Bun.write(path, data);
  res.then(() => console.log(`Created File '${path}' ✔️`));
  return res;
};
