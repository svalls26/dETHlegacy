"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployMastercopyWithInitData = exports.computeTargetAddress = exports.deployMastercopy = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const singletonFactory_1 = require("./singletonFactory");
const { AddressZero } = ethers_1.constants;
/**
 * Deploy a module's mastercopy via the singleton factory.
 *
 * To get the same address on any chain.
 * @param hre hardhat runtime environment
 * @param mastercopyContractFactory mastercopy to deploy
 * @param args the arguments to pass to the mastercopy's constructor
 * @returns The address of the deployed module mastercopy or the zero address if it was already deployed
 */
const deployMastercopy = async (signer, mastercopyContractFactory, args, salt) => {
    const deploymentTx = mastercopyContractFactory.getDeployTransaction(...args);
    if (!deploymentTx.data) {
        throw new Error("Unable to create the deployment data (no init code).");
    }
    return await (0, exports.deployMastercopyWithInitData)(signer, deploymentTx.data, salt);
};
exports.deployMastercopy = deployMastercopy;
/**
 * Compute a module's mastercopy address. Where it is or will be deployed. And checks if it is already deployed.
 *
 * @param hre hardhat runtime environment
 * @param mastercopyContractFactory mastercopy to get address for
 * @param args the arguments passed to the mastercopy's constructor
 * @returns {
 *  address: string; // the address where the module mastercopy will be deployed or was already deployed
 *  isDeployed: boolean; // true if the module mastercopy was already deployed on this chain
 * }
 */
const computeTargetAddress = async (signer, mastercopyContractFactory, args, salt) => {
    const deploymentTx = mastercopyContractFactory.getDeployTransaction(...args);
    const singletonFactory = await (0, singletonFactory_1.getSingletonFactory)(signer);
    if (!deploymentTx.data) {
        throw new Error("Unable to create the deployment data (no init code).");
    }
    const initCodeHash = (0, utils_1.keccak256)(deploymentTx.data);
    const computedAddress = (0, utils_1.getCreate2Address)(singletonFactory.address, salt, initCodeHash);
    const targetAddress = (0, utils_1.getAddress)((await singletonFactory.callStatic.deploy(deploymentTx.data, salt)));
    // Sanity check
    if (computedAddress !== targetAddress && targetAddress !== AddressZero) {
        throw new Error("The computed address does not match the target address and the target address is not 0x0.");
    }
    return {
        address: computedAddress,
        isDeployed: targetAddress === AddressZero,
    };
};
exports.computeTargetAddress = computeTargetAddress;
const deployMastercopyWithInitData = async (signer, initCode, salt) => {
    const singletonFactory = await (0, singletonFactory_1.getSingletonFactory)(signer);
    // throws if this for some reason is not a valid address
    const targetAddress = (0, utils_1.getAddress)((await singletonFactory.callStatic.deploy(initCode, salt)));
    const initCodeHash = (0, utils_1.keccak256)(initCode);
    const computedTargetAddress = (0, utils_1.getCreate2Address)(singletonFactory.address, salt, initCodeHash);
    if (targetAddress === AddressZero) {
        console.log(`  ✔ Mastercopy already deployed to: ${computedTargetAddress}`);
        return AddressZero;
    }
    // Sanity check
    if (targetAddress !== computedTargetAddress) {
        throw new Error("The computed address does not match the target address.");
    }
    let gasLimit;
    switch (signer.provider.network.name) {
        case "optimism":
            gasLimit = 6000000;
            break;
        case "arbitrum":
            gasLimit = 200000000;
            break;
        case "avalanche":
            gasLimit = 8000000;
            break;
        case "mumbai":
            gasLimit = 8000000;
            break;
        default:
            gasLimit = 10000000;
    }
    const deployTx = await singletonFactory.deploy(initCode, salt, {
        gasLimit,
    });
    await deployTx.wait();
    if ((await signer.provider.getCode(targetAddress)).length > 2) {
        console.log(`  \x1B[32m✔ Mastercopy deployed to:        ${targetAddress} 🎉\x1B[0m `);
    }
    else {
        console.log("  \x1B[31m✘ Deployment failed.\x1B[0m");
    }
    return targetAddress;
};
exports.deployMastercopyWithInitData = deployMastercopyWithInitData;
