import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";

import NotFound from "../../../404";
import { graphQLFetcher, QueryKeys } from "../../../../service";
import { GET_PRODUCTS, GET_SELECTED_PRODUCT } from "../../../../graphql";
import { useQuery } from "react-query";
import { ShopSection } from "../../../../components/sections";
import { Head } from "../../../../components/base";

type Props = {
  products: any;
  categoryLG?: string;
  categoryMD?: string;
  categorySM?: string | undefined;
};

const List: NextPage = ({
  products,
  categoryLG = "",
  categoryMD = "",
  categorySM = "",
}: Props): JSX.Element => {
  let code;
  const seoTitle = categoryLG === "men" ? "남성의류" : "여성의류";
  const router = useRouter();
  const { category_medium_code } = router.query;
  [, , code] = String(category_medium_code).split("_");

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

  let gender, categoryLG, categoryMD, categorySM, products;

  [gender, categoryMD] = String(category_large_code).split("_");
  [, , categorySM] = String(category_medium_code).split("_");

  categoryLG = gender === "m" ? "men" : "women";
  const allCondition = categoryMD === "all";
  const newCondition = categoryMD === "new";
  const elseCondition = !allCondition && !newCondition;

  if (allCondition || newCondition) {
    // all or new
    products = await graphQLFetcher(GET_SELECTED_PRODUCT, {
      category_lg: categoryLG,
    });
  } else if (elseCondition) {
    // Not all or new
    products = await graphQLFetcher(GET_SELECTED_PRODUCT, {
      category_lg: categoryLG,
      category_md: categoryMD,
      category_sm: categorySM,
    });
  }
  return {
    props: {
      products,
      categoryLG,
      categoryMD,
      // categorySM,
    },
  };
};
