import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TokenLike, TokenLikeInterface } from "../TokenLike";
export declare class TokenLike__factory {
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
    static createInterface(): TokenLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenLike;
}
