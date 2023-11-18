## dETH Legacy Smart contracts


Install dependencies:
```
forge install
npm install
```

Compile contracts:
```
forge build 
```

We use both NPM and forge, because I could not find a way to forge install UMA dependencies (To be checked)

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

Initialize a will:
```
cast send $DETH_CONTRACT "initWill(uint256)" 1 --mnemonic "$MNEMONIC"
```

```
cast call $DETH_CONTRACT "registration(uint256)" 1
```

Start a claim:
```
export ASSERTION_TX=$(cast send --json \
	--mnemonic "$MNEMONIC" --mnemonic-index $ASSERTER_ID \
	$DETH_CONTRACT \
	"startClaimWithMinBond(uint256,uint256,address)" 1 1 $DEFAULT_CURRENCY_ADDRESS \
	| jq -r .transactionHash)
```

Check check which is the CLAIM_ID:
```
cast call $DETH_CONTRACT "claims(uint256)" 1
```

We can check for this assertion_id in the oracle V3:
```
cast call $OOV3_ADDRESS "assertions(bytes32)" 0xfd841c6e6b287b302620bf4fedc2eea8febb1d964e210493a9ceaf2be2d088fb
```

We need to let time pass before settling the assertion:
```
cast rpc evm_increaseTime 99999999999
cast rpc evm_mine
```

```
cast send --mnemonic "$MNEMONIC" $OOV3_ADDRESS "settleAssertion(bytes32)" 0xfd841c6e6b287b302620bf4fedc2eea8febb1d964e210493a9ceaf2be2d088fb
```

And check in our contract that it has passed:
```
cast call $DETH_CONTRACT "verifiedClaims(uint256)" 1
```





