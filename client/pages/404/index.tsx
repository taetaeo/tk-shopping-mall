import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ROUTE_PATH } from "../../utils/constants";

const NotFound: NextPage = () => {
  const router = useRouter();
  const { ROUTE_PATH_HOME } = ROUTE_PATH;
  useEffect(() => {
    const time = setTimeout(() => {
      router.replace(ROUTE_PATH_HOME);
    }, 113000);
    // 잘못된 경로로 왔을 경우 5초 뒤에, 메인 페이지로 이동
    return () => clearTimeout(time);
  }, []);

  return (
    <Main>
      <Container>
        <NotFoundText>잘못된 경로입니다.^^</NotFoundText>
      </Container>
    </Main>
  );
};
export default NotFound;
const Main = styled.main`
  max-width: 1200px;
  height: 800px;
  margin: 0 auto;
`;
const Container = styled.div`
  padding: 0.5rem 0;
`;
const NotFoundText = styled.h1`
  margin-top: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
