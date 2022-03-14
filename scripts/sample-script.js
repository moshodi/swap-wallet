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
    const Stub = await hre.ethers.getContractFactory("Stub");
    const stub = await Stub.deploy();
    console.log("Deploying stub contract")
    await stub.deployed();
    console.log("Stub deployed to:", stub.address);
    //
    const RedToken = await hre.ethers.getContractFactory("RedToken");
    const redToken = await RedToken.deploy();
    console.log("Deploying Red Token")
    await redToken.deployed();
    console.log("Red token deployed to:", redToken.address);
    //
    const BlueToken = await hre.ethers.getContractFactory("BlueToken");
    const blueToken = await BlueToken.deploy();
    console.log("Deploying Blue Token")
    await blueToken.deployed();
    console.log("Blue Token deployed to:", blueToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });