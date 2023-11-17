"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployModuleFactory = void 0;
const ethers_1 = require("ethers");
const contracts_1 = require("./contracts");
const singletonFactory_1 = require("./singletonFactory");
const types_1 = require("./types");
const { AddressZero } = ethers_1.constants;
const FactoryInitCode = contracts_1.MasterCopyInitData[types_1.KnownContracts.FACTORY].initCode;
const FactorySalt = contracts_1.MasterCopyInitData[types_1.KnownContracts.FACTORY].salt;
/**
 * Deploy the Module Proxy Factory via the singleton factory.
 * It will therefore get the same address on any chain.
 *
 * @param hre hardhat runtime environment
 * @returns The address of the deployed Module Proxy Factory, or the zero address if it was already deployed
 */
const deployModuleFactory = async (signer) => {
    console.log("Deploying the Module Proxy Factory...");
    const singletonFactory = await (0, singletonFactory_1.getSingletonFactory)(signer);
    console.log("  Singleton factory used for deployment:", singletonFactory.address);
    const targetAddress = await singletonFactory.callStatic.deploy(FactoryInitCode, FactorySalt);
    if (targetAddress === AddressZero) {
        console.log("  ✔ Module Proxy Factory already deployed to target address on this network.");
        return AddressZero;
    }
    console.log("  Target Module Proxy Factory address:        ", targetAddress);
    const transactionResponse = await singletonFactory.deploy(FactoryInitCode, FactorySalt, { gasLimit: 1000000 });
    const result = await transactionResponse.wait();
    console.log("  Deploy transaction hash:              ", result.transactionHash);
    if ((await signer.provider.getCode(targetAddress)).length < 3) {
        // will return "0x" when there is no code
        throw new Error("  \x1B[31m✘ Deployment unsuccessful: No code at target address.\x1B[0m");
    }
    else {
        console.log(`  \x1B[32m✔ Successfully deployed the Module Proxy Factory to: ${targetAddress}\x1B[0m 🎉`);
    }
    return targetAddress;
};
exports.deployModuleFactory = deployModuleFactory;
