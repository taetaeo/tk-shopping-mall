import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { Head, Logo } from "../../components/base";

const FirebaseAuth = dynamic(
  () => import("../../components/auth/firebaseAuth"),
  {
    ssr: false,
  }
);

const AuthPage: NextPage = () => {
  return (
    <>
      <Head title={"로그인"} />
      <Wrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <AuthContainer>
          <FirebaseAuth />
        </AuthContainer>
      </Wrapper>
    </>
  );
};
export default AuthPage;

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  margin: auto;
`;
const LogoContainer = styled.div`
  margin: 3rem;
`;
const AuthContainer = styled.div`
  margin-top: 3rem;
`;
