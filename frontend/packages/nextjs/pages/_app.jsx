import { useEffect } from "react";
import { Web3Modal } from "../context/Web3Modal";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <Web3Modal>
      <NextNProgress />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Toaster />
    </Web3Modal>
  );
};

export default ScaffoldEthApp;
