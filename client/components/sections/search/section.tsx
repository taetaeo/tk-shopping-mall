import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import { GET_SEARCH_ITEMS } from "../../../graphql";
import { useInterSection } from "../../../hook";
import { graphQLFetcher, QueryKeys } from "../../../service";
import { Product } from "../../../types";
import List from "./list";

type Props = {
  products: Product[];
  title: string;
  searchKeyword: string | string[];
};
const SearchResult = ({ products, title, searchKeyword }: Props) => {
  const [newProduct, setProducts] = useState([products]);
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useInterSection(fetchMoreRef);
  const queryFn = ({ pageParam = "" }) =>
    graphQLFetcher(GET_SEARCH_ITEMS, { keyword: title, cursor: pageParam });
  const queryOption = (lastPage, allPage) => {
    return lastPage.searchItems.at(-1)?.id;
  };
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery([QueryKeys.search, title], queryFn, {
    getNextPageParam: queryOption,
  });
  useEffect(() => {
    if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage) {
      return;
    }
    fetchNextPage();
  }, [intersecting]);

  useEffect(() => {
    setProducts([products]);
  }, [products]);
  useEffect(() => {
    if (!data?.pages) return;
    setProducts(data?.pages);
  }, [data?.pages]);

  console.log(newProduct);
  return (
    <Main>
      <Container>
        {searchKeyword === undefined ? (
          <Title>{title}</Title>
        ) : (
          <Search>{`"${searchKeyword}"를 검색한 결과입니다.`}</Search>
        )}
        <ProductsContainer>
          <List products={newProduct} />
        </ProductsContainer>
        <FetchMore className="fetchMore" ref={fetchMoreRef}></FetchMore>
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
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2rem;
  margin-top: 1rem;
`;
const FetchMore = styled.div`
  border-color: transparent;
  height: 1px;
  padding-bottom: 1px;
  margin-bottom: 5rem;
`;
