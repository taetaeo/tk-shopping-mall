import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";

import NotFound from "../../../404";
import { graphQLFetcher, QueryKeys } from "../../../../service";
import { GET_PRODUCTS, GET_SELECTED_PRODUCT } from "../../../../graphql";
import { useQuery } from "react-query";
import { ShopSection } from "../../../../components/sections";
import { Head } from "../../../../components/base";

const List: NextPage = ({ products, codeOptions }: any): JSX.Element => {
  const seoTitle = codeOptions === "men" ? "남성의류" : "여성의류";

  const router = useRouter();
  // const QueryFn = () =>
  //   graphQLFetcher(GET_SELECTED_PRODUCT, { category_lg: "women" });
  // const { data } = useQuery([QueryKeys.products, "women"], QueryFn);

  console.log(products.selectedProducts);
  return (
    <>
      <Head title={`${seoTitle} | 감성적인 의류 쇼핑몰 CAFFEINE`} />
      <ShopSection query={router.query} products={products.selectedProducts} />
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

  let codeOptions, genderCode, productsCode, detailCode, products;
  [genderCode, productsCode] = String(category_large_code).split("_");
  [, , detailCode] = String(category_medium_code).split("_");

  codeOptions = genderCode === "m" ? "men" : "women";
  const allCondition = productsCode === "all";
  const newCondition = productsCode === "new";
  const elseCondition = !allCondition && !newCondition;

  if (allCondition || newCondition) {
    // all or new
    products = await graphQLFetcher(GET_SELECTED_PRODUCT, {
      category_lg: codeOptions,
    });
  } else if (elseCondition) {
    // Not all or new
    products = await graphQLFetcher(GET_SELECTED_PRODUCT, {
      category_lg: codeOptions,
      category_md: productsCode,
      category_sm: detailCode,
    });
  }

  return {
    props: {
      products,
      codeOptions,
    },
  };
};
