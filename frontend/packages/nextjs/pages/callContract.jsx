import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [web3Instance, setWeb3Instance] = useState(null);
  const [account, setAccount] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3Instance(web3Instance);

        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
        } catch (error) {
          console.error('Error fetching accounts:', error);
        }
      }
    };

    initWeb3();
  }, []);

  const callContract = async () => {
    try {
      setLoading(true);

      console.log('Calling smart contract...');
      console.log(contractAddress);

      // Get the parameters for startClaimWithMinBond
      const id = 134; // Replace with the actual value
      const ipfsHash = 456; // Replace with the actual value
      const tokenAddress = '0x07865c6E87B9F70255377e024ace6630C1Eaa37F'; // Replace with the actual value

      // Call the startClaimWithMinBond function
      const transaction = await web3Instance.eth.sendTransaction({
        to: contractAddress,
        from: account,
        data: erc20.methods.startClaimWithMinBond(id, ipfsHash, tokenAddress).encodeABI(),
      });

      // Wait for the transaction to be mined
      const receipt = await web3Instance.eth.getTransactionReceipt(transaction.transactionHash);

      console.log('Transaction receipt:', receipt);

      // Check if the transaction was successful
      if (receipt && receipt.status) {
        setTransactionStatus('Transaction successful!');
      } else {
        setTransactionStatus('Transaction failed!');
      }
    } catch (error) {
      console.error('Error calling smart contract:', error.message);
      setTransactionStatus('Transaction failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Ethereum Smart Contract Interaction</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {result !== null ? (
            <p>Result from smart contract: {result}</p>
          ) : (
            <div>
              {transactionStatus && <p>{transactionStatus}</p>}
              <p>Your funds will arrive to your wallet soon.</p>
            </div>
          )}
        </div>
      )}
      <button className="btn btn-primary" onClick={callContract}>
        Call Contract
      </button>
    </div>
  );
}

export default App;