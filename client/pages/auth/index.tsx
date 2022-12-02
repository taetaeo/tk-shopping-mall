import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
const FirebaseAuth = dynamic(
  () => import("../../components/auth/firebaseAuth"),
  {
    ssr: false,
  }
);

const AuthPage: NextPage = () => {
  return (
    <>
      <div>
        <FirebaseAuth />
        <p>
          <a href="/">Go Home</a>
        </p>
      </div>
    </>
  );
};
export default AuthPage;
