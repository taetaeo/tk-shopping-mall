import type { NextPage } from "next";
import styled from "styled-components";
import { useQuery } from "react-query";
import { Head } from "../../components/base";
import { GET_CARTS } from "../../graphql";
import { graphQLFetcher, QueryKeys, cartOptions } from "../../service";
import { CartList } from "../../components/sections";
import { Cart } from "../../types";

const TITLE = "장바구니 페이지";
const NONE_CART_MESSAGE = "장바구니가 비어있습니다.";
const PAGE_TITLE = "나의 쇼핑목록";

const CartPage: NextPage = () => {
  const QueryFn = () => graphQLFetcher(GET_CARTS);
  const { data } = useQuery(QueryKeys.cart, QueryFn, cartOptions);
  const cartData = (data?.cart || []) as Cart[];

  return (
    <>
      <Head title={TITLE} />
      <Main>
        <Container>
          <Title>{PAGE_TITLE}</Title>
          {!cartData.length ? (
            <NoCartList>{NONE_CART_MESSAGE}</NoCartList>
          ) : (
            <CartList cartItems={cartData} />
          )}
        </Container>
      </Main>
    </>
  );
};
export default CartPage;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  padding: 0.5rem 0;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const NoCartList = styled.h1`
  width: 100%;
  font-size: 8rem;
  font-weight: 500;
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
