"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = void 0;
const config_1 = require("hardhat/config");
const factory_1 = require("../factory");
const deployModuleFactory_1 = require("../factory/deployModuleFactory");
const FactoryInitCode = factory_1.MasterCopyInitData[factory_1.KnownContracts.FACTORY].initCode;
const deploy = async (_, hre) => {
    const Factory = await hre.ethers.getContractFactory("ModuleProxyFactory");
    if (Factory.bytecode !== FactoryInitCode) {
        console.warn("  The compiled Module Proxy Factory (from src/factory/contracts.ts) is outdated, it does " +
            "not match the bytecode stored at MasterCopyInitData[KnownContracts.FACTORY].initCode");
    }
    const [deployer] = await hre.ethers.getSigners();
    await (0, deployModuleFactory_1.deployModuleFactory)(hre.ethers.provider.getSigner(deployer.address));
};
exports.deploy = deploy;
(0, config_1.task)("singleton-deployment", "Deploy factory through singleton factory").setAction(exports.deploy);
