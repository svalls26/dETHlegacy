"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModuleFactoryAndMasterCopy = exports.getModuleInstance = exports.calculateProxyAddress = exports.deployAndSetUpCustomModule = exports.deployAndSetUpModule = void 0;
const ethers_1 = require("ethers");
const abi_typechain_types_1 = require("../../abi-typechain-types");
const contracts_1 = require("./contracts");
/**
 * Get the transaction for deploying a module proxy through the Module Proxy Factory.
 * This will also initialize the module proxy by calling the setup function.
 *
 * @param moduleName Name of the module to deploy (must be present in `KnownContracts`)
 * @param setupArgs The arguments for the setup function of the module
 * @param provider
 * @param chainId
 * @param saltNonce
 * @returns the transaction and the expected address of the module proxy
 */
const deployAndSetUpModule = (moduleName, setupArgs, provider, chainId, saltNonce) => {
    const { moduleFactory, moduleMastercopy } = (0, exports.getModuleFactoryAndMasterCopy)(moduleName, provider, chainId);
    return getDeployAndSetupTx(moduleFactory, moduleMastercopy, setupArgs, saltNonce);
};
exports.deployAndSetUpModule = deployAndSetUpModule;
/**
 * Get the transaction for deploying a module proxy through the Module Proxy Factory.
 * This will also initialize the module proxy by calling the setup function.
 *
 * This method is for modules that do not have a mastercopy listed in the `KnownContracts`
 * @param mastercopyAddress address of the mastercopy to use
 * @param abi abi of the module
 * @param setupArgs The arguments for the setup function of the module
 * @param provider
 * @param chainId
 * @param saltNonce
 * @returns the transaction and the expected address of the module proxy
 */
const deployAndSetUpCustomModule = (mastercopyAddress, abi, setupArgs, provider, chainId, saltNonce) => {
    const chainContracts = contracts_1.ContractAddresses[chainId];
    const moduleFactoryAddress = chainContracts.factory;
    const moduleFactory = new ethers_1.Contract(moduleFactoryAddress, contracts_1.ContractAbis.factory, provider);
    const moduleMastercopy = new ethers_1.Contract(mastercopyAddress, abi, provider);
    return getDeployAndSetupTx(moduleFactory, moduleMastercopy, setupArgs, saltNonce);
};
exports.deployAndSetUpCustomModule = deployAndSetUpCustomModule;
const getDeployAndSetupTx = (moduleFactory, moduleMastercopy, setupArgs, saltNonce) => {
    const encodedInitParams = ethers_1.ethers.utils.defaultAbiCoder.encode(setupArgs.types, setupArgs.values);
    const moduleSetupData = moduleMastercopy.interface.encodeFunctionData("setUp", [encodedInitParams]);
    const expectedModuleAddress = (0, exports.calculateProxyAddress)(moduleFactory, moduleMastercopy.address, moduleSetupData, saltNonce);
    const deployData = moduleFactory.interface.encodeFunctionData("deployModule", [moduleMastercopy.address, moduleSetupData, saltNonce]);
    const transaction = {
        data: deployData,
        to: moduleFactory.address,
        value: ethers_1.BigNumber.from(0),
    };
    return {
        transaction,
        expectedModuleAddress,
    };
};
const calculateProxyAddress = (moduleFactory, mastercopyAddress, initData, saltNonce) => {
    const mastercopyAddressFormatted = mastercopyAddress
        .toLowerCase()
        .replace(/^0x/, "");
    const byteCode = "0x602d8060093d393df3363d3d373d3d3d363d73" +
        mastercopyAddressFormatted +
        "5af43d82803e903d91602b57fd5bf3";
    const salt = ethers_1.ethers.utils.solidityKeccak256(["bytes32", "uint256"], [ethers_1.ethers.utils.solidityKeccak256(["bytes"], [initData]), saltNonce]);
    return ethers_1.ethers.utils.getCreate2Address(moduleFactory.address, salt, ethers_1.ethers.utils.keccak256(byteCode));
};
exports.calculateProxyAddress = calculateProxyAddress;
const getModuleInstance = (moduleName, moduleAddress, provider) => {
    const moduleIsNotSupported = !Object.keys(contracts_1.ContractFactories).includes(moduleName);
    if (moduleIsNotSupported) {
        throw new Error("Module " + moduleName + " not supported");
    }
    return contracts_1.ContractFactories[moduleName].connect(moduleAddress, provider);
};
exports.getModuleInstance = getModuleInstance;
const getModuleFactoryAndMasterCopy = (moduleName, provider, chainId) => {
    const chainContracts = contracts_1.ContractAddresses[chainId];
    const masterCopyAddress = chainContracts[moduleName];
    const factoryAddress = chainContracts.factory;
    const moduleMastercopy = (0, exports.getModuleInstance)(moduleName, masterCopyAddress, provider);
    const moduleFactory = abi_typechain_types_1.ModuleProxyFactory__factory.connect(factoryAddress, provider);
    return {
        moduleFactory,
        moduleMastercopy,
    };
};
exports.getModuleFactoryAndMasterCopy = getModuleFactoryAndMasterCopy;
