import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { Product } from "../../../types";
import List from "./list";

type Props = {
  products: Product[];
  title: string;
  searchKeyword: string | string[];
};
const SearchResult = ({ products, title, searchKeyword }: Props) => {
  return (
    <Main>
      <Container>
        {searchKeyword === undefined ? (
          <Title>{title}</Title>
        ) : (
          <Search>{`"${searchKeyword}"를 검색한 결과입니다.`}</Search>
        )}
        <ProductsContainer>
          <List products={products} />
        </ProductsContainer>
      </Container>
    </Main>
  );
};
export default SearchResult;

const Main = styled.main`
  max-width: 2400px;
  margin: 0 auto;
`;
const Container = styled.div`
  padding: 0.5rem 0;
  margin-top: 10rem;
`;
const Search = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 3rem;
`;
const ProductsContainer = styled.section`
  grid-area: "product";
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 5rem;
  column-gap: 2rem;
  margin-top: 1rem;
`;
