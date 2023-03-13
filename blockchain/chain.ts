export const bitkub_mainnet = {
  id: 96,
  name: "Bitkub",
  network: "bitkubchain",
  nativeCurrency: {
    decimals: 18,
    name: "KUB",
    symbol: "KUB",
  },
  rpcUrls: {
    default: "https://rpc.bitkubchain.io",
  },
  blockExplorers: {
    default: { name: "BKCScan", url: "https://bkcscan.com" },
  },
  testnet: false,
};

export const bitkub_testnet = {
  id: 25_925,
  name: "bitkub_testnet",
  network: "bitkub_testnet",
  nativeCurrency: {
    decimals: 18,
    name: "KUB",
    symbol: "KUB",
  },
  rpcUrls: {
    default: "https://rpc-testnet.bitkubchain.io",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://testnet.bkcscan.com" },
  },
  testnet: false,
};
