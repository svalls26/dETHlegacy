import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ScopeGuard, ScopeGuardInterface } from "../ScopeGuard";
export declare class ScopeGuard__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): ScopeGuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ScopeGuard;
}
