import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CirculatingSupplyErc20, CirculatingSupplyErc20Interface } from "../CirculatingSupplyErc20";
export declare class CirculatingSupplyErc20__factory {
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
    static createInterface(): CirculatingSupplyErc20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): CirculatingSupplyErc20;
}
