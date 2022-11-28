import React from "react";
import { useQuery } from "react-query";
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";

import Head from "../components/base/head";
import HomeSection from "../components/sections/home";
import { graphQLFetcher } from "../service";
import { GET_EVENTS } from "../graphql";

const Home: NextPage = ({ events }: any) => {
  return (
    <>
      <Head title={"감성적인 의류 쇼핑몰 CAFFEINE"} />
      {/* <HomeSection mainEvent={undefined} normalEvent={undefined} /> */}
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const QueryFn = () => graphQLFetcher(GET_EVENTS);
  // const { data: products } = await useQuery(QueryKeys.products, QueryFn, {
  //   cacheTime: 0,
  //   staleTime: 1000,
  // });

  // const [{ events }, { products }] = await Promise.all([
  //   graphQLFetcher(GET_EVENTS),
  //   graphQLFetcher(GET_PRODUCTS),
  // ]);

  const events = await graphQLFetcher(GET_EVENTS);
  return {
    props: { events },
  };
};
