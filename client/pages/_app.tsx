import React, { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Layout } from "../components/layouts";
import { getClient } from "../service";
import { GlobalStyle } from "../styles/globalStyles";

const CustomApp = ({ Component, pageProps }) => {
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

CustomApp.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default CustomApp;
