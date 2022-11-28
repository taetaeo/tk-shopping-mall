import React from "react";
import styled from "styled-components";
import Category from "./category";

type Props = {
  pathName: string | string[] | undefined;
};
const SideFilter = (props: Props) => {
  const { pathName } = props;
  return (
    <Wrapper>
      <Navigation>
        <Category pathName={pathName} />
      </Navigation>
    </Wrapper>
  );
};
export default SideFilter;

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  z-index: 1;
`;

const Navigation = styled.div`
  width: 100%;
`;
