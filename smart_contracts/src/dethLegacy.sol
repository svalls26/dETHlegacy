// SPDX-License-Identifier: GPL-3.0

//pragma solidity ^0.8.16;
pragma solidity ^0.8.0;

import "@uma/core/contracts/optimistic-oracle-v3/implementation/ClaimData.sol";
import "@uma/core/contracts/optimistic-oracle-v3/interfaces/OptimisticOracleV3Interface.sol";

contract DETH {

    mapping(address => uint256) public registration;
    
    constructor(address _optimisticOracleV3){
        OptimisticOracleV3Interface oo = OptimisticOracleV3Interface(_optimisticOracleV3);
    }

    function initWill(address hashedIdentifier) public {
        registration[hashedIdentifier] = 1;
    }



}