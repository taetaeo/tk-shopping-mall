import React, { FC, ReactNode, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import { GET_SELECTED_PRODUCT } from "../../../graphql";
import { useInterSection } from "../../../hook";
import { graphQLFetcher, QueryKeys } from "../../../service";
import { Card } from "../../common";
import { useRouter } from "next/router";

export type Category = {
  category_lg: string;
  category_md: string;
  category_sm: string;
};
export type Product = {
  id: string;
  brand: string;
  name: string;
  image_url: string;
  origin_price: number;
  discount: number;
  category: Category;
  createdAt?: number;
};

type Props = {
  products: { selectedProducts: Product[] }[];
};

const List: FC<Props> = ({ products }): JSX.Element => {
  // query에 나오는 카테고리
  const {
    query: { category_large_code, category_medium_code },
  } = useRouter();
  const [gender, categoryMD] = String(category_large_code).split("_");
  const categoryLG = gender === "m" ? "men" : "women";
  const [, , categorySM] = String(category_medium_code).split("_");

  // 무한스크롤에 필요한 변수
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useInterSection(fetchMoreRef);
  const productsArray: ReactNode[] = [];

  console.log(categoryLG, categoryMD, categorySM);

  const queryFn = ({ pageParam = "" }) =>
    graphQLFetcher(GET_SELECTED_PRODUCT, {
      cursor: pageParam,
      categoryLG: categoryLG,
      categoryMD: categoryMD,
      categorySM: categorySM,
    });
  const queryOption = (lastPage, allPage) => {
    console.log({ lastPage });
    console.log({ allPage });
    return lastPage.products.at(-1)?.id;
  };
  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isSuccess,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery(QueryKeys.products, queryFn, {
  //   getNextPageParam: queryOption,
  // });

  // 화면 맨 마지막에 도달할 시,
  // useEffect(() => {
  //   if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage) {
  //     return;
  //   }
  //   fetchNextPage();
  // }, [intersecting]);

  // useEffect(() => {
  //   if (!data?.pages) return;
  //   // const data.params = [{messages:[....]},{messages:[....]}] => [{messages:[....]}]
  //   // const mergedMsgs = data.pages.flatMap((depth) => depth.messages);
  //   setProducts(data?.pages);
  // }, [data?.pages]);

  // useEffect(() => {
  //   setProducts(products);
  // }, [products]);

  // console.log(products);
  console.log("products", products);
  return (
    <>
      {products?.map((page) =>
        page.selectedProducts?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            size={"lg"}
            direction={"column"}
            brand={item.brand}
            title={item.name}
            image_url={item.image_url}
            discount={item.discount}
            price={item.origin_price}
          />
        ))
      )}
    </>
  );
};
export default List;
