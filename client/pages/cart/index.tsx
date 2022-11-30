import type { NextPage } from "next";
import { useQuery } from "react-query";
import { Head } from "../../components/base";
import { CartSection } from "../../components/sections/";
import { GET_CARTS } from "../../graphql";
import { graphQLFetcher, QueryKeys, cartOptions } from "../../service";
import { Cart } from "../../types";

const TITLE = "장바구니 페이지";
const CartPage: NextPage = () => {
  const QueryFn = () => graphQLFetcher(GET_CARTS);
  const { data } = useQuery(QueryKeys.cart, QueryFn, cartOptions);
  const cartData = (data?.cart || []) as Cart[];

  if (!cartData.length) return <div>장바구니가 비었습니다.</div>;

  return (
    <>
      <Head title={TITLE} />
      <CartSection cartItems={cartData} />
    </>
  );
};
export default CartPage;
