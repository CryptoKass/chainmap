export interface ChainInfo {
  name: string;
  chainId: number;
  rpc: string[];
  currency: CurrencyInfo;

  // Optional fields
  explorerUrl?: string;
  iconUrl?: string;
  infoUrl?: string;
  ensAddress?: string;
  facuets?: string[];
}

export interface ChainMap {
  [key: string]: ChainInfo;
}

export interface NetworkMap {
  [key: string]: ChainMap;
}

export interface CurrencyInfo {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl?: string;
}
