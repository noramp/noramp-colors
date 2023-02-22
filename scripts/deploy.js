const hre = require("hardhat");

async function main() {
  const Colors = await hre.ethers.getContractFactory("Colors");
  const colors = await Colors.deploy();

  await colors.deployed();

  console.log("Colors deployed to:", colors.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
