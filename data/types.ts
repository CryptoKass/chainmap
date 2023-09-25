export interface RpcMap {
  [key: string]: string;
}

export interface ChainInfo {
  name: string;
  chainId: number;
  rpc: RpcMap;
}

export interface ChainMap {
  [key: string]: ChainInfo;
}

export interface NetworkMap {
  [key: string]: ChainMap;
}
