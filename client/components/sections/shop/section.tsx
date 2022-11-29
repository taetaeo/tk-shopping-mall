import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import { GET_SELECTED_PRODUCT } from "../../../graphql";
import { useInterSection } from "../../../hook";
import { graphQLFetcher, QueryKeys } from "../../../service";
import { Product } from "../../../types";
import { Filter, SideFilter } from "../../common";
import List from "./list";

const all_new_options: string[] = ["m_new", "m_all", "w_all", "w_new"];

type Props = {
  products: Product[];
  children?: ReactNode;
};

const ShopSection: FC<Props> = (props: Props): JSX.Element => {
  const { products, children } = props;

  // query에 나오는 카테고리
  const {
    query: { category_large_code, category_medium_code },
  } = useRouter();
  const [gender, categoryMD] = String(category_large_code).split("_");
  const categoryLG = gender === "m" ? "men" : "women";
  const [, , categorySM] = String(category_medium_code).split("_");

  const filterOptions = all_new_options.includes(String(category_large_code));

  const [newProduct, setProducts] = useState<any>([products]);

  // 무한스크롤에 필요한 변수
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useInterSection(fetchMoreRef);
  console.log("***********", categoryLG, categoryMD, categorySM);

  const queryFn = ({ pageParam = "" }) =>
    graphQLFetcher(GET_SELECTED_PRODUCT, {
      cursor: pageParam,
      category_lg: categoryLG,
      category_md: categoryMD,
      category_sm: categorySM,
    });
  const queryOption = (lastPage, allPage) => {
    return lastPage.selectedProducts.at(-1)?.id;
  };
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    [QueryKeys.products, categoryLG, categoryMD, categorySM],
    queryFn,
    {
      getNextPageParam: queryOption,
    }
  );

  // 화면 맨 마지막에 도달할 시, 다음 id값을 기준으로 데이터패칭
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

  console.log("-----------2----------", newProduct);

  return (
    <Main>
      <LeftSection>
        <SideFilter pathName={gender} />
      </LeftSection>
      <RightSection>
        {!!!filterOptions && (
          <Filter list={gender} category={category_large_code} />
        )}
        <ProductsContainer>
          <List products={newProduct} />
        </ProductsContainer>
        <FetchMore className="fetchMore" ref={fetchMoreRef}></FetchMore>
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
  box-sizing: border-box;
`;
const LeftSection = styled.section`
  width: 10%;
  top: 0;
  min-height: 420px;
`;
const RightSection = styled.section`
  width: 90%;
  top: 0;
  display: grid;
  /* min-height: 420px; */
  /* margin: auto; */
  grid-template-areas:
    "filter"
    "product";
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
const FetchMore = styled.div`
  border-color: transparent;
  height: 1px;
  padding-bottom: 1px;
  margin-bottom: 5rem;
`;
