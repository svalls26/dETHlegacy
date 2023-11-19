import { useState } from "react";
import { FireIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { AddressInput } from "~~/components/scaffold-eth";
import { Address } from "~~/components/scaffold-eth";
import { IntegerInput } from "~~/components/scaffold-eth";

function App() {
  const [address, setAddress] = useState("");
  const [txValue, setTxValue] = useState("");

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
    if (!address || !txValue) {
      alert("Please ensure that both address and percentage are filled.");
    }
    console.log("ADDING");

    const newTransactionList = [...transactionList, { address: txValue }];
    console.log(newTransactionList);
    setTransactionList(newTransactionList);
  };

  return (
    <>
      <MetaHeader title="Manage" description="Distribute assets" />
      <div className="container">
        <div className="flex items-center flex-col flex-grow pt-10">
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
              {selectedOption == "distribute" && (
                <div className="flex justify-center">
                  <AddressInput onChange={setAddress} value={address} placeholder="Input your address" />
                  <IntegerInput
                    value={txValue}
                    onChange={updatedTxValue => {
                      setTxValue(updatedTxValue);
                    }}
                    placeholder="%"
                  />
                </div>
              )}
              {selectedOption == "donate" && (
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
                    onChange={updatedTxValue => {
                      setTxValue(updatedTxValue);
                    }}
                    placeholder="%"
                  />
                </div>
              )}
              {selectedOption == "burn" && (
                <div className="flex justify-center items-center">
                  <FireIcon className="h-8 w-8 fill-error" />
                  <p className="text-center">Burn</p>
                  <IntegerInput
                    value={txValue}
                    onChange={updatedTxValue => {
                      setTxValue(updatedTxValue);
                    }}
                    placeholder="%"
                  />
                </div>
              )}
            </div>
            {/* <div className="divider mt-10">Planned Transactions</div> */}
            {/* Display each of the transactions in a list */}

            <button className="btn btn-accent w-3/12 mt-4" onClick={addNewTransaction}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
