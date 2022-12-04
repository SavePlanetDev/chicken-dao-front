import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { useState, useEffect } from "react";
import merge from "lodash.merge";

import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
  cssStringFromTheme,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { bitkub_testnet } from "../blockchain/chain";

const myTheme = merge(darkTheme(), {
  colors: {
    // accentColor: 'linear-gradient(230.29deg, #FF9820 36.06%, #FFAE26 72.69%)',
    connectButtonBackground: 'url("../public/connectimg.png") ',
    actionButtonSecondaryBackground: 'url("../public/connectimg.png")',
  },
  shadows: {
    connectButton: "0px 10px 30px rgba(183, 50, 39, 0.2)",
  },
});

const { chains, provider } = configureChains(
  [bitkub_testnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Chicken DAO",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={myTheme}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
}

export default MyApp;
