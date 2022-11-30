import React, { FC } from "react";
import styled from "styled-components";
import { Cart } from "../../../types";
import CartList from "./list";

type Props = {
  cartItems: Cart[];
};
const CartSection = ({ cartItems }: Props): JSX.Element => {
  return (
    <Main>
      <Container>
        <CartList cartItems={cartItems} />
      </Container>
    </Main>
  );
};

export default CartSection;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  padding: 0.5rem 0;
`;
