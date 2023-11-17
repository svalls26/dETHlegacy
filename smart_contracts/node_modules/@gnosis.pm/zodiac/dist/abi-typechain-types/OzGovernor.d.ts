import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface OzGovernorInterface extends utils.Interface {
    functions: {
        "BALLOT_TYPEHASH()": FunctionFragment;
        "COUNTING_MODE()": FunctionFragment;
        "castVote(uint256,uint8)": FunctionFragment;
        "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)": FunctionFragment;
        "castVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "execute(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "getVotes(address,uint256)": FunctionFragment;
        "hasVoted(uint256,address)": FunctionFragment;
        "hashProposal(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "lateQuorumVoteExtension()": FunctionFragment;
        "multisend()": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "proposalDeadline(uint256)": FunctionFragment;
        "proposalSnapshot(uint256)": FunctionFragment;
        "proposalThreshold()": FunctionFragment;
        "proposalVotes(uint256)": FunctionFragment;
        "propose(address[],uint256[],bytes[],string)": FunctionFragment;
        "quorum(uint256)": FunctionFragment;
        "quorumDenominator()": FunctionFragment;
        "quorumNumerator()": FunctionFragment;
        "relay(address,uint256,bytes)": FunctionFragment;
        "setLateQuorumVoteExtension(uint64)": FunctionFragment;
        "setMultisend(address)": FunctionFragment;
        "setProposalThreshold(uint256)": FunctionFragment;
        "setTarget(address)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "setVotingDelay(uint256)": FunctionFragment;
        "setVotingPeriod(uint256)": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "target()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateQuorumNumerator(uint256)": FunctionFragment;
        "version()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BALLOT_TYPEHASH" | "COUNTING_MODE" | "castVote" | "castVoteBySig" | "castVoteWithReason" | "execute" | "getVotes" | "hasVoted" | "hashProposal" | "lateQuorumVoteExtension" | "multisend" | "name" | "owner" | "proposalDeadline" | "proposalSnapshot" | "proposalThreshold" | "proposalVotes" | "propose" | "quorum" | "quorumDenominator" | "quorumNumerator" | "relay" | "setLateQuorumVoteExtension" | "setMultisend" | "setProposalThreshold" | "setTarget" | "setUp" | "setVotingDelay" | "setVotingPeriod" | "state" | "supportsInterface" | "target" | "token" | "transferOwnership" | "updateQuorumNumerator" | "version" | "votingDelay" | "votingPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "BALLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "COUNTING_MODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "castVote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "castVoteBySig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "castVoteWithReason", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "execute", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getVotes", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "hasVoted", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hashProposal", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "lateQuorumVoteExtension", values?: undefined): string;
    encodeFunctionData(functionFragment: "multisend", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalDeadline", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "proposalSnapshot", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "proposalThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalVotes", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "propose", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "quorum", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "quorumDenominator", values?: undefined): string;
    encodeFunctionData(functionFragment: "quorumNumerator", values?: undefined): string;
    encodeFunctionData(functionFragment: "relay", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setLateQuorumVoteExtension", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMultisend", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setProposalThreshold", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTarget", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setVotingDelay", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setVotingPeriod", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "state", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "target", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateQuorumNumerator", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BALLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COUNTING_MODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lateQuorumVoteExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multisend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalDeadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumDenominator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumNumerator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLateQuorumVoteExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMultisend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVotingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateQuorumNumerator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    events: {
        "LateQuorumVoteExtensionSet(uint64,uint64)": EventFragment;
        "MultisendSet(address)": EventFragment;
        "OZGovernorModuleSetUp(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalExtended(uint256,uint64)": EventFragment;
        "ProposalThresholdSet(uint256,uint256)": EventFragment;
        "QuorumNumeratorUpdated(uint256,uint256)": EventFragment;
        "TargetSet(address,address)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LateQuorumVoteExtensionSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MultisendSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OZGovernorModuleSetUp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExtended"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumNumeratorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
}
export interface LateQuorumVoteExtensionSetEventObject {
    oldVoteExtension: BigNumber;
    newVoteExtension: BigNumber;
}
export type LateQuorumVoteExtensionSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], LateQuorumVoteExtensionSetEventObject>;
export type LateQuorumVoteExtensionSetEventFilter = TypedEventFilter<LateQuorumVoteExtensionSetEvent>;
export interface MultisendSetEventObject {
    multisend: string;
}
export type MultisendSetEvent = TypedEvent<[string], MultisendSetEventObject>;
export type MultisendSetEventFilter = TypedEventFilter<MultisendSetEvent>;
export interface OZGovernorModuleSetUpEventObject {
    owner: string;
    target: string;
}
export type OZGovernorModuleSetUpEvent = TypedEvent<[
    string,
    string
], OZGovernorModuleSetUpEventObject>;
export type OZGovernorModuleSetUpEventFilter = TypedEventFilter<OZGovernorModuleSetUpEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProposalCanceledEventObject {
    proposalId: BigNumber;
}
export type ProposalCanceledEvent = TypedEvent<[
    BigNumber
], ProposalCanceledEventObject>;
export type ProposalCanceledEventFilter = TypedEventFilter<ProposalCanceledEvent>;
export interface ProposalCreatedEventObject {
    proposalId: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    description: string;
}
export type ProposalCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
], ProposalCreatedEventObject>;
export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;
export interface ProposalExecutedEventObject {
    proposalId: BigNumber;
}
export type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], ProposalExecutedEventObject>;
export type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export interface ProposalExtendedEventObject {
    proposalId: BigNumber;
    extendedDeadline: BigNumber;
}
export type ProposalExtendedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalExtendedEventObject>;
export type ProposalExtendedEventFilter = TypedEventFilter<ProposalExtendedEvent>;
export interface ProposalThresholdSetEventObject {
    oldProposalThreshold: BigNumber;
    newProposalThreshold: BigNumber;
}
export type ProposalThresholdSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalThresholdSetEventObject>;
export type ProposalThresholdSetEventFilter = TypedEventFilter<ProposalThresholdSetEvent>;
export interface QuorumNumeratorUpdatedEventObject {
    oldQuorumNumerator: BigNumber;
    newQuorumNumerator: BigNumber;
}
export type QuorumNumeratorUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], QuorumNumeratorUpdatedEventObject>;
export type QuorumNumeratorUpdatedEventFilter = TypedEventFilter<QuorumNumeratorUpdatedEvent>;
export interface TargetSetEventObject {
    previousTarget: string;
    newTarget: string;
}
export type TargetSetEvent = TypedEvent<[string, string], TargetSetEventObject>;
export type TargetSetEventFilter = TypedEventFilter<TargetSetEvent>;
export interface VoteCastEventObject {
    voter: string;
    proposalId: BigNumber;
    support: number;
    weight: BigNumber;
    reason: string;
}
export type VoteCastEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    string
], VoteCastEventObject>;
export type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;
export interface VotingDelaySetEventObject {
    oldVotingDelay: BigNumber;
    newVotingDelay: BigNumber;
}
export type VotingDelaySetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VotingDelaySetEventObject>;
export type VotingDelaySetEventFilter = TypedEventFilter<VotingDelaySetEvent>;
export interface VotingPeriodSetEventObject {
    oldVotingPeriod: BigNumber;
    newVotingPeriod: BigNumber;
}
export type VotingPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VotingPeriodSetEventObject>;
export type VotingPeriodSetEventFilter = TypedEventFilter<VotingPeriodSetEvent>;
export interface OzGovernor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OzGovernorInterface;
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
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<[string]>;
        castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        castVoteWithReason(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, reason: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execute(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        hasVoted(proposalId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        hashProposal(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lateQuorumVoteExtension(overrides?: CallOverrides): Promise<[BigNumber]>;
        multisend(overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proposalDeadline(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalSnapshot(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalVotes(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            againstVotes: BigNumber;
            forVotes: BigNumber;
            abstainVotes: BigNumber;
        }>;
        propose(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], description: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        quorum(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        quorumDenominator(overrides?: CallOverrides): Promise<[BigNumber]>;
        quorumNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;
        relay(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLateQuorumVoteExtension(newVoteExtension: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMultisend(_multisend: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProposalThreshold(newProposalThreshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVotingDelay(newVotingDelay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVotingPeriod(newVotingPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        target(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateQuorumNumerator(newQuorumNumerator: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[string]>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    COUNTING_MODE(overrides?: CallOverrides): Promise<string>;
    castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    castVoteWithReason(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, reason: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execute(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    hasVoted(proposalId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    hashProposal(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    lateQuorumVoteExtension(overrides?: CallOverrides): Promise<BigNumber>;
    multisend(overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    proposalDeadline(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    proposalSnapshot(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    proposalVotes(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        againstVotes: BigNumber;
        forVotes: BigNumber;
        abstainVotes: BigNumber;
    }>;
    propose(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], description: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    quorum(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    quorumDenominator(overrides?: CallOverrides): Promise<BigNumber>;
    quorumNumerator(overrides?: CallOverrides): Promise<BigNumber>;
    relay(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLateQuorumVoteExtension(newVoteExtension: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMultisend(_multisend: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProposalThreshold(newProposalThreshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVotingDelay(newVotingDelay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVotingPeriod(newVotingPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    target(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateQuorumNumerator(newQuorumNumerator: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<string>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<string>;
        castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteWithReason(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, reason: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        execute(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        hasVoted(proposalId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        hashProposal(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lateQuorumVoteExtension(overrides?: CallOverrides): Promise<BigNumber>;
        multisend(overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        proposalDeadline(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        proposalSnapshot(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalVotes(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            againstVotes: BigNumber;
            forVotes: BigNumber;
            abstainVotes: BigNumber;
        }>;
        propose(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], description: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        quorum(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quorumDenominator(overrides?: CallOverrides): Promise<BigNumber>;
        quorumNumerator(overrides?: CallOverrides): Promise<BigNumber>;
        relay(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setLateQuorumVoteExtension(newVoteExtension: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMultisend(_multisend: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setProposalThreshold(newProposalThreshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTarget(_target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setVotingDelay(newVotingDelay: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVotingPeriod(newVotingPeriod: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        target(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateQuorumNumerator(newQuorumNumerator: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<string>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "LateQuorumVoteExtensionSet(uint64,uint64)"(oldVoteExtension?: null, newVoteExtension?: null): LateQuorumVoteExtensionSetEventFilter;
        LateQuorumVoteExtensionSet(oldVoteExtension?: null, newVoteExtension?: null): LateQuorumVoteExtensionSetEventFilter;
        "MultisendSet(address)"(multisend?: PromiseOrValue<string> | null): MultisendSetEventFilter;
        MultisendSet(multisend?: PromiseOrValue<string> | null): MultisendSetEventFilter;
        "OZGovernorModuleSetUp(address,address)"(owner?: PromiseOrValue<string> | null, target?: PromiseOrValue<string> | null): OZGovernorModuleSetUpEventFilter;
        OZGovernorModuleSetUp(owner?: PromiseOrValue<string> | null, target?: PromiseOrValue<string> | null): OZGovernorModuleSetUpEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ProposalCanceled(uint256)"(proposalId?: null): ProposalCanceledEventFilter;
        ProposalCanceled(proposalId?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(proposalId?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(proposalId?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalExecuted(uint256)"(proposalId?: null): ProposalExecutedEventFilter;
        ProposalExecuted(proposalId?: null): ProposalExecutedEventFilter;
        "ProposalExtended(uint256,uint64)"(proposalId?: PromiseOrValue<BigNumberish> | null, extendedDeadline?: null): ProposalExtendedEventFilter;
        ProposalExtended(proposalId?: PromiseOrValue<BigNumberish> | null, extendedDeadline?: null): ProposalExtendedEventFilter;
        "ProposalThresholdSet(uint256,uint256)"(oldProposalThreshold?: null, newProposalThreshold?: null): ProposalThresholdSetEventFilter;
        ProposalThresholdSet(oldProposalThreshold?: null, newProposalThreshold?: null): ProposalThresholdSetEventFilter;
        "QuorumNumeratorUpdated(uint256,uint256)"(oldQuorumNumerator?: null, newQuorumNumerator?: null): QuorumNumeratorUpdatedEventFilter;
        QuorumNumeratorUpdated(oldQuorumNumerator?: null, newQuorumNumerator?: null): QuorumNumeratorUpdatedEventFilter;
        "TargetSet(address,address)"(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        TargetSet(previousTarget?: PromiseOrValue<string> | null, newTarget?: PromiseOrValue<string> | null): TargetSetEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: PromiseOrValue<string> | null, proposalId?: null, support?: null, weight?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: PromiseOrValue<string> | null, proposalId?: null, support?: null, weight?: null, reason?: null): VoteCastEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
    };
    estimateGas: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<BigNumber>;
        castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        castVoteWithReason(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, reason: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execute(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        hasVoted(proposalId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        hashProposal(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lateQuorumVoteExtension(overrides?: CallOverrides): Promise<BigNumber>;
        multisend(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proposalDeadline(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        proposalSnapshot(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalVotes(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        propose(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], description: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        quorum(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quorumDenominator(overrides?: CallOverrides): Promise<BigNumber>;
        quorumNumerator(overrides?: CallOverrides): Promise<BigNumber>;
        relay(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLateQuorumVoteExtension(newVoteExtension: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMultisend(_multisend: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProposalThreshold(newProposalThreshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVotingDelay(newVotingDelay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVotingPeriod(newVotingPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        target(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateQuorumNumerator(newQuorumNumerator: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        castVote(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        castVoteBySig(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        castVoteWithReason(proposalId: PromiseOrValue<BigNumberish>, support: PromiseOrValue<BigNumberish>, reason: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execute(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasVoted(proposalId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashProposal(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], descriptionHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lateQuorumVoteExtension(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multisend(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalDeadline(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalSnapshot(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalVotes(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propose(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], calldatas: PromiseOrValue<BytesLike>[], description: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        quorum(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumDenominator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumNumerator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relay(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLateQuorumVoteExtension(newVoteExtension: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMultisend(_multisend: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProposalThreshold(newProposalThreshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTarget(_target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVotingDelay(newVotingDelay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVotingPeriod(newVotingPeriod: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        state(proposalId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateQuorumNumerator(newQuorumNumerator: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
