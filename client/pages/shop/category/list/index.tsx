import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";

import NotFound from "../../../404";
import { graphQLFetcher, QueryKeys } from "../../../../service";
import { GET_PRODUCTS, GET_SELECTED_PRODUCT } from "../../../../graphql";
import { useQuery } from "react-query";
import { ShopSection } from "../../../../components/sections";
import { Head } from "../../../../components/base";

const List: NextPage = ({ products, seoTitle }: any): JSX.Element => {
  const title = seoTitle === "men" ? "남성의류" : "여성의류";

  const router = useRouter();
  const QueryFn = () =>
    graphQLFetcher(GET_SELECTED_PRODUCT, { category_lg: "women" });
  const { data } = useQuery([QueryKeys.products, "women"], QueryFn);

  console.log({ products });
  console.log({ data });

  return (
    <>
      <Head title={`${title} | 감성적인 의류 쇼핑몰 CAFFEINE`} />
      <ShopSection query={router.query}></ShopSection>
    </>
  );
};

export default List;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const {
    query: { category_large_code, category_medium_code },
  } = context;
  const [genderCode, productsCode] = String(category_large_code).split("_");
  const seoTitle = genderCode === "m" ? "men" : "women";

  const allCondition = productsCode === "all";
  const newCondition = productsCode === "new";
  const elseCondition = !allCondition && !newCondition;

  const products = await graphQLFetcher(GET_PRODUCTS);
  // const selectProduct = await graphQLFetcher(GET_SELECTED_PRODUCT);

  return {
    props: {
      products,
      seoTitle,
    },
  };
};
