import { create as ipfsHttpClient } from "ipfs-http-client";
import { MetaHeader } from "~~/components/MetaHeader";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Web3 from 'web3';

//Call Smart Contract vars
const contractAddress = '0x9c839e5f2843fbd24b07832563a3e457daa8c37f';
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
        "internalType": "bytes32",
        "name": "id",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "ipfsHash",
        "type": "bytes32"
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
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "claimsAssertionIdToIdHash",
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
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "claimsIdHashToAssertionId",
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
        "internalType": "bytes32",
        "name": "idHash",
        "type": "bytes32"
      }
    ],
    "name": "distributeETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "idHash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      }
    ],
    "name": "distributeTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
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
        "internalType": "bytes32",
        "name": "idHash",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "safeAddress",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "beneficiaries",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "shares",
        "type": "uint256[]"
      }
    ],
    "name": "initWill",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "livenessOfAssertion",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "idHash",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "ipfsLink",
        "type": "string"
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
    "inputs": [
      {
        "internalType": "string",
        "name": "s",
        "type": "string"
      }
    ],
    "name": "stringToBytes32",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "verifiedClaims",
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
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "willRegister",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const providerUrl = 'https://eth-goerli.g.alchemy.com/v2/p2xvejg4_DhkCGW_92rXRAC3-yUIaCvQ';
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
const erc20 = new web3.eth.Contract(abi, contractAddress);

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_KEY;
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

function App() {
  //Smart Contract States
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [web3Instance, setWeb3Instance] = useState(null);
  const [account, setAccount] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState(null);

  const [uploadedImages, setUploadedImages] = useState([]);
  const [textInputValue, setTextInputValue] = useState(''); 

  const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const files = form.elements.file.files; // Update here

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    // upload files
    const result = await ipfs.add(file);

    setUploadedImages([
      ...uploadedImages,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);

    // You can use textInputValue here or handle it as needed
    console.log("Text Input Value:", textInputValue);

    // Reset both the file input and the text input
    form.reset();
    setTextInputValue('');
  };

  const handleTextInputChange = (e) => {
    setTextInputValue(e.target.value);
  };

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

  const callContract = async (id, ipfsHash) => {
    try {
      setLoading(true);

      const tokenAddress = '0x07865c6E87B9F70255377e024ace6630C1Eaa37F';

      const transaction = await web3Instance.eth.sendTransaction({
        to: contractAddress,
        from: account,
        data: erc20.methods.startClaimWithMinBond(id, ipfsHash, tokenAddress).encodeABI(),
      });

      const receipt = await web3Instance.eth.getTransactionReceipt(transaction.transactionHash);

      if (receipt) {
        setTransactionStatus('Transaction successful! Your assets will arrive soon...');
      } else {
        setTransactionStatus('Transaction failed...');
      }
    } catch (error) {
      console.error('Error calling smart contract:', error.message);
      setTransactionStatus('Transaction failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MetaHeader title="Upload" description="Upload death cert" />
      <div className="app">
        <div className="app__container">
          {ipfs ? (
            <div className="">
              <div className="flex items-center flex-col flex-grow pt-10">
                <div className="px-5">
                  <h1 className="text-center mb-8">
                    <span className="block text-4xl font-bold mb-2">dETH Legacy</span>
                    <span className="block text-2xl">Upload Certificate</span>
                  </h1>
                </div>
                <form onSubmit={onSubmitHandler}>
                  <div className="flex flex-col items-center">
                    <input
                      type="text"
                      value={textInputValue}
                      onChange={handleTextInputChange}
                      placeholder="Input validation hash"
                      className="mt-3 p-2 border border-gray-300"
                    />
                    <input
                      id="file-upload"
                      type="file"
                      name="file"
                      className="file-input file-input-bordered file-input-info w-full max-w-xs mt-3"
                    />
                    <button className="btn btn-primary mt-3" type="submit">
                      Upload file
                    </button>
                  </div>
                </form>
                {transactionStatus && (
                  <p className={`mt-3 ${transactionStatus.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
                    {transactionStatus}
                  </p>
                )}
              </div>
            </div>
          ) : null}
          <div className="bg-base-300 w-full mt-16 px-8 py-12 flex flex-col items-center">
            {uploadedImages.map((image, index) => (
              <div key={image.cid.toString() + index} className="card w-96 bg-base-100 shadow-xl mb-4">
                <figure className="px-10 pt-10">
                  <img
                    src={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}
                    alt={`Uploaded #${index + 1}`}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Cert #{index + 1}</h2>
                  <div className="card-actions">
                    <Link href={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}>
                      <button className="btn btn-primary">IPFS Link</button>
                    </Link>
                  </div>
                  {index === uploadedImages.length - 1 && (
                    <div className="card-actions mt-2">
                      <button
                        className={`btn btn-primary ${loading ? 'btn-loading' : ''}`}
                        onClick={() => callContract(textInputValue, image.path)}
                        disabled={loading}
                      >
                        {loading ? 'Calling Contract...' : 'Call Contract'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;