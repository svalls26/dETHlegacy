import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { DSAuthority, DSAuthorityInterface } from "../DSAuthority";
export declare class DSAuthority__factory {
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
    static createInterface(): DSAuthorityInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DSAuthority;
}
