

pragma solidity ^0.8.0;

import "safe-contracts/contracts/base/ModuleManager.sol";
import "safe-contracts/contracts/base/OwnerManager.sol";
import "safe-contracts/contracts/common/SecuredTokenTransfer.sol";
import "safe-contracts/contracts/SafeL2.sol";

contract DethSafeModule{

    string public constant NAME = "dETH Safe Module";

    SafeL2 safe;

    address[] public _beneficiaries;
    uint256[] public _shares;

    constructor(address safeAddress, address[] memory beneficiaries, uint256[] memory shares){
        safe = SafeL2(payable(safeAddress));
        _beneficiaries = beneficiaries;
        _shares = shares;

        require (_beneficiaries.length == _shares.length, "Arrays are not the same size");
    }

    function trasferETH(address receiver, uint256 transferAmount) public{
        require (safe.execTransactionFromModule(receiver, transferAmount, "", Enum.Operation.Call), "Could not execute Ether transfer");
    }

    function trasferTokens(address tokenAddress, address receiver, uint256 transferAmount) public{
        bytes memory data = abi.encodeWithSignature("transfer(address,uint256)", receiver, transferAmount);
        require (safe.execTransactionFromModule(tokenAddress, 0, data, Enum.Operation.Call), "Could not execute token transfer");
    }

}

