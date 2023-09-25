import rpclist from "../src";

for (let [networkName, network] of Object.entries(rpclist)) {
  for (let [chainName, chain] of Object.entries(network)) {
    for (let [rpcName, rpc] of Object.entries(chain)) {
      console.log(`${networkName}.${chainName}.${rpcName}: ${rpc},`);
    }
  }
  console.log();
}
