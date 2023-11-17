import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface Erc721VotesInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "delegate(address)": FunctionFragment;
        "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "delegates(address)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getPastTotalSupply(uint256)": FunctionFragment;
        "getPastVotes(address,uint256)": FunctionFragment;
        "getVotes(address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "safeMint(address)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setUp(bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "approve" | "balanceOf" | "burn" | "delegate" | "delegateBySig" | "delegates" | "getApproved" | "getPastTotalSupply" | "getPastVotes" | "getVotes" | "isApprovedForAll" | "name" | "nonces" | "owner" | "ownerOf" | "pause" | "paused" | "renounceOwnership" | "safeMint" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setUp" | "supportsInterface" | "symbol" | "tokenByIndex" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "transferFrom" | "transferOwnership" | "unpause"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "delegate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "delegateBySig", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "delegates", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPastTotalSupply", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPastVotes", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getVotes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeMint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setUp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "DelegateChanged(address,address,address)": EventFragment;
        "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
        "ERC721VotesSetUp(address,string,string)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC721VotesSetUp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface DelegateChangedEventObject {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
}
export type DelegateChangedEvent = TypedEvent<[
    string,
    string,
    string
], DelegateChangedEventObject>;
export type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;
export interface DelegateVotesChangedEventObject {
    delegate: string;
    previousBalance: BigNumber;
    newBalance: BigNumber;
}
export type DelegateVotesChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DelegateVotesChangedEventObject>;
export type DelegateVotesChangedEventFilter = TypedEventFilter<DelegateVotesChangedEvent>;
export interface ERC721VotesSetUpEventObject {
    owner: string;
    name: string;
    symbol: string;
}
export type ERC721VotesSetUpEvent = TypedEvent<[
    string,
    string,
    string
], ERC721VotesSetUpEventObject>;
export type ERC721VotesSetUpEventFilter = TypedEventFilter<ERC721VotesSetUpEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface Erc721Votes extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Erc721VotesInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delegate(delegatee: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delegateBySig(delegatee: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getPastTotalSupply(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPastVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeMint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delegate(delegatee: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delegateBySig(delegatee: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getPastTotalSupply(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPastVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeMint(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        delegate(delegatee: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        delegateBySig(delegatee: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getPastTotalSupply(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        safeMint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "DelegateChanged(address,address,address)"(delegator?: PromiseOrValue<string> | null, fromDelegate?: PromiseOrValue<string> | null, toDelegate?: PromiseOrValue<string> | null): DelegateChangedEventFilter;
        DelegateChanged(delegator?: PromiseOrValue<string> | null, fromDelegate?: PromiseOrValue<string> | null, toDelegate?: PromiseOrValue<string> | null): DelegateChangedEventFilter;
        "DelegateVotesChanged(address,uint256,uint256)"(delegate?: PromiseOrValue<string> | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        DelegateVotesChanged(delegate?: PromiseOrValue<string> | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        "ERC721VotesSetUp(address,string,string)"(owner?: PromiseOrValue<string> | null, name?: null, symbol?: null): ERC721VotesSetUpEventFilter;
        ERC721VotesSetUp(owner?: PromiseOrValue<string> | null, name?: null, symbol?: null): ERC721VotesSetUpEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delegate(delegatee: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delegateBySig(delegatee: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPastTotalSupply(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeMint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delegate(delegatee: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delegateBySig(delegatee: PromiseOrValue<string>, nonce: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastTotalSupply(blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastVotes(account: PromiseOrValue<string>, blockNumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeMint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(initializeParams: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
