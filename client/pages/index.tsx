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
import { initFirebase } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Home: NextPage = ({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user.uid);
  };
  return (
    <>
      <Head title={""} />
      <button onClick={signIn}>로그인</button>
      <HomeSection events={events.events} />
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
