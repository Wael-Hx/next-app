import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/globals.css";
import { useApollo } from "../graphql/client";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
