import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  console.log({ address });
  console.log({ isConnected });

  return (
    <>
      {isConnected ? (
        <w3m-account-button />
      ) : (
        <button className="btn btn-primary btn-sm" onClick={() => open()}>
          Connect Wallet
        </button>
      )}
    </>
  );
}
