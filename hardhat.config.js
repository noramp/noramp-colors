require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");

require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "goerli",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC || "",
      accounts: process.env.PK !== undefined ? [process.env.PK] : [],
    },
    goerli: {
      url: process.env.GOERLI_RPC || "",
      accounts: process.env.PK !== undefined ? [process.env.PK] : [],
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC || "",
      accounts: process.env.PK !== undefined ? [process.env.PK] : [],
    },
    "base-goerli": {
      url: "https://goerli.base.org",
      accounts: [process.env.PK],
      gasPrice: 1000000000,
    },
    artio: {
      url: process.env.ARTIO_RPC || "",
      // chainID: 80085,
    mumbai: {
      url: process.env.MUMBAI_RPC || "",
      accounts: process.env.PK !== undefined ? [process.env.PK] : [],
    },
    mainnet: {
      url: process.env.MAINNET_RPC || "",
      accounts: process.env.PK !== undefined ? [process.env.PK] : [],
    },
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    showTimeSpent: true,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
