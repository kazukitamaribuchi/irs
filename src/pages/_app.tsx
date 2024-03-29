import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";
import "../i18n/configs"; //i18

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </JotaiProvider>
  );
}

export default MyApp;
