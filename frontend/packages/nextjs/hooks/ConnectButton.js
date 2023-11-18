import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();

  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={() => open()}>
        Connect Wallet
      </button>
      {/* <button className="btn btn-primary mt-3" onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button> */}
    </>
  );
}
