import React from "react";
import type { NextPage } from "next";
import { FirebaseAuth } from "../../components/auth";

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
