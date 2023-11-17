import { ethers } from "ethers";
/**
 * Deploy the Module Proxy Factory via the singleton factory.
 * It will therefore get the same address on any chain.
 *
 * @param hre hardhat runtime environment
 * @returns The address of the deployed Module Proxy Factory, or the zero address if it was already deployed
 */
export declare const deployModuleFactory: (signer: ethers.providers.JsonRpcSigner) => Promise<string>;
