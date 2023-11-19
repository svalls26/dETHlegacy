// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "../src/dethSafeModule.sol";
import "@uma/core/contracts/optimistic-oracle-v3/implementation/ClaimData.sol";
import "@uma/core/contracts/optimistic-oracle-v3/interfaces/OptimisticOracleV3Interface.sol";

contract DETH {

    mapping(bytes32 => address) public willRegister;
    mapping(bytes32 => bytes32) public claimsIdHashToAssertionId;
    mapping(bytes32 => bytes32) public claimsAssertionIdToIdHash;
    mapping(bytes32 => uint256) public verifiedClaims;

    bytes32 public immutable defaultIdentifier;
    OptimisticOracleV3Interface _oo;
    uint64 public livenessOfAssertion = 60*60*24*365;

    event DataAsserted(bytes32 id, bytes32 ipfsHash, address indexed asserter, bytes32 assertionId);

    constructor(address _optimisticOracleV3){
        _oo = OptimisticOracleV3Interface(_optimisticOracleV3);
        defaultIdentifier = _oo.defaultIdentifier();
    }

    // Start a Will, indicating the beneficiaries and the splits.
    function initWill(bytes32 idHash, address safeAddress, address[] memory beneficiaries, uint256[] memory shares) public returns(address){
        require (willRegister[idHash]==address(0), "idHash already registered");
        DethSafeModule newContract = new DethSafeModule(safeAddress, msg.sender, beneficiaries, shares);
        willRegister[idHash] = address(newContract);
        return address(newContract);
    }

    // Get minimum number of tokens needed as a bond to start a claim with UMA optimistic oracles
    function getMinimumBondForToken(address tokenAddress) public view returns (uint256){
        return _oo.getMinimumBond(address(tokenAddress));
    }

    // Start a claim with minimum amount of token bonds
    function startClaimWithMinBond(bytes32 idHash, string memory ipfsLink, address tokenAddress) public payable{
        require (willRegister[idHash]!=address(0), "idHash not registered");

        uint256 bond = _oo.getMinimumBond(address(tokenAddress));
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), bond);
        IERC20(tokenAddress).approve(address(_oo), bond);

        //TODO real ids and hashes
        bytes32 assertionId = _oo.assertTruth(
            abi.encodePacked(
                "CLAIM: File in IPFS link ",
                (ipfsLink),
                " proves the death of a person who fulfills the hash 0x",
                ClaimData.toUtf8Bytes(idHash),
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
            livenessOfAssertion, //liveness
            IERC20(tokenAddress), //ERC20 address for bond
            bond, //amount
            defaultIdentifier, //defaultIdentifier
            bytes32(0) // domainId.
        );

        claimsIdHashToAssertionId[idHash] = assertionId;
        claimsAssertionIdToIdHash[assertionId] = idHash;

        emit DataAsserted(idHash, stringToBytes32(ipfsLink), msg.sender, assertionId);
    }

    // OptimisticOracleV3 resolve callback.
    function assertionResolvedCallback(bytes32 assertionId, bool assertedTruthfully) public {
        require(msg.sender == address(_oo));
        // If the assertion was true, then the data assertion is resolved.
        if (assertedTruthfully) {
            verifiedClaims[claimsAssertionIdToIdHash[assertionId]] = 1;
        }
    }

    // Distributes the ETH of the safe (using the safe module, after the claim has been verified)
    function distributeETH(bytes32 idHash) public{
        require (verifiedClaims[idHash] == 1, "Claim not verified");
        DethSafeModule(willRegister[idHash]).distributeETH();
    }

    // Same but for tokens
    function distributeTokens(bytes32 idHash, address tokenAddress) public{
        require (verifiedClaims[idHash] == 1, "Claim not verified");
        DethSafeModule(willRegister[idHash]).distributeTokens(tokenAddress);
    }

    // If assertion is disputed, do nothing and wait for resolution.
    // This OptimisticOracleV3 callback function needs to be defined so the OOv3 doesn't revert when it tries to call it.
    function assertionDisputedCallback(bytes32 assertionId) public {}

    // Truncate string to bytes32
    function stringToBytes32(string memory s) public pure returns (bytes32) {
        bytes memory stringBytes = bytes(s);

        if (stringBytes.length > 32) {
            assembly {
                mstore(stringBytes, 32)
            }
        }

        bytes32 result;
        assembly {
            result := mload(add(stringBytes, 32))
        }
        return result;
    }
}