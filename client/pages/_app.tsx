import React, { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import Layout from "../components/layouts";
import { GlobalStyle } from "../styles/globalStyles";

const CustomApp = ({ Component, pageProps }) => {
  const clientRef = useRef(null);
  const getClient = () => {
    if (!clientRef.current)
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            //  refetchInterval : 10000,
            refetchOnWindowFocus: false,
          },
        },
      });
    return clientRef.current;
  };
  return (
    <QueryClientProvider client={getClient()}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
};

CustomApp.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default CustomApp;
