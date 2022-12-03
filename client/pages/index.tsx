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
import { useUser } from "../lib/firebase/useUser";

const Home: NextPage = ({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { user, logout } = useUser();

  return (
    <>
      <Head title={""} />
      <HomeSection events={events.events} />
      <button onClick={logout}>로그아웃</button>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const events = await graphQLFetcher(GET_EVENTS);
  return {
    props: {
      events,
    },
  };
};
