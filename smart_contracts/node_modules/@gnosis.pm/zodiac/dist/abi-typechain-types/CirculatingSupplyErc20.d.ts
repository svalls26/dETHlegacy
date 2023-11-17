import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface CirculatingSupplyErc20Interface extends utils.Interface {
    functions: {
        "exclude(address)": FunctionFragment;
        "get()": FunctionFragment;
        "getExclusionsPaginated(address,uint256)": FunctionFragment;
        "isExcluded(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "removeExclusion(address,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setToken(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exclude" | "get" | "getExclusionsPaginated" | "isExcluded" | "owner" | "removeExclusion" | "renounceOwnership" | "setToken" | "setUp" | "token" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "exclude", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "get", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExclusionsPaginated", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isExcluded", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeExclusion", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "exclude", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExclusionsPaginated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isExcluded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeExclusion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "ExclusionAdded(address)": EventFragment;
        "ExclusionRemoved(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TokenSet(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExclusionAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExclusionRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenSet"): EventFragment;
}
export interface ExclusionAddedEventObject {
    excludedAddress: string;
}
export type ExclusionAddedEvent = TypedEvent<[
    string
], ExclusionAddedEventObject>;
export type ExclusionAddedEventFilter = TypedEventFilter<ExclusionAddedEvent>;
export interface ExclusionRemovedEventObject {
    RemovedAddress: string;
}
export type ExclusionRemovedEvent = TypedEvent<[
    string
], ExclusionRemovedEventObject>;
export type ExclusionRemovedEventFilter = TypedEventFilter<ExclusionRemovedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TokenSetEventObject {
    newToken: string;
}
export type TokenSetEvent = TypedEvent<[string], TokenSetEventObject>;
export type TokenSetEventFilter = TypedEventFilter<TokenSetEvent>;
export interface CirculatingSupplyErc20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CirculatingSupplyErc20Interface;
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
        exclude(exclusion: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        get(overrides?: CallOverrides): Promise<[BigNumber] & {
            circulatingSupply: BigNumber;
        }>;
        getExclusionsPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        isExcluded(_exclusion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        removeExclusion(prevExclusion: PromiseOrValue<string>, exclusion: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    exclude(exclusion: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    get(overrides?: CallOverrides): Promise<BigNumber>;
    getExclusionsPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
        array: string[];
        next: string;
    }>;
    isExcluded(_exclusion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    removeExclusion(prevExclusion: PromiseOrValue<string>, exclusion: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        exclude(exclusion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        get(overrides?: CallOverrides): Promise<BigNumber>;
        getExclusionsPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        isExcluded(_exclusion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        removeExclusion(prevExclusion: PromiseOrValue<string>, exclusion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ExclusionAdded(address)"(excludedAddress?: PromiseOrValue<string> | null): ExclusionAddedEventFilter;
        ExclusionAdded(excludedAddress?: PromiseOrValue<string> | null): ExclusionAddedEventFilter;
        "ExclusionRemoved(address)"(RemovedAddress?: PromiseOrValue<string> | null): ExclusionRemovedEventFilter;
        ExclusionRemoved(RemovedAddress?: PromiseOrValue<string> | null): ExclusionRemovedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "TokenSet(address)"(newToken?: PromiseOrValue<string> | null): TokenSetEventFilter;
        TokenSet(newToken?: PromiseOrValue<string> | null): TokenSetEventFilter;
    };
    estimateGas: {
        exclude(exclusion: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        get(overrides?: CallOverrides): Promise<BigNumber>;
        getExclusionsPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isExcluded(_exclusion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        removeExclusion(prevExclusion: PromiseOrValue<string>, exclusion: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exclude(exclusion: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        get(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExclusionsPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isExcluded(_exclusion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeExclusion(prevExclusion: PromiseOrValue<string>, exclusion: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
