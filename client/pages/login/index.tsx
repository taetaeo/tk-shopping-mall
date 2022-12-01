import React from "react";
import type {
  NextPage,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Head } from "../../components/base";

const LoginPage: NextPage = ({}: InferGetStaticPropsType<
  typeof getStaticProps
>) => {
  return (
    <>
      <Head title={"로그인"} />
    </>
  );
};
export default LoginPage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {},
  };
};
