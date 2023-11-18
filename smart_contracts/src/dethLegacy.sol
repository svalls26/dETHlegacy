// SPDX-License-Identifier: GPL-3.0

//pragma solidity ^0.8.16;
pragma solidity ^0.8.0;

import "@uma/core/contracts/optimistic-oracle-v3/implementation/ClaimData.sol";
import "@uma/core/contracts/optimistic-oracle-v3/interfaces/OptimisticOracleV3Interface.sol";

contract DETH {

    mapping(uint256 => uint256) public registration;
    mapping(uint256 => bytes32) public claims;
    mapping(uint256 => uint256) public verifiedClaims;
    mapping(bytes32 => uint256) public claimsAssertionIdToId;

    bytes32 public immutable defaultIdentifier;
    OptimisticOracleV3Interface oo;

    event DataAsserted(uint256 id, uint256 ipfsHash, address indexed asserter, bytes32 assertionId);

    constructor(address _optimisticOracleV3){
        oo = OptimisticOracleV3Interface(_optimisticOracleV3);
        defaultIdentifier = oo.defaultIdentifier();
    }

    function testCall() public pure returns (uint256){
        return 42;
    }

    // TODO bytes32
    function initWill(uint256 id) public {
        registration[id] = 1;
    }

    function getMinimumBondForToken(address tokenAddress) public view returns (uint256){
        return oo.getMinimumBond(address(tokenAddress));
    }

    function startClaimWithMinBond(uint256 id, uint256 ipfsHash, address tokenAddress) public payable{
        require (registration[id]!=0, "hashedId not registered");

        uint256 bond = oo.getMinimumBond(address(tokenAddress));
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), bond);
        IERC20(tokenAddress).approve(address(oo), bond);

        //TODO real ids and hashes
        bytes32 assertionId = oo.assertTruth(
            abi.encodePacked(
                "CLAIM: File in IPFS hash 0x",
                ClaimData.toUtf8Bytes(bytes32(ipfsHash)),
                " proves the death of a person who fulfills the hash 0x",
                ClaimData.toUtf8Bytes(bytes32(id)),
                " with asserter: 0x",
                ClaimData.toUtf8BytesAddress(msg.sender),
                " at timestamp: ",
                ClaimData.toUtf8BytesUint(block.timestamp),
                " in the DataAsserter contract at 0x",
                ClaimData.toUtf8BytesAddress(address(this)),
                " is valid."
            ),
            msg.sender, //asserter
            address(this), //callbackRecipient
            address(0), // escalationManager.
            60*60*24*7, //liveness
            IERC20(tokenAddress), //ERC20 address for bond
            bond, //amount
            defaultIdentifier, //defaultIdentifier
            bytes32(0) // domainId.
        );

        claims[id] = assertionId;
        claimsAssertionIdToId[assertionId] = id;

        emit DataAsserted(id, ipfsHash, msg.sender, assertionId);
    }

    // OptimisticOracleV3 resolve callback.
    function assertionResolvedCallback(bytes32 assertionId, bool assertedTruthfully) public {
        require(msg.sender == address(oo));
        // If the assertion was true, then the data assertion is resolved.
        if (assertedTruthfully) {
            verifiedClaims[claimsAssertionIdToId[assertionId]] = 1;
        }

        // SPLIT FUNDS

        //     assertionsData[assertionId].resolved = true;
        //     DataAssertion memory dataAssertion = assertionsData[assertionId];
        //     emit DataAssertionResolved(dataAssertion.dataId, dataAssertion.data, dataAssertion.asserter, assertionId);
        //     // Else delete the data assertion if it was false to save gas.
        // } else delete assertionsData[assertionId];
    }

    // If assertion is disputed, do nothing and wait for resolution.
    // This OptimisticOracleV3 callback function needs to be defined so the OOv3 doesn't revert when it tries to call it.
    function assertionDisputedCallback(bytes32 assertionId) public {}

}