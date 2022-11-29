import React from "react";
import type {
  NextPage,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

import Head from "../components/base/head";
import HomeSection from "../components/sections/home";

import { graphQLFetcher } from "../service";
import { GET_EVENTS } from "../graphql";

const Home: NextPage = ({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head title={""} />
      {/* <HomeSection mainEvent={undefined} normalEvent={undefined} /> */}
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const event = await graphQLFetcher(GET_EVENTS);
  return {
    props: {
      event,
    },
  };
};
