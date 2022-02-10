// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [owner] = await hre.ethers.getSigners();
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();

  await helloWorld.deployed();

  console.log("Hello World deployed to:", helloWorld.address);
  console.log(`Deployed by: ${owner.address}`);

  let returnString = await helloWorld.justHelloWorld();
  console.log(`Current string is ${returnString}`);

  let setString = await helloWorld.showHelloWorld('Thad');
  console.log(`Concatenated String is: ${setString}`);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
