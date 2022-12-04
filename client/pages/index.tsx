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
import { GET_CARTS, GET_EVENTS } from "../graphql";
import { useUser } from "../lib/firebase/useUser";

const Home: NextPage = ({
  events,
  cart,
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
  const cart = await graphQLFetcher(GET_CARTS, {
    uid: "qefQizN3lkNwJ5tmMayVAD12KHl2",
  });
  return {
    props: {
      events,
      cart,
    },
  };
};
