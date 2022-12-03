import { initFirebase, setUserCookie, mapUserData } from "../../lib/firebase";
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/dist/StyledFirebaseAuth";
import {
  EmailAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import styled from "styled-components";

initFirebase();
const auth = getAuth();

const firebaseAuthConfig: firebaseui.auth.Config | any = {
  signInFlow: "popup", // google, email, github ... overall provider
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    // add additional auth flows below
    GoogleAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = mapUserData(user);
      setUserCookie(userData);
    },
  },
};

const FirebaseAuth = () => {
  // SSR에서는 firebase UI는 안됨
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);
  return (
    <Wrapper>
      {renderAuth ? (
        <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={auth} />
      ) : null}
    </Wrapper>
  );
};
export default FirebaseAuth;

const Wrapper = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
  div {
    width: 100%;
  }
  form {
    width: 1200px;
  }
  ul {
    width: 100%;
    display: flex;
  }
  li {
    width: 200px;
  } */
`;
