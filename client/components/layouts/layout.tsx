import { getAuth } from "firebase/auth";
import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import css from "styled-jsx/css";
import { userDataAtom } from "../../recoil";
import { Header, SubHeader } from "../common";

const Layout = ({ children }: { children: ReactNode }) => {
  const userData = useRecoilValue(userDataAtom);
  return (
    <>
      <div className="layout">
        <Wrapper>
          <SubNavigation>
            <SubHeader userData={userData} />
          </SubNavigation>
          <Header />
        </Wrapper>

        {children}
        <style jsx>{style}</style>
      </div>
    </>
  );
};

export default Layout;
const style = css`
  .layout {
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.header`
  width: 100vw;
  height: 100%;
  position: sticky;
  padding-left: 2rem;
  padding-right: 2rem;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  text-align: center;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px 0px;
  transition: background-color 200ms ease 0s;
  z-index: 99;
`;
const SubNavigation = styled.nav`
  width: 100%;
`;
