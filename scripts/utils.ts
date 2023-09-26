import { JsonRpcProvider } from "ethers";
import type { NetworkMap } from "../data/types";
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

export const loadNetworkMap = async () => {
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
  res
    .then(() => console.log(`Created File '${path}' ✔️`))
    .catch((e) => console.error(`Failed to create file '${path}' ❌`, e));
  return res;
};

export const toCamelCase = (str: string) => {
  if (!str) return "";

  return str
    .toLowerCase()
    .split(" ")
    .map((word, i) => {
      if (i === 0) return word;
      if (!word[0]) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
};

export const capitalizeWords = (str: string) => {
  if (!str) return "";

  return str
    .split(" ")
    .map((word) => {
      if (!word[0]) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};
