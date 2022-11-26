import React, { FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
// import SubHeader from "../subHeader";
import Gnb from "./gnb";
import { Button, Icons } from "../../base";

const DEFAULT_SIZE = "40";

const Header: FC = (): JSX.Element => {
  const router = useRouter();

  const handleGoSearch = () => {
    router.push("/search");
  };
  return (
    <Wrapper>
      <SubNavigation>{/* <SubHeader /> */}</SubNavigation>
      <MainNavigation>
        <Gnb />
        <SearchContainer>
          <Button
            disabled={false}
            size={"sm"}
            variant={"default"}
            children={Icons({ size: DEFAULT_SIZE, name: "SEARCH" })}
            onClick={handleGoSearch}
          />
        </SearchContainer>
      </MainNavigation>
    </Wrapper>
  );
};

export default Header;

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
const MainNavigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
