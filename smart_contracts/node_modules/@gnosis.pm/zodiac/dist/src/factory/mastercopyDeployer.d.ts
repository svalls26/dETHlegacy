import { BytesLike, ContractFactory, ethers } from "ethers";
/**
 * Deploy a module's mastercopy via the singleton factory.
 *
 * To get the same address on any chain.
 * @param hre hardhat runtime environment
 * @param mastercopyContractFactory mastercopy to deploy
 * @param args the arguments to pass to the mastercopy's constructor
 * @returns The address of the deployed module mastercopy or the zero address if it was already deployed
 */
export declare const deployMastercopy: (signer: ethers.providers.JsonRpcSigner, mastercopyContractFactory: ContractFactory, args: Array<any>, salt: string) => Promise<string>;
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
export declare const computeTargetAddress: (signer: ethers.providers.JsonRpcSigner, mastercopyContractFactory: ContractFactory, args: Array<any>, salt: string) => Promise<{
    address: string;
    isDeployed: boolean;
}>;
export declare const deployMastercopyWithInitData: (signer: ethers.providers.JsonRpcSigner, initCode: BytesLike, salt: string) => Promise<string>;
