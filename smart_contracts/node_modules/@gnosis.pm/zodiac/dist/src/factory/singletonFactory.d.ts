import { Contract, ethers } from "ethers";
/**
 * Get the singleton factory contract (ERC-2470).
 * If it is not deployed on the newtwork, then also deploy it.
 *
 * https://eips.ethereum.org/EIPS/eip-2470
 * @param hardhat
 * @returns Singleton Factory contract
 */
export declare const getSingletonFactory: (signer: ethers.providers.JsonRpcSigner) => Promise<Contract>;
