

pragma solidity ^0.8.0;

import "safe-contracts/contracts/base/ModuleManager.sol";
import "safe-contracts/contracts/base/OwnerManager.sol";
import "safe-contracts/contracts/common/SecuredTokenTransfer.sol";
import "safe-contracts/contracts/SafeL2.sol";

// Super low energy but having import clashes...
interface IERC20_2 {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

contract DethSafeModule{

    string public constant NAME = "dETH Safe Module";

    SafeL2 _safe;
    address _safeAddress;

    address[] private _beneficiaries;
    uint256[] private _shares;
    address _dethAddress;
    uint256 _sumShares;

    modifier onlyDETH() {
        require(msg.sender == _dethAddress, "Only the master contract can call this function");
        _; 
    }

    constructor(address dethAddress, address[] memory beneficiaries, uint256[] memory shares){
        _dethAddress = dethAddress;
        _beneficiaries = beneficiaries;
        _shares = shares;

        require (_beneficiaries.length == _shares.length, "Arrays are not the same size");
        
        for (uint i=0; i<_shares.length; i++){
            _sumShares+=_shares[i];
        }
    }

    function _setSafeIfUnitialized(address safeAddress) internal {
        if (safeAddress==address(0)){
            _initSafe(safeAddress);
        }
    }

    function _initSafe(address safeAddress) internal{
        _safeAddress = safeAddress;
        _safe = SafeL2(payable(_safeAddress));
    }

    function distributeETH(address safeAddress) public onlyDETH{
        _setSafeIfUnitialized(safeAddress);
        uint256 initETH = address(_safeAddress).balance;
        for (uint i=0; i<_beneficiaries.length-1; i++){
            _transferETH(_beneficiaries[i], _shares[i] * initETH/_sumShares);
        }
        _transferETH(_beneficiaries[_beneficiaries.length], address(_safeAddress).balance);
    }

    function distributeTokens(address safeAddress, address tokenAddress) public onlyDETH{
        _setSafeIfUnitialized(safeAddress);
        IERC20_2 token = IERC20_2(tokenAddress);
        uint256 initTokens = token.balanceOf(_safeAddress);
        for (uint i=0; i<_beneficiaries.length-1; i++){
            _transferTokens(tokenAddress, _beneficiaries[i], _shares[i] * initTokens/_sumShares);
        }
        _transferTokens(tokenAddress, _beneficiaries[_beneficiaries.length], address(_safeAddress).balance);
    }

    function _transferETH(address receiver, uint256 transferAmount) private{
        require (_safe.execTransactionFromModule(receiver, transferAmount, "", Enum.Operation.Call), "Could not execute Ether transfer");
    }

    function _transferTokens(address tokenAddress, address receiver, uint256 transferAmount) private{
        bytes memory data = abi.encodeWithSignature("transfer(address,uint256)", receiver, transferAmount);
        require (_safe.execTransactionFromModule(tokenAddress, 0, data, Enum.Operation.Call), "Could not execute token transfer");
    }

}

