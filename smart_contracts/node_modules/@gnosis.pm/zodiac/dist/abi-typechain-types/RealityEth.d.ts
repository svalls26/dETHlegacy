import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface RealityEthInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR_TYPEHASH()": FunctionFragment;
        "INVALIDATED()": FunctionFragment;
        "TRANSACTION_TYPEHASH()": FunctionFragment;
        "addProposal(string,bytes32[])": FunctionFragment;
        "addProposalWithNonce(string,bytes32[],uint256)": FunctionFragment;
        "answerExpiration()": FunctionFragment;
        "avatar()": FunctionFragment;
        "buildQuestion(string,bytes32[])": FunctionFragment;
        "executeProposal(string,bytes32[],address,uint256,bytes,uint8)": FunctionFragment;
        "executeProposalWithIndex(string,bytes32[],address,uint256,bytes,uint8,uint256)": FunctionFragment;
        "executedProposalTransactions(bytes32,bytes32)": FunctionFragment;
        "generateTransactionHashData(address,uint256,bytes,uint8,uint256)": FunctionFragment;
        "getChainId()": FunctionFragment;
        "getGuard()": FunctionFragment;
        "getQuestionId(string,uint256)": FunctionFragment;
        "getTransactionHash(address,uint256,bytes,uint8,uint256)": FunctionFragment;
        "guard()": FunctionFragment;
        "markProposalAsInvalid(string,bytes32[])": FunctionFragment;
        "markProposalAsInvalidByHash(bytes32)": FunctionFragment;
        "markProposalWithExpiredAnswerAsInvalid(bytes32)": FunctionFragment;
        "minimumBond()": FunctionFragment;
        "oracle()": FunctionFragment;
        "owner()": FunctionFragment;
        "questionArbitrator()": FunctionFragment;
        "questionCooldown()": FunctionFragment;
        "questionIds(bytes32)": FunctionFragment;
        "questionTimeout()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAnswerExpiration(uint32)": FunctionFragment;
        "setArbitrator(address)": FunctionFragment;
        "setAvatar(address)": FunctionFragment;
        "setGuard(address)": FunctionFragment;
        "setMinimumBond(uint256)": FunctionFragment;
        "setQuestionCooldown(uint32)": FunctionFragment;
        "setQuestionTimeout(uint32)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setTemplate(uint256)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "target()": FunctionFragment;
        "template()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR_TYPEHASH" | "INVALIDATED" | "TRANSACTION_TYPEHASH" | "addProposal" | "addProposalWithNonce" | "answerExpiration" | "avatar" | "buildQuestion" | "executeProposal" | "executeProposalWithIndex" | "executedProposalTransactions" | "generateTransactionHashData" | "getChainId" | "getGuard" | "getQuestionId" | "getTransactionHash" | "guard" | "markProposalAsInvalid" | "markProposalAsInvalidByHash" | "markProposalWithExpiredAnswerAsInvalid" | "minimumBond" | "oracle" | "owner" | "questionArbitrator" | "questionCooldown" | "questionIds" | "questionTimeout" | "renounceOwnership" | "setAnswerExpiration" | "setArbitrator" | "setAvatar" | "setGuard" | "setMinimumBond" | "setQuestionCooldown" | "setQuestionTimeout" | "setTarget" | "setTemplate" | "setUp" | "target" | "template" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "INVALIDATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "TRANSACTION_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "addProposal", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "addProposalWithNonce", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "answerExpiration", values?: undefined): string;
    encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
    encodeFunctionData(functionFragment: "buildQuestion", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "executeProposal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "executeProposalWithIndex", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "executedProposalTransactions", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "generateTransactionHashData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "getQuestionId", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTransactionHash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "guard", values?: undefined): string;
    encodeFunctionData(functionFragment: "markProposalAsInvalid", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "markProposalAsInvalidByHash", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "markProposalWithExpiredAnswerAsInvalid", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "minimumBond", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "questionArbitrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "questionCooldown", values?: undefined): string;
    encodeFunctionData(functionFragment: "questionIds", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "questionTimeout", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAnswerExpiration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setArbitrator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAvatar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGuard", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setMinimumBond", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setQuestionCooldown", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setQuestionTimeout", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTemplate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "template", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INVALIDATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TRANSACTION_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addProposalWithNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "answerExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buildQuestion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposalWithIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executedProposalTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateTransactionHashData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getQuestionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markProposalAsInvalid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markProposalAsInvalidByHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markProposalWithExpiredAnswerAsInvalid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minimumBond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "questionArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "questionCooldown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "questionIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "questionTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAnswerExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setArbitrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinimumBond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setQuestionCooldown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setQuestionTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "template", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AvatarSet(address,address)": EventFragment;
        "ChangedGuard(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProposalQuestionCreated(bytes32,string)": EventFragment;
        "RealityModuleSetup(address,address,address,address)": EventFragment;
        "TargetSet(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQuestionCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RealityModuleSetup"): EventFragment;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProposalQuestionCreatedEventObject {
    questionId: string;
    proposalId: string;
}
export type ProposalQuestionCreatedEvent = TypedEvent<[
    string,
    string
], ProposalQuestionCreatedEventObject>;
export type ProposalQuestionCreatedEventFilter = TypedEventFilter<ProposalQuestionCreatedEvent>;
export interface RealityModuleSetupEventObject {
    initiator: string;
    owner: string;
    avatar: string;
    target: string;
}
export type RealityModuleSetupEvent = TypedEvent<[
    string,
    string,
    string,
    string
], RealityModuleSetupEventObject>;
export type RealityModuleSetupEventFilter = TypedEventFilter<RealityModuleSetupEvent>;
export interface TargetSetEventObject {
    previousTarget: string;
    newTarget: string;
}
export type TargetSetEvent = TypedEvent<[string, string], TargetSetEventObject>;
export type TargetSetEventFilter = TypedEventFilter<TargetSetEvent>;
export interface RealityEth extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RealityEthInterface;
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
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        INVALIDATED(overrides?: CallOverrides): Promise<[string]>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        addProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addProposalWithNonce(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        answerExpiration(overrides?: CallOverrides): Promise<[number]>;
        avatar(overrides?: CallOverrides): Promise<[string]>;
        buildQuestion(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[string]>;
        executeProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeProposalWithIndex(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, txIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGuard(overrides?: CallOverrides): Promise<[string] & {
            _guard: string;
        }>;
        getQuestionId(question: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        guard(overrides?: CallOverrides): Promise<[string]>;
        markProposalAsInvalid(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        markProposalAsInvalidByHash(questionHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        markProposalWithExpiredAnswerAsInvalid(questionHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minimumBond(overrides?: CallOverrides): Promise<[BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        questionArbitrator(overrides?: CallOverrides): Promise<[string]>;
        questionCooldown(overrides?: CallOverrides): Promise<[number]>;
        questionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        questionTimeout(overrides?: CallOverrides): Promise<[number]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAnswerExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setArbitrator(arbitrator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinimumBond(bond: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setQuestionCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setQuestionTimeout(timeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTemplate(templateId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        target(overrides?: CallOverrides): Promise<[string]>;
        template(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    INVALIDATED(overrides?: CallOverrides): Promise<string>;
    TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    addProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addProposalWithNonce(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    answerExpiration(overrides?: CallOverrides): Promise<number>;
    avatar(overrides?: CallOverrides): Promise<string>;
    buildQuestion(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string>;
    executeProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeProposalWithIndex(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, txIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    getGuard(overrides?: CallOverrides): Promise<string>;
    getQuestionId(question: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    guard(overrides?: CallOverrides): Promise<string>;
    markProposalAsInvalid(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    markProposalAsInvalidByHash(questionHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    markProposalWithExpiredAnswerAsInvalid(questionHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minimumBond(overrides?: CallOverrides): Promise<BigNumber>;
    oracle(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    questionArbitrator(overrides?: CallOverrides): Promise<string>;
    questionCooldown(overrides?: CallOverrides): Promise<number>;
    questionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    questionTimeout(overrides?: CallOverrides): Promise<number>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAnswerExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setArbitrator(arbitrator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinimumBond(bond: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setQuestionCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setQuestionTimeout(timeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTemplate(templateId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    target(overrides?: CallOverrides): Promise<string>;
    template(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        INVALIDATED(overrides?: CallOverrides): Promise<string>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        addProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        addProposalWithNonce(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        answerExpiration(overrides?: CallOverrides): Promise<number>;
        avatar(overrides?: CallOverrides): Promise<string>;
        buildQuestion(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string>;
        executeProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        executeProposalWithIndex(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, txIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<string>;
        getQuestionId(question: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        guard(overrides?: CallOverrides): Promise<string>;
        markProposalAsInvalid(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        markProposalAsInvalidByHash(questionHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        markProposalWithExpiredAnswerAsInvalid(questionHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minimumBond(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        questionArbitrator(overrides?: CallOverrides): Promise<string>;
        questionCooldown(overrides?: CallOverrides): Promise<number>;
        questionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        questionTimeout(overrides?: CallOverrides): Promise<number>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAnswerExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setArbitrator(arbitrator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMinimumBond(bond: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setQuestionCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setQuestionTimeout(timeout: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTemplate(templateId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        target(overrides?: CallOverrides): Promise<string>;
        template(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AvatarSet(address,address)"(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        AvatarSet(previousAvatar?: PromiseOrValue<string> | null, newAvatar?: PromiseOrValue<string> | null): AvatarSetEventFilter;
        "ChangedGuard(address)"(guard?: null): ChangedGuardEventFilter;
        ChangedGuard(guard?: null): ChangedGuardEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ProposalQuestionCreated(bytes32,string)"(questionId?: PromiseOrValue<BytesLike> | null, proposalId?: PromiseOrValue<string> | null): ProposalQuestionCreatedEventFilter;
        ProposalQuestionCreated(questionId?: PromiseOrValue<BytesLike> | null, proposalId?: PromiseOrValue<string> | null): ProposalQuestionCreatedEventFilter;
        "RealityModuleSetup(address,address,address,address)"(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): RealityModuleSetupEventFilter;
        RealityModuleSetup(initiator?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, avatar?: PromiseOrValue<string> | null, target?: null): RealityModuleSetupEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        INVALIDATED(overrides?: CallOverrides): Promise<BigNumber>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        addProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addProposalWithNonce(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        answerExpiration(overrides?: CallOverrides): Promise<BigNumber>;
        avatar(overrides?: CallOverrides): Promise<BigNumber>;
        buildQuestion(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
        executeProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeProposalWithIndex(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, txIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getGuard(overrides?: CallOverrides): Promise<BigNumber>;
        getQuestionId(question: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        guard(overrides?: CallOverrides): Promise<BigNumber>;
        markProposalAsInvalid(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        markProposalAsInvalidByHash(questionHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        markProposalWithExpiredAnswerAsInvalid(questionHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minimumBond(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        questionArbitrator(overrides?: CallOverrides): Promise<BigNumber>;
        questionCooldown(overrides?: CallOverrides): Promise<BigNumber>;
        questionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        questionTimeout(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAnswerExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setArbitrator(arbitrator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinimumBond(bond: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setQuestionCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setQuestionTimeout(timeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTemplate(templateId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        template(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INVALIDATED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addProposalWithNonce(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        answerExpiration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buildQuestion(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeProposal(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeProposalWithIndex(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, txIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executedProposalTransactions(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateTransactionHashData(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getQuestionId(question: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransactionHash(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operation: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        markProposalAsInvalid(proposalId: PromiseOrValue<string>, txHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        markProposalAsInvalidByHash(questionHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        markProposalWithExpiredAnswerAsInvalid(questionHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minimumBond(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        questionArbitrator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        questionCooldown(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        questionIds(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        questionTimeout(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAnswerExpiration(expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setArbitrator(arbitrator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAvatar(_avatar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGuard(_guard: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinimumBond(bond: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setQuestionCooldown(cooldown: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setQuestionTimeout(timeout: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTemplate(templateId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        template(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
