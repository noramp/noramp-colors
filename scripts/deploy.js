const hre = require("hardhat");
const fs = require('fs');
require('dotenv').config()

async function main() {
  const COLOR = await hre.ethers.getContractFactory("Color");
  const color = await COLOR.deploy();
  await color.deployed();
  console.log("color contract deployed to:", color.address);

  const YIELDTOKEN = await hre.ethers.getContractFactory("YieldToken");
  const yieldtoken = await YIELDTOKEN.deploy(color.address);
  await yieldtoken.deployed();
  console.log("yieldtoken contract deployed to:", yieldtoken.address);

  await color.setYieldToken(yieldtoken.address);

  if (process.env.SMART_CONTRACT_ENV == "local") {
    let config = `
        export const _nftaddress_local = "${color.address}"
        export const _yieldtokenaddress_local = "${yieldtoken.address}"

        `
    let data = JSON.stringify(config)

    fs.writeFileSync('local-config.js', JSON.parse(data))
  }
  else if (process.env.SMART_CONTRACT_ENV == "testnet") {
    let config = `
        export const _nftaddress_testnet = "${color.address}" 
        export const _yieldtokenaddress_testnet = "${yieldtoken.address}"
    
        `
    let data = JSON.stringify(config)

    fs.writeFileSync('testnet-config.js', JSON.parse(data))
  }
  else if (process.env.SMART_CONTRACT_ENV == "mainnet") {
    let config = `
        export const _nftaddress_mainnet = "${color.address}"
        export const _yieldtokenaddress_mainnet = "${yieldtoken.address}"    
        `
    let data = JSON.stringify(config)

    fs.writeFileSync('mainnet-config.js', JSON.parse(data))
  }


}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });