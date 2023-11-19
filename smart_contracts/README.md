## dETH Legacy Smart contracts


Install dependencies (I had issues with the UMA core dependencies with forge, so had to use NPM):
```
forge install
npm install
```

Also, It is important to use https://github.com/OpenZeppelin/openzeppelin-contracts@d00acef as there are incompatibilities with solidity versions with the last UMA and openzeppelin-contracts releases when combining them.

Compile contracts:
```
forge build 
```

For Goerli in local blockchain:
```
anvil --fork-url <goerli-api-key-infura>
```

Export a bunch of useful addresses, and mnemonic:
```
export FINDER_ADDRESS=0xE60dBa66B85E10E7Fd18a67a6859E241A243950e
export OOV3_ADDRESS=$(cast call $FINDER_ADDRESS "getImplementationAddress(bytes32)(address)" \
	$(cast --format-bytes32-string "OptimisticOracleV3"))
export DEFAULT_CURRENCY_ADDRESS=$(cast call $OOV3_ADDRESS "defaultCurrency()(address)")
export MNEMONIC="test test test test test test test test test test test junk"
export ASSERTER_ID=1
```

Deploy DETH contract:
```
export DETH_CONTRACT=$(forge create --json src/dethLegacy.sol:DETH \
	--mnemonic "$MNEMONIC" \
	--constructor-args $OOV3_ADDRESS \
	| jq -r .deployedTo)
```

Initialize a will (We are going to use bytes32 0xfd841c6e6b287b302620bf4fedc2eea8febb1d964e210493a9ceaf2be2d088fb as a dummy hash)
```
cast send $DETH_CONTRACT "initWill(bytes32,address,address[],uint256[])" 0xfd841c6e6b287b302620bf4fedc2eea8febb1d964e210493a9ceaf2be2d088fb 0xE60dBa66B85E10E7Fd18a67a6859E241A243950e "[0x0000000000000000000000000000000000000001, 0x0000000000000000000000000000000000000002]" "[5,2]" --mnemonic "$MNEMONIC"
```

Check that the will has been registered (this is your SafeModule contract)
```
cast call $DETH_CONTRACT "willRegister(bytes32)" 0xfd841c6e6b287b302620bf4fedc2eea8febb1d964e210493a9ceaf2be2d088fb | cast parse-bytes32-address
```

Start a claim:
```
export ASSERTION_TX=$(cast send --json \
	--mnemonic "$MNEMONIC" --mnemonic-index $ASSERTER_ID \
	$DETH_CONTRACT \
	"startClaimWithMinBond(bytes32,string,address)" 0xfd841c6e6b287b302620bf4fedc2eea8febb1d964e210493a9ceaf2be2d088fb "https://skywalker.infura-ipfs.io/ipfs/QmWtweH9di9UWTxQRPWBhwnNHjBKBkecNzwQKM8hR3977V" $DEFAULT_CURRENCY_ADDRESS \
	| jq -r .transactionHash)
```

Check which is the CLAIM_ID:
```
export ASSERTION_ID=$(cast call $DETH_CONTRACT "claimsIdHashToAssertionId(bytes32)" 0xfd841c6e6b287b302620bf4fedc2eea8febb1d964e210493a9ceaf2be2d088fb)
```

We can check for this assertion_id in the oracle V3:
```
cast call $OOV3_ADDRESS "assertions(bytes32)" $ASSERTION_ID
```

We need to let time pass before settling the assertion (at least livenessOfAssertion in seconds):
```
cast rpc evm_increaseTime 99999999999
cast rpc evm_mine
```

```
cast send --mnemonic "$MNEMONIC" $OOV3_ADDRESS "settleAssertion(bytes32)" $ASSERTION_ID
```

And check in our contract that it has passed:
```
cast call $DETH_CONTRACT "verifiedClaims(bytes32)" 0xfd841c6e6b287b302620bf4fedc2eea8febb1d964e210493a9ceaf2be2d088fb
```





