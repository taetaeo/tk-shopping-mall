import React from "react";
import type { NextPage } from "next";
import { MyPageSections } from "../../components/sections";
import { Head } from "../../components/base";
import { useUser } from "../../lib/firebase/useUser";
import { useRouter } from "next/router";

const MyPage: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    alert("로그인이 되어 있지 않습니다. ");
    router.push("/");
  }

  return (
    <>
      <Head title={`${user.id} 마이 페이지`} />
      <MyPageSections />
    </>
  );
};
export default MyPage;
