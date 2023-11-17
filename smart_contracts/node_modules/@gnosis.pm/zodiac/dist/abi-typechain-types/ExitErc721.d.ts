import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ExitErc721Interface extends utils.Interface {
    functions: {
        "addToDenyList(address[])": FunctionFragment;
        "avatar()": FunctionFragment;
        "circulatingSupply()": FunctionFragment;
        "collection()": FunctionFragment;
        "deniedTokens(address)": FunctionFragment;
        "exit(uint256,address[])": FunctionFragment;
        "getCirculatingSupply()": FunctionFragment;
        "getGuard()": FunctionFragment;
        "guard()": FunctionFragment;
        "owner()": FunctionFragment;
        "removeFromDenyList(address[])": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setCirculatingSupply(address)": FunctionFragment;
        "setCollection(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "target()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addToDenyList" | "avatar" | "circulatingSupply" | "collection" | "deniedTokens" | "exit" | "getCirculatingSupply" | "getGuard" | "guard" | "owner" | "removeFromDenyList" | "renounceOwnership" | "setAvatar" | "setCirculatingSupply" | "setCollection" | "setGuard" | "setTarget" | "setUp" | "supportsInterface" | "target" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "addToDenyList", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "circulatingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "collection", values?: undefined): string;
    encodeFunctionData(functionFragment: "deniedTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "exit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getCirculatingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeFromDenyList", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCirculatingSupply", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCollection", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addToDenyList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collection", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deniedTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCirculatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromDenyList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCirculatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCollection", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "ExitModuleSetup(address,address)": EventFragment;
        "ExitSuccessful(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TargetSet(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExitModuleSetup"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExitSuccessful"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
}
export interface AvatarSetEventObject {
    previousAvatar: string;
    newAvatar: string;
}
export type AvatarSetEvent = TypedEvent<[string, string], AvatarSetEventObject>;
export type AvatarSetEventFilter = TypedEventFilter<AvatarSetEvent>;
export interface ChangedGuardEventObject {
    guard: string;
}
export type ChangedGuardEvent = TypedEvent<[string], ChangedGuardEventObject>;
export type ChangedGuardEventFilter = TypedEventFilter<ChangedGuardEvent>;
export interface ExitModuleSetupEventObject {
    initiator: string;
    avatar: string;
}
export type ExitModuleSetupEvent = TypedEvent<[
    string,
    string
], ExitModuleSetupEventObject>;
export type ExitModuleSetupEventFilter = TypedEventFilter<ExitModuleSetupEvent>;
export interface ExitSuccessfulEventObject {
    leaver: string;
}
export type ExitSuccessfulEvent = TypedEvent<[
    string
], ExitSuccessfulEventObject>;
export type ExitSuccessfulEventFilter = TypedEventFilter<ExitSuccessfulEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TargetSetEventObject {
    previousTarget: string;
    newTarget: string;
}
export type TargetSetEvent = TypedEvent<[string, string], TargetSetEventObject>;
export type TargetSetEventFilter = TypedEventFilter<TargetSetEvent>;
export interface ExitErc721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExitErc721Interface;
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
        addToDenyList(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        avatar(overrides?: CallOverrides): Promise<[string]>;
        circulatingSupply(overrides?: CallOverrides): Promise<[string]>;
        collection(overrides?: CallOverrides): Promise<[string]>;
        deniedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        exit(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCirculatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        removeFromDenyList(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCirculatingSupply(_circulatingSupply: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCollection(_collection: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        target(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addToDenyList(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    avatar(overrides?: CallOverrides): Promise<string>;
    circulatingSupply(overrides?: CallOverrides): Promise<string>;
    collection(overrides?: CallOverrides): Promise<string>;
    deniedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    exit(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    guard(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    removeFromDenyList(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCirculatingSupply(_circulatingSupply: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCollection(_collection: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    target(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToDenyList(tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        avatar(overrides?: CallOverrides): Promise<string>;
        circulatingSupply(overrides?: CallOverrides): Promise<string>;
        collection(overrides?: CallOverrides): Promise<string>;
        deniedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        exit(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        getCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        guard(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        removeFromDenyList(tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setCirculatingSupply(_circulatingSupply: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setCollection(_collection: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        target(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "ExitModuleSetup(address,address)"(initiator?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null): ExitModuleSetupEventFilter;
        ExitModuleSetup(initiator?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null): ExitModuleSetupEventFilter;
        "ExitSuccessful(address)"(leaver?: PromiseOrValue<string> | null): ExitSuccessfulEventFilter;
        ExitSuccessful(leaver?: PromiseOrValue<string> | null): ExitSuccessfulEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
    };
    estimateGas: {
        addToDenyList(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        collection(overrides?: CallOverrides): Promise<BigNumber>;
        deniedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        exit(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        removeFromDenyList(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCirculatingSupply(_circulatingSupply: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCollection(_collection: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addToDenyList(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collection(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deniedTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exit(tokenId: PromiseOrValue<BigNumberish>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCirculatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeFromDenyList(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCirculatingSupply(_circulatingSupply: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCollection(_collection: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
