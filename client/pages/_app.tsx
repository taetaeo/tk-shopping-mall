import React from "react";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from "recoil";
import { Layout } from "../components/layouts";
import { getClient } from "../service";
import { GlobalStyle } from "../styles/globalStyles";
// import { authService } from "../../server/firebase";

const CustomApp = ({ Component, pageProps }) => {
  const queryClient = getClient();
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

CustomApp.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default CustomApp;
