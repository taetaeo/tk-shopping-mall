import React, { Children, FC, ReactNode } from "react";
import styled from "styled-components";
import SideFilter from "../../common/sideFilter";

const all_new_options: any = ["m_new", "m_all", "w_all", "w_new"];

type Query = {
  [key: string]: string | string[] | undefined;
};
type Props = {
  query: Query;
  children?: ReactNode;
};

const ShopSection: FC<Props> = (props: Props): JSX.Element => {
  const { query, children } = props;
  const { category_large_code } = query;
  const filterOptions = all_new_options.includes(category_large_code);
  const LIST = String(category_large_code).split("_")[0];

  return (
    <Main>
      <LeftSection>
        <SideFilter pathName={LIST} />
      </LeftSection>
      <RightSection>
        <ProductsContainer>{children}</ProductsContainer>
      </RightSection>
    </Main>
  );
};

export default ShopSection;

const Main = styled.main`
  display: flex;
  width: 100vw;
  margin-top: 2rem;
  min-height: 420px;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const LeftSection = styled.section`
  width: 10%;
  min-height: 420px;
`;
const RightSection = styled.section`
  width: 90%;
  min-height: 420px;
  display: grid;
  margin: auto;
  grid-template-areas:
    "filter"
    "product";
`;

const ProductsContainer = styled.section`
  grid-area: "product";
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 2rem;
  margin: 1rem auto;

  @media screen and (min-width: 768px) and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1501px) and (max-width: 1730px) {
    grid-template-columns: repeat(4, 1fr);
  }
  /* @media screen and (minwidth: 2000px) {
    grid-template-columns: repeat(6, 1fr);
  } */
`;
