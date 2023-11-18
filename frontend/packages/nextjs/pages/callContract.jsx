import React, { useState } from 'react';
import Web3 from 'web3';

const contractAddress = '0x0307dA205e77078E723520f78fC875Dc351354e0';

const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_optimisticOracleV3",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ipfsHash",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "asserter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "assertionId",
          "type": "bytes32"
        }
      ],
      "name": "DataAsserted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "assertionId",
          "type": "bytes32"
        }
      ],
      "name": "assertionDisputedCallback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "assertionId",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "assertedTruthfully",
          "type": "bool"
        }
      ],
      "name": "assertionResolvedCallback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "claims",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "defaultIdentifier",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "getMinimumBondForToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "initWill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "registration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "ipfsHash",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "startClaimWithMinBond",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "testCall",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];


  const providerUrl = 'https://eth-goerli.g.alchemy.com/v2/p2xvejg4_DhkCGW_92rXRAC3-yUIaCvQ';
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
  const erc20 = new web3.eth.Contract(abi, contractAddress);
  
  function App() {
    const [result, setResult] = useState(null);
  
    const callContract = async () => {
      try {
  
        console.log('Calling smart contract...');
        console.log(erc20.options.address);
  
        // Call the testCall function
        const test = await erc20.methods.testCall().call();
        console.log('Test call result:', test);
  
        // Example of sending a transaction
        // const transaction = await erc20.methods.startClaimWithMinBond(id, ipfsHash, tokenAddress).send({ value });
        // console.log('Transaction mined:', transaction.transactionHash);
      } catch (error) {
        console.error('Error calling smart contract:', error.message);
      }
    };
  
    return (
      <div className="App">
        <h1>Ethereum Smart Contract Interaction</h1>
        {result !== null ? (
          <p>Result from smart contract: {result}</p>
        ) : (
          <p>Loading...</p>
        )}
        <button className='btn btn-primary' onClick={callContract}>Call Contract</button>
      </div>
    );
  }
  
  export default App;