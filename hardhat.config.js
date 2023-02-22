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
    goerli: {
      url: process.env.GOERLI_RPC || "",
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
