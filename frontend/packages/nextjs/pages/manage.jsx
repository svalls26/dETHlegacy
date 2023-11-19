import React, { useState, useEffect } from 'react';
import { FireIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { AddressInput } from "~~/components/scaffold-eth";
import { Address } from "~~/components/scaffold-eth";
import { IntegerInput } from "~~/components/scaffold-eth";
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
  const [claim_address, setAddress] = useState("");
  const [txValue, setTxValue] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [web3Instance, setWeb3Instance] = useState(null);
  const [account, setAccount] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [textInputValue, setTextInputValue] = useState(''); 

  const [selectedOption, setSelectedOption] = useState("");
  const [transactionList, setTransactionList] = useState([]);

  const handleRadioChange = event => {
    console.log(`Selected: ${event.target.value}`);
    setSelectedOption(event.target.value);
  };

  const addNewTransaction = () => {
    if (selectedOption == "burn") {
      setAddress("0x000");
    }
    if (!claim_address || !txValue) {
      alert("Please ensure that both address and percentage are filled.");
    }
    console.log("ADDING");
    console.log(claim_address)
  };

  const handleTextInputChange = (e) => {
    setTextInputValue(e.target.value);
    console.log(textInputValue)
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

  const callContract = async (claim_address, textInputValue) => {
    try {
      setLoading(true);
  
      console.log('Calling smart contract...');
      console.log(contractAddress);
      console.log(textInputValue);
  
      // Get the parameters for initWill
      const id = web3.utils.asciiToHex(textInputValue);
      console.log("id");
      console.log(id);
      console.log("claim_address");
      console.log(claim_address);
  
      // Call the initWill function with the user input value
      const transaction = await web3Instance.eth.sendTransaction({
        to: contractAddress,
        from: account,
        data: erc20.methods.initWill(id, claim_address).encodeABI(), // Pass claim_address here
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
    <>
      <MetaHeader title="Manage" description="Distribute assets" />
      <div className="">
        <div className="flex items-center flex-col flex-grow pt-4">
          <div className="px-5">
            <h1 className="text-center mb-8">
              <span className="block text-4xl font-bold mb-2">dETH Legacy</span>
            </h1>
          </div>
        </div>
  
        <div className="bg-base-300 w-full mt-16 px-8 py-12 flex justify-center">
          <div className="flex flex-col border-opacity-50 justify-center items-center">
            <div className="card w-96 bg-info text-primary-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-center">Manage Assets</h2>
              </div>
              <div className="form-control px-10">
                <label className="label cursor-pointer">
                  <span className="label-text">Distribute</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-warning"
                    onChange={handleRadioChange}
                    value="distribute"
                  />
                </label>
              </div>
              <div className="form-control px-10">
                <label className="label cursor-pointer">
                  <span className="label-text">Donate</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-warning"
                    onChange={handleRadioChange}
                    value="donate"
                  />
                </label>
              </div>
              <div className="form-control px-10">
                <label className="label cursor-pointer">
                  <span className="label-text">Burn</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-warning"
                    onChange={handleRadioChange}
                    value="burn"
                  />
                </label>
              </div>
            </div>
  
            <div className="flex flex-col mt-4">
              {selectedOption === "distribute" && (
                <div className="flex justify-center">
                  <AddressInput onChange={setAddress} value={claim_address} placeholder="Input your address" />
                  <IntegerInput
                    value={txValue}
                    onChange={(updatedTxValue) => {
                      setTxValue(updatedTxValue);
                    }}
                    placeholder="%"
                  />
                </div>
              )}
              {selectedOption === "donate" && (
                <div className="flex justify-center">
                  <select className="input input-primary focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/50 text-gray-400">
                    <option disabled selected>
                      Select UNICEF benefactor
                    </option>
                    <option>
                      Climate Change (<Address address="0x34aA3F359A9D614239015126635CE7732c18fDF3" />)
                    </option>
                    <option>
                      Cash Assistance (<Address address="0x6E56A976b0fB385f4549879FddD7F2A43C038232" />)
                    </option>
                  </select>
                  <IntegerInput
                    value={txValue}
                    onChange={(updatedTxValue) => {
                      setTxValue(updatedTxValue);
                    }}
                    placeholder="%"
                  />
                </div>
              )}
              {selectedOption === "burn" && (
                <div className="flex justify-center items-center">
                  <FireIcon className="h-8 w-8 fill-error" />
                  <p className="text-center">Burn</p>
                  <IntegerInput
                    value={txValue}
                    onChange={(updatedTxValue) => {
                      setTxValue(updatedTxValue);
                    }}
                    placeholder="%"
                  />
                </div>
              )}
            </div>
  
            <button className="btn btn-accent w-3/12 mt-4" onClick={addNewTransaction}>
              Submit
            </button>
          </div>
        </div>
  
        <div className="mt-4"></div>
  
        <div className="bg-base-300 w-full px-8 py-4 flex justify-center items-center">
          <input
            type="text"
            value={textInputValue}
            onChange={handleTextInputChange}
            placeholder="Enter Name%Surname%last4IDdigits%Nationality"
            className="input input-primary focus:outline-none focus:bg-transparent focus:text-gray-400 h-[2rem] min-h-[2rem] px-4 border mr-2 w-2/3 font-medium placeholder:text-accent/50 text-gray-400"
          />
          <button
            className={`btn ${loading ? 'btn-loading' : 'btn-primary'}`}
            onClick={() => {
              setLoading(true);
              callContract(claim_address, textInputValue);
            }}
            disabled={loading}
          >
            {loading ? 'Deploying...' : 'Ready to Deploy'}
          </button>
        </div>
  
        <div className="mt-4"></div>
  
        {/* Transaction Status Section */}
        {transactionStatus && (
          <div className={`bg-${transactionStatus.includes('successful') ? 'success' : 'error'} w-full px-8 py-4 flex flex-col items-center`}>
            {transactionStatus.includes('successful') && (
              <>
                <p>Transaction Successful!</p>
                <p>{`Don't forget your Legacy Hash: ${web3.utils.asciiToHex(textInputValue)}`}</p>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
  
  
}

export default App;
