import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MultisendEncoderInterface extends utils.Interface {
    functions: {
        "encodeMultisend(address,address[],uint256[],bytes[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "encodeMultisend"): FunctionFragment;
    encodeFunctionData(functionFragment: "encodeMultisend", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[]
    ]): string;
    decodeFunctionResult(functionFragment: "encodeMultisend", data: BytesLike): Result;
    events: {};
}
export interface MultisendEncoder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MultisendEncoderInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        encodeMultisend(multisend: PromiseOrValue<string>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            number
        ] & {
            to: string;
            value: BigNumber;
            data: string;
            operation: number;
        }>;
    };
    encodeMultisend(multisend: PromiseOrValue<string>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        string,
        number
    ] & {
        to: string;
        value: BigNumber;
        data: string;
        operation: number;
    }>;
    callStatic: {
        encodeMultisend(multisend: PromiseOrValue<string>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            number
        ] & {
            to: string;
            value: BigNumber;
            data: string;
            operation: number;
        }>;
    };
    filters: {};
    estimateGas: {
        encodeMultisend(multisend: PromiseOrValue<string>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        encodeMultisend(multisend: PromiseOrValue<string>, targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
