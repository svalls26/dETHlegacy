import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ConnextInterface extends utils.Interface {
    functions: {
        "avatar()": FunctionFragment;
        "connext()": FunctionFragment;
        "getGuard()": FunctionFragment;
        "guard()": FunctionFragment;
        "origin()": FunctionFragment;
        "originSender()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setConnext(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setOrigin(uint32)": FunctionFragment;
        "setOriginSender(address)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "target()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "xReceive(bytes32,uint256,address,address,uint32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "avatar" | "connext" | "getGuard" | "guard" | "origin" | "originSender" | "owner" | "renounceOwnership" | "setAvatar" | "setConnext" | "setGuard" | "setOrigin" | "setOriginSender" | "setTarget" | "setUp" | "target" | "transferOwnership" | "xReceive"): FunctionFragment;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "connext", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "origin", values?: undefined): string;
    encodeFunctionData(functionFragment: "originSender", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setConnext", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setOrigin", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setOriginSender", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "xReceive", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "origin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "originSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConnext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOrigin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOriginSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xReceive", data: BytesLike): Result;
    events: {
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "ConnextSet(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "ModuleSetUp(address,address,address,address,uint32,address)": EventFragment;
        "OriginSenderSet(address)": EventFragment;
        "OriginSet(uint32)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TargetSet(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConnextSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModuleSetUp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OriginSenderSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OriginSet"): EventFragment;
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
export interface ConnextSetEventObject {
    connext: string;
}
export type ConnextSetEvent = TypedEvent<[string], ConnextSetEventObject>;
export type ConnextSetEventFilter = TypedEventFilter<ConnextSetEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface ModuleSetUpEventObject {
    owner: string;
    avatar: string;
    target: string;
    originSender: string;
    origin: number;
    connext: string;
}
export type ModuleSetUpEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    number,
    string
], ModuleSetUpEventObject>;
export type ModuleSetUpEventFilter = TypedEventFilter<ModuleSetUpEvent>;
export interface OriginSenderSetEventObject {
    originSender: string;
}
export type OriginSenderSetEvent = TypedEvent<[
    string
], OriginSenderSetEventObject>;
export type OriginSenderSetEventFilter = TypedEventFilter<OriginSenderSetEvent>;
export interface OriginSetEventObject {
    origin: number;
}
export type OriginSetEvent = TypedEvent<[number], OriginSetEventObject>;
export type OriginSetEventFilter = TypedEventFilter<OriginSetEvent>;
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
export interface Connext extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ConnextInterface;
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
        avatar(overrides?: CallOverrides): Promise<[string]>;
        connext(overrides?: CallOverrides): Promise<[string]>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        origin(overrides?: CallOverrides): Promise<[number]>;
        originSender(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConnext(_connext: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOrigin(_origin: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOriginSender(_originSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        target(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, _originSender: PromiseOrValue<string>, _origin: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    avatar(overrides?: CallOverrides): Promise<string>;
    connext(overrides?: CallOverrides): Promise<string>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    guard(overrides?: CallOverrides): Promise<string>;
    origin(overrides?: CallOverrides): Promise<number>;
    originSender(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConnext(_connext: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOrigin(_origin: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOriginSender(_originSender: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    target(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, _originSender: PromiseOrValue<string>, _origin: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        avatar(overrides?: CallOverrides): Promise<string>;
        connext(overrides?: CallOverrides): Promise<string>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        guard(overrides?: CallOverrides): Promise<string>;
        origin(overrides?: CallOverrides): Promise<number>;
        originSender(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setConnext(_connext: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setOrigin(_origin: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOriginSender(_originSender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        target(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, _originSender: PromiseOrValue<string>, _origin: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "ConnextSet(address)"(connext?: null): ConnextSetEventFilter;
        ConnextSet(connext?: null): ConnextSetEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "ModuleSetUp(address,address,address,address,uint32,address)"(owner?: null, avatar?: null, target?: null, originSender?: null, origin?: null, connext?: null): ModuleSetUpEventFilter;
        ModuleSetUp(owner?: null, avatar?: null, target?: null, originSender?: null, origin?: null, connext?: null): ModuleSetUpEventFilter;
        "OriginSenderSet(address)"(originSender?: null): OriginSenderSetEventFilter;
        OriginSenderSet(originSender?: null): OriginSenderSetEventFilter;
        "OriginSet(uint32)"(origin?: null): OriginSetEventFilter;
        OriginSet(origin?: null): OriginSetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
    };
    estimateGas: {
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        connext(overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        origin(overrides?: CallOverrides): Promise<BigNumber>;
        originSender(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConnext(_connext: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOrigin(_origin: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOriginSender(_originSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, _originSender: PromiseOrValue<string>, _origin: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        connext(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        origin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        originSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConnext(_connext: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOrigin(_origin: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOriginSender(_originSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, _originSender: PromiseOrValue<string>, _origin: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
