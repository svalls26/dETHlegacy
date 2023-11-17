import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MetaGuardInterface extends utils.Interface {
    functions: {
        "addGuard(address)": FunctionFragment;
        "avatar()": FunctionFragment;
        "checkAfterExecution(bytes32,bool)": FunctionFragment;
        "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)": FunctionFragment;
        "getAllGuards()": FunctionFragment;
        "isGuardAdded(address)": FunctionFragment;
        "maxGuard()": FunctionFragment;
        "owner()": FunctionFragment;
        "removeGuard(address,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setMaxGuard(uint256)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "totalGuard()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addGuard" | "avatar" | "checkAfterExecution" | "checkTransaction" | "getAllGuards" | "isGuardAdded" | "maxGuard" | "owner" | "removeGuard" | "renounceOwnership" | "setAvatar" | "setMaxGuard" | "setUp" | "supportsInterface" | "totalGuard" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "addGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkAfterExecution", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "checkTransaction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getAllGuards", values?: undefined): string;
    encodeFunctionData(functionFragment: "isGuardAdded", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeGuard", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setMaxGuard", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "totalGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAfterExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllGuards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGuardAdded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AddedGuard(address)": EventFragment;
        "AvatarSet(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "MaxGuardSet(uint256)": EventFragment;
        "MetaGuardSetup(address,address,address,uint256,address[])": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RemovedGuard(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxGuardSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MetaGuardSetup"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedGuard"): EventFragment;
}
export interface AddedGuardEventObject {
    guard: string;
}
export type AddedGuardEvent = TypedEvent<[string], AddedGuardEventObject>;
export type AddedGuardEventFilter = TypedEventFilter<AddedGuardEvent>;
export interface AvatarSetEventObject {
    avatar: string;
}
export type AvatarSetEvent = TypedEvent<[string], AvatarSetEventObject>;
export type AvatarSetEventFilter = TypedEventFilter<AvatarSetEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface MaxGuardSetEventObject {
    maxGuard: BigNumber;
}
export type MaxGuardSetEvent = TypedEvent<[BigNumber], MaxGuardSetEventObject>;
export type MaxGuardSetEventFilter = TypedEventFilter<MaxGuardSetEvent>;
export interface MetaGuardSetupEventObject {
    initiator: string;
    owner: string;
    avatar: string;
    maxGuard: BigNumber;
    guards: string[];
}
export type MetaGuardSetupEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string[]
], MetaGuardSetupEventObject>;
export type MetaGuardSetupEventFilter = TypedEventFilter<MetaGuardSetupEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RemovedGuardEventObject {
    guard: string;
}
export type RemovedGuardEvent = TypedEvent<[string], RemovedGuardEventObject>;
export type RemovedGuardEventFilter = TypedEventFilter<RemovedGuardEvent>;
export interface MetaGuard extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MetaGuardInterface;
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
        addGuard(guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        avatar(overrides?: CallOverrides): Promise<[string]>;
        checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAllGuards(overrides?: CallOverrides): Promise<[string[]]>;
        isGuardAdded(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        maxGuard(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        removeGuard(prevGuard: PromiseOrValue<string>, guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxGuard(_maxGuard: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        totalGuard(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addGuard(guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    avatar(overrides?: CallOverrides): Promise<string>;
    checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAllGuards(overrides?: CallOverrides): Promise<string[]>;
    isGuardAdded(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    maxGuard(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    removeGuard(prevGuard: PromiseOrValue<string>, guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxGuard(_maxGuard: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    totalGuard(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addGuard(guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        avatar(overrides?: CallOverrides): Promise<string>;
        checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getAllGuards(overrides?: CallOverrides): Promise<string[]>;
        isGuardAdded(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        maxGuard(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        removeGuard(prevGuard: PromiseOrValue<string>, guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMaxGuard(_maxGuard: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        totalGuard(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddedGuard(address)"(guard?: null): AddedGuardEventFilter;
        AddedGuard(guard?: null): AddedGuardEventFilter;
        "AvatarSet(address)"(avatar?: null): AvatarSetEventFilter;
        AvatarSet(avatar?: null): AvatarSetEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "MaxGuardSet(uint256)"(maxGuard?: null): MaxGuardSetEventFilter;
        MaxGuardSet(maxGuard?: null): MaxGuardSetEventFilter;
        "MetaGuardSetup(address,address,address,uint256,address[])"(initiator?: PromiseOrValue<string> | null, owner?: null, avatar?: null, maxGuard?: null, guards?: null): MetaGuardSetupEventFilter;
        MetaGuardSetup(initiator?: PromiseOrValue<string> | null, owner?: null, avatar?: null, maxGuard?: null, guards?: null): MetaGuardSetupEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "RemovedGuard(address)"(guard?: null): RemovedGuardEventFilter;
        RemovedGuard(guard?: null): RemovedGuardEventFilter;
    };
    estimateGas: {
        addGuard(guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAllGuards(overrides?: CallOverrides): Promise<BigNumber>;
        isGuardAdded(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxGuard(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        removeGuard(prevGuard: PromiseOrValue<string>, guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxGuard(_maxGuard: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        totalGuard(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addGuard(guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkAfterExecution(txHash: PromiseOrValue<BytesLike>, success: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkTransaction(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, safeTxGas: PromiseOrValue<BigNumberish>, baseGas: PromiseOrValue<BigNumberish>, gasPrice: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, refundReceiver: PromiseOrValue<string>, signatures: PromiseOrValue<BytesLike>, msgSender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAllGuards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGuardAdded(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeGuard(prevGuard: PromiseOrValue<string>, guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxGuard(_maxGuard: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
