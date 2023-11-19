import { useState } from "react";
import { AddressInput } from "~~/components/scaffold-eth";
import { IntegerInput } from "~~/components/scaffold-eth";

/**
 * Distribute input
 */
export const DistributeInput = () => {
  const [address, setAddress] = useState("");
  const [txValue, setTxValue] = useState("");

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-2">
        <AddressInput onChange={setAddress} value={address} placeholder="Input your address" />
        <IntegerInput
          value={txValue}
          onChange={updatedTxValue => {
            setTxValue(updatedTxValue);
          }}
          placeholder="%"
        />
      </div>
    </div>
  );
};
