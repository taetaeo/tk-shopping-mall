import React, { useEffect } from "react";
import {
  GetServerSidePropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";

import NotFound from "../../../404";
import { graphQLFetcher } from "../../../../service";
import { GET_SELECTED_PRODUCT } from "../../../../graphql";
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
}: InferGetStaticPropsType<typeof getServerSideProps>): JSX.Element => {
  let code;
  const seoTitle = categoryLG === "men" ? "남성의류" : "여성의류";
  const router = useRouter();
  const { category_medium_code } = router.query;
  [, , code] = String(category_medium_code).split("_");

  useEffect(() => {}, [products]);
  return (
    <>
      <Head title={seoTitle} />
      <ShopSection products={products} />
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

  if (categoryMD === "all" || categoryMD === "new") {
    // all or new
    products = await graphQLFetcher(GET_SELECTED_PRODUCT, {
      category_lg: categoryLG,
    });
  }
  if (!(categoryMD === "all") && !(categoryMD === "new")) {
    products = await graphQLFetcher(GET_SELECTED_PRODUCT, {
      category_lg: categoryLG,
      category_md: categoryMD,
      category_sm: categorySM,
    });
  }

  if (!products) {
    return {
      revalidate: 10, // 페이지가 재생성될 지연 시간
      notFound: true, // true일 경우 404
      redirect: {
        destination: "/", // 리다이렉트 경로
      },
    };
  }

  return {
    props: {
      products,
      categoryLG,
    },
  };
};
