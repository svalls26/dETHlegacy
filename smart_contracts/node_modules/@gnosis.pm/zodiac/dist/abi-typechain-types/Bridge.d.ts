import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface BridgeInterface extends utils.Interface {
    functions: {
        "amb()": FunctionFragment;
        "avatar()": FunctionFragment;
        "chainId()": FunctionFragment;
        "controller()": FunctionFragment;
        "executeTransaction(address,uint256,bytes,uint8)": FunctionFragment;
        "getGuard()": FunctionFragment;
        "guard()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAmb(address)": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setChainId(bytes32)": FunctionFragment;
        "setController(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "target()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "amb" | "avatar" | "chainId" | "controller" | "executeTransaction" | "getGuard" | "guard" | "owner" | "renounceOwnership" | "setAmb" | "setAvatar" | "setChainId" | "setController" | "setGuard" | "setTarget" | "setUp" | "target" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "amb", values?: undefined): string;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAmb", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setChainId", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setController", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "amb", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAmb", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AmbModuleSetup(address,address,address,address)": EventFragment;
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TargetSet(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AmbModuleSetup"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
}
export interface AmbModuleSetupEventObject {
    initiator: string;
    owner: string;
    avatar: string;
    target: string;
}
export type AmbModuleSetupEvent = TypedEvent<[
    string,
    string,
    string,
    string
], AmbModuleSetupEventObject>;
export type AmbModuleSetupEventFilter = TypedEventFilter<AmbModuleSetupEvent>;
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
export interface Bridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeInterface;
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
        amb(overrides?: CallOverrides): Promise<[string]>;
        avatar(overrides?: CallOverrides): Promise<[string]>;
        chainId(overrides?: CallOverrides): Promise<[string]>;
        controller(overrides?: CallOverrides): Promise<[string]>;
        executeTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAmb(_amb: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setChainId(_chainId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setController(_controller: PromiseOrValue<string>, overrides?: Overrides & {
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
        target(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    amb(overrides?: CallOverrides): Promise<string>;
    avatar(overrides?: CallOverrides): Promise<string>;
    chainId(overrides?: CallOverrides): Promise<string>;
    controller(overrides?: CallOverrides): Promise<string>;
    executeTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    guard(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAmb(_amb: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setChainId(_chainId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setController(_controller: PromiseOrValue<string>, overrides?: Overrides & {
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
    target(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        amb(overrides?: CallOverrides): Promise<string>;
        avatar(overrides?: CallOverrides): Promise<string>;
        chainId(overrides?: CallOverrides): Promise<string>;
        controller(overrides?: CallOverrides): Promise<string>;
        executeTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        guard(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAmb(_amb: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setChainId(_chainId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setController(_controller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        target(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AmbModuleSetup(address,address,address,address)"(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): AmbModuleSetupEventFilter;
        AmbModuleSetup(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): AmbModuleSetupEventFilter;
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
    };
    estimateGas: {
        amb(overrides?: CallOverrides): Promise<BigNumber>;
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAmb(_amb: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setChainId(_chainId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setController(_controller: PromiseOrValue<string>, overrides?: Overrides & {
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
        target(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        amb(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAmb(_amb: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setChainId(_chainId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setController(_controller: PromiseOrValue<string>, overrides?: Overrides & {
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
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
