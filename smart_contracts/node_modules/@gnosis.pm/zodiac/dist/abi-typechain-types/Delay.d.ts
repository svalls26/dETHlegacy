import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface DelayInterface extends utils.Interface {
    functions: {
        "avatar()": FunctionFragment;
        "disableModule(address,address)": FunctionFragment;
        "enableModule(address)": FunctionFragment;
        "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
        "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": FunctionFragment;
        "executeNextTx(address,uint256,bytes,uint8)": FunctionFragment;
        "getGuard()": FunctionFragment;
        "getModulesPaginated(address,uint256)": FunctionFragment;
        "getTransactionHash(address,uint256,bytes,uint8)": FunctionFragment;
        "getTxCreatedAt(uint256)": FunctionFragment;
        "getTxHash(uint256)": FunctionFragment;
        "guard()": FunctionFragment;
        "isModuleEnabled(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "queueNonce()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setTxCooldown(uint256)": FunctionFragment;
        "setTxExpiration(uint256)": FunctionFragment;
        "setTxNonce(uint256)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "skipExpired()": FunctionFragment;
        "target()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "txCooldown()": FunctionFragment;
        "txCreatedAt(uint256)": FunctionFragment;
        "txExpiration()": FunctionFragment;
        "txHash(uint256)": FunctionFragment;
        "txNonce()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "avatar" | "disableModule" | "enableModule" | "execTransactionFromModule" | "execTransactionFromModuleReturnData" | "executeNextTx" | "getGuard" | "getModulesPaginated" | "getTransactionHash" | "getTxCreatedAt" | "getTxHash" | "guard" | "isModuleEnabled" | "owner" | "queueNonce" | "renounceOwnership" | "setAvatar" | "setGuard" | "setTarget" | "setTxCooldown" | "setTxExpiration" | "setTxNonce" | "setUp" | "skipExpired" | "target" | "transferOwnership" | "txCooldown" | "txCreatedAt" | "txExpiration" | "txHash" | "txNonce"): FunctionFragment;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableModule", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "enableModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModule", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "execTransactionFromModuleReturnData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "executeNextTx", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "getModulesPaginated", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTransactionHash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTxCreatedAt", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTxHash", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "isModuleEnabled", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "queueNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTxCooldown", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTxExpiration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTxNonce", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "skipExpired", values?: undefined): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "txCooldown", values?: undefined): string;
    encodeFunctionData(functionFragment: "txCreatedAt", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "txExpiration", values?: undefined): string;
    encodeFunctionData(functionFragment: "txHash", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "txNonce", values?: undefined): string;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execTransactionFromModuleReturnData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeNextTx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModulesPaginated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTxCreatedAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTxHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isModuleEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTxCooldown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTxExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTxNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skipExpired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txCooldown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txCreatedAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txNonce", data: BytesLike): Result;
    events: {
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "DelaySetup(address,address,address,address)": EventFragment;
        "DisabledModule(address)": EventFragment;
        "EnabledModule(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TargetSet(address,address)": EventFragment;
        "TransactionAdded(uint256,bytes32,address,uint256,bytes,uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelaySetup"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnabledModule"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransactionAdded"): EventFragment;
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
export interface DelaySetupEventObject {
    initiator: string;
    owner: string;
    avatar: string;
    target: string;
}
export type DelaySetupEvent = TypedEvent<[
    string,
    string,
    string,
    string
], DelaySetupEventObject>;
export type DelaySetupEventFilter = TypedEventFilter<DelaySetupEvent>;
export interface DisabledModuleEventObject {
    module: string;
}
export type DisabledModuleEvent = TypedEvent<[
    string
], DisabledModuleEventObject>;
export type DisabledModuleEventFilter = TypedEventFilter<DisabledModuleEvent>;
export interface EnabledModuleEventObject {
    module: string;
}
export type EnabledModuleEvent = TypedEvent<[string], EnabledModuleEventObject>;
export type EnabledModuleEventFilter = TypedEventFilter<EnabledModuleEvent>;
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
export interface TransactionAddedEventObject {
    queueNonce: BigNumber;
    txHash: string;
    to: string;
    value: BigNumber;
    data: string;
    operation: number;
}
export type TransactionAddedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    string,
    number
], TransactionAddedEventObject>;
export type TransactionAddedEventFilter = TypedEventFilter<TransactionAddedEvent>;
export interface Delay extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DelayInterface;
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
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeNextTx(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTxCreatedAt(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTxHash(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        queueNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTxCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTxExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTxNonce(_nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        skipExpired(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        target(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        txCooldown(overrides?: CallOverrides): Promise<[BigNumber]>;
        txCreatedAt(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        txExpiration(overrides?: CallOverrides): Promise<[BigNumber]>;
        txHash(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        txNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    avatar(overrides?: CallOverrides): Promise<string>;
    disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeNextTx(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
        array: string[];
        next: string;
    }>;
    getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTxCreatedAt(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTxHash(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    guard(overrides?: CallOverrides): Promise<string>;
    isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    queueNonce(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTxCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTxExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTxNonce(_nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    skipExpired(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    target(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    txCooldown(overrides?: CallOverrides): Promise<BigNumber>;
    txCreatedAt(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    txExpiration(overrides?: CallOverrides): Promise<BigNumber>;
    txHash(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    txNonce(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        avatar(overrides?: CallOverrides): Promise<string>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        enableModule(module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        executeNextTx(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[], string] & {
            array: string[];
            next: string;
        }>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTxCreatedAt(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTxHash(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        guard(overrides?: CallOverrides): Promise<string>;
        isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        queueNonce(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTxCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTxExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTxNonce(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        skipExpired(overrides?: CallOverrides): Promise<void>;
        target(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        txCooldown(overrides?: CallOverrides): Promise<BigNumber>;
        txCreatedAt(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        txExpiration(overrides?: CallOverrides): Promise<BigNumber>;
        txHash(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        txNonce(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "DelaySetup(address,address,address,address)"(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): DelaySetupEventFilter;
        DelaySetup(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): DelaySetupEventFilter;
        "DisabledModule(address)"(module?: null): DisabledModuleEventFilter;
        DisabledModule(module?: null): DisabledModuleEventFilter;
        "EnabledModule(address)"(module?: null): EnabledModuleEventFilter;
        EnabledModule(module?: null): EnabledModuleEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        "TransactionAdded(uint256,bytes32,address,uint256,bytes,uint8)"(queueNonce?: PromiseOrValue<BigNumberish> | null, txHash?: PromiseOrValue<BytesLike> | null, to?: null, value?: null, data?: null, operation?: null): TransactionAddedEventFilter;
        TransactionAdded(queueNonce?: PromiseOrValue<BigNumberish> | null, txHash?: PromiseOrValue<BytesLike> | null, to?: null, value?: null, data?: null, operation?: null): TransactionAddedEventFilter;
    };
    estimateGas: {
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeNextTx(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTxCreatedAt(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTxHash(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        queueNonce(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTxCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTxExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTxNonce(_nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        skipExpired(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        txCooldown(overrides?: CallOverrides): Promise<BigNumber>;
        txCreatedAt(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        txExpiration(overrides?: CallOverrides): Promise<BigNumber>;
        txHash(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        txNonce(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableModule(prevModule: PromiseOrValue<string>, module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        enableModule(module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModule(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execTransactionFromModuleReturnData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeNextTx(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getModulesPaginated(start: PromiseOrValue<string>, pageSize: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTxCreatedAt(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTxHash(_nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isModuleEnabled(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queueNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTxCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTxExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTxNonce(_nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        skipExpired(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        txCooldown(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        txCreatedAt(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        txExpiration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        txHash(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        txNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
