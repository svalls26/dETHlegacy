import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { OracleInterface, OracleInterfaceInterface } from "../OracleInterface";
export declare class OracleInterface__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): OracleInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleInterface;
}
