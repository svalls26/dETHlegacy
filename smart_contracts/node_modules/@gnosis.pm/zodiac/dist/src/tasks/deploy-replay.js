"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = void 0;
const config_1 = require("hardhat/config");
const factory_1 = require("../factory");
const deploy = async ({ networks }, hre) => {
    const contracts = Object.values(factory_1.KnownContracts);
    const networkList = networks ? networks : Object.keys(hre.config.networks);
    for (const network of networkList) {
        console.log(`\n\x1B[4m\x1B[1m${network.toUpperCase()}\x1B[0m`);
        try {
            hre.changeNetwork(network);
            const [deployer] = await hre.ethers.getSigners();
            const signer = hre.ethers.provider.getSigner(deployer.address);
            for (let index = 0; index < contracts.length; index++) {
                const initData = factory_1.MasterCopyInitData[contracts[index]];
                if (factory_1.MasterCopyInitData[contracts[index]] &&
                    initData.initCode &&
                    initData.salt) {
                    console.log(`    \x1B[4m${contracts[index]}\x1B[0m`);
                    try {
                        await (0, factory_1.deployMastercopyWithInitData)(signer, initData.initCode, initData.salt);
                    }
                    catch (error) {
                        console.log(`        \x1B[31m✘ Deployment failed:\x1B[0m              ${error?.reason || error}`);
                    }
                }
            }
        }
        catch (error) {
            console.log(`    \x1B[31m✘ Network skipped because:\x1B[0m            ${error?.reason || error}`);
        }
    }
};
exports.deploy = deploy;
(0, config_1.task)("deploy-replay", "Replay deployment of all mastercopies on network names provided as arguments. If no networks names are provided, the task will iterate through all networks defined in hardhat.config.ts")
    .addOptionalVariadicPositionalParam("networks")
    .setAction(exports.deploy);
