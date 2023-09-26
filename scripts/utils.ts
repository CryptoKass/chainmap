import { JsonRpcProvider } from "ethers";
import type { NetworkMap } from "../src/types";
import fs from "fs";

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

export const loadRawNetworkMap = async () => {
  let networkMap: NetworkMap = {};

  // read all json files in the data folder
  const files = fs
    .readdirSync("./data")
    .filter((file) => file.endsWith(".json"))
    .map((file) => Bun.file(`./data/${file}`));

  for (let file of files) {
    const name = (file.name || "").replace(".json", "").replace("./data/", "");
    const data = await file.json();
    networkMap = { ...networkMap, [name]: data };
  }

  return networkMap;
};

export const writeFile = async (path: string, data: string) => {
  const res = Bun.write(path, data);
  res.then(() => console.log(`Created File '${path}' ✔️`));
  return res;
};
