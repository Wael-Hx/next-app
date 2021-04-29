import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import theme from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
