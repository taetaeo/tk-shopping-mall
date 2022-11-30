import React, { FC } from "react";
import styled from "styled-components";
import CartList from "./list";

const CartSection = (props): JSX.Element => {
  const {} = props;
  return (
    <Main>
      <Container>
        <CartList />
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
