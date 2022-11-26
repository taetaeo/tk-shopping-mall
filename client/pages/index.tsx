import React, { useEffect } from "react";
import type {
  NextPage,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticProps,
} from "next";
import Head from "../components/base/head";
import HomeSection from "../components/sections/home/section";
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
  // const mainEvent = await localService.get("mockMainEvent");
  // const normalEvent = await localService.get("mockEvent");
  // // const data = await stageService.get("user/list");
  return {
    props: {
      // mainEvent,
      // normalEvent,
    },
  };
};
