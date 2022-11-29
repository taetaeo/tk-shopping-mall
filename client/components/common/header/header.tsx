import React, { FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Gnb from "./gnb";
import { Button, Icons } from "../../base";

const DEFAULT_SIZE = "40";

const Header: FC = (): JSX.Element => {
  const router = useRouter();

  const handleGoSearch = () => {
    router.push("/search");
  };
  return (
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
  );
};

export default Header;

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
