import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";

import NotFound from "../../../404";
import { graphQLFetcher, QueryKeys } from "../../../../service";
import { GET_PRODUCTS, GET_SELECTED_PRODUCT } from "../../../../graphql";
import { useQuery } from "react-query";

const List: NextPage = ({ products }: any): JSX.Element => {
  const router = useRouter();
  const QueryFn = () =>
    graphQLFetcher(GET_SELECTED_PRODUCT, { category_lg: "men" });
  const { data } = useQuery([QueryKeys.products, "men"], QueryFn);
  console.log(products, data);
  return (
    <>
      <div>asdasdasd</div>
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
  const codeOptions = genderCode === "m" ? "men" : "women";

  const allCondition = productsCode === "all";
  const newCondition = productsCode === "new";
  const elseCondition = !allCondition && !newCondition;

  const products = await graphQLFetcher(GET_PRODUCTS);
  // const selectProduct = await graphQLFetcher(GET_SELECTED_PRODUCT);

  return {
    props: {
      products,
    },
  };
};
