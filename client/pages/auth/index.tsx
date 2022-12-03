import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Head } from "../../components/base";

const FirebaseAuth = dynamic(
  () => import("../../components/auth/firebaseAuth"),
  {
    ssr: false,
  }
);

const AuthPage: NextPage = () => {
  return (
    <>
      <Head title={"로그인"} />
      <div>
        <FirebaseAuth />
      </div>
    </>
  );
};
export default AuthPage;
