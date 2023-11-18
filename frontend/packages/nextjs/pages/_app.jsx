import { useEffect, useState } from "react";
// import { Web3Modal } from "../context/Web3Modal";
// import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useDarkMode } from "usehooks-ts";
import { goerli, mainnet } from "viem/chains";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
// import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
// import { wagmiConfig } from "~~/services/web3/wagmiConfig";
// import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, goerli];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

const ScaffoldEthApp = ({ Component, pageProps }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  // useEffect(() => {
  //   setIsDarkTheme(isDarkMode);
  // }, [isDarkMode]);

  return (
    <WagmiConfig config={wagmiConfig}>
      {/* <Web3Modal> */}
      <NextNProgress />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Toaster />
      {/* </Web3Modal> */}
    </WagmiConfig>
    // <RainbowKitProvider
    //   chains={appChains.chains}
    //   avatar={BlockieAvatar}
    //   theme={isDarkTheme ? darkTheme() : lightTheme()}
    // ></RainbowKitProvider>
  );
};

export default ScaffoldEthApp;
