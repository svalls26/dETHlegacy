import Web3 from "web3";
/**
 * Get the version and type of a financial contract deployed using the official UMA contract factories.
 * Note: all inputs and outputs are expressed as fixed-point (scaled by 1e18) BNs.
 * @param {Object} web3 instance. This is passed in to re-use the calling context & network of the entry point.
 * @param {string} contractAddress address of the contract in question
 * @return {Object} contract name & version
 */
export declare function findContractVersion(contractAddress: string, web3: Web3): Promise<{
    contractType: string;
    contractVersion: string;
}>;
