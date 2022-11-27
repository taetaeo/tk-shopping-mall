import React, { useEffect } from "react";
import type {
  NextPage,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticProps,
} from "next";
import Head from "../components/base/head";
import HomeSection from "../components/sections/home";
import { graphQLFetcher, QueryKeys } from "../service";
import { GET_EVENT, GET_EVENTS } from "../graphql";
import { useQueries, useQuery } from "react-query";

const Home: NextPage = () => {
  return (
    <>
      <Head title={"감성적인 의류 쇼핑몰 CAFFEINE"} />
      {/* <HomeSection mainEvent={undefined} normalEvent={undefined} /> */}
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const mainEventQueryFn = () => graphQLFetcher(GET_EVENT);
  const res = useQueries({
    queryKey: QueryKeys.event,
    queryFn: mainEventQueryFn,
  });

  // const [{ messages: smsgs }, { users }] = await Promise.all([
  //   graphQLFetcher(GET_EVENT),
  //   graphQLFetcher(GET_EVENTS),
  // ]);

  return {
    props: {
      // mainEvent,
      // normalEvent,
    },
  };
};
