import React, { useEffect, useState } from 'react';
import { ethers, AlchemyProvider } from 'ethers';

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


const provider = new AlchemyProvider("goerli", "p2xvejg4_DhkCGW_92rXRAC3-yUIaCvQ")
const contract = new ethers.Contract(contractAddress, abi, provider);


function App() {
    const [result, setResult] = useState(null);
  
    useEffect(() => {
      async function callContract() {
        try {
          console.log('Calling smart contract...');
  
          // Use callStatic method for read-only functions
          contract.testCall();
  
          console.log('Smart contract call result:', result);
  
          setResult(result);
        } catch (error) {
          console.error('Error calling smart contract:', error.message);
        }
      }
  
      // Call the function when the component mounts
      callContract();
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts
  
    return (
      <div className="App">
        <h1>Ethereum Smart Contract Interaction</h1>
        {result !== null ? (
          <p>Result from smart contract: {result}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default App;