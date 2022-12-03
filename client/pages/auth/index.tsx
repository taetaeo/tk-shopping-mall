import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useUser } from "../../lib/firebase/useUser";
import { Head } from "../../components/base";
import { useRouter } from "next/router";

const FirebaseAuth = dynamic(
  () => import("../../components/auth/firebaseAuth"),
  {
    ssr: false,
  }
);

const AuthPage: NextPage = () => {
  const { user, logout } = useUser();
  const router = useRouter();

  console.log(user);

  return (
    <>
      <Head title={"로그인"} />
      <div>
        <FirebaseAuth />
        <p>
          <a href="/">Go Home</a>
        </p>
        <button onClick={logout}>로그아웃</button>
      </div>
    </>
  );
};
export default AuthPage;
