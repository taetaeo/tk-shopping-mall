import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { Layout } from "../components/layouts";
import { getClient } from "../service";
import { GlobalStyle } from "../styles/globalStyles";

const CustomApp = ({ Component, pageProps }) => {
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
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
