import React, { FC, SyntheticEvent, useRef } from "react";
import styled from "styled-components";
import {
  AmountSection,
  CheckboxSection,
  ItemSection,
  PriceSection,
} from "./template";
import CartItem from "./item";
import { Cart } from "../../../types";

type Props = {
  cartItems: Cart[];
};
const CartList = ({ cartItems }: Props): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleCheckboxChanged = (event?: SyntheticEvent) => {
    if (!formRef.current) return;
  };
  return (
    <Wrapper>
      <form ref={formRef} onChange={handleCheckboxChanged}>
        <Header>
          <CheckboxSection>
            <TotalCheckBox
              className="select-all"
              name="select-all"
              type="checkbox"
            />
          </CheckboxSection>
          <ItemSection>
            <TableItem>상품 정보</TableItem>
          </ItemSection>
          <AmountSection>
            <TableItem>수량 정보</TableItem>
          </AmountSection>
          <PriceSection>
            <TableItem>가격 정보</TableItem>
          </PriceSection>
        </Header>
        <List>
          {cartItems.map((item, index) => (
            <CartItem {...item} key={item.id} />
          ))}
        </List>
      </form>
    </Wrapper>
  );
};

export default CartList;

const Wrapper = styled.section`
  width: 100%;
`;
const Header = styled.ul`
  width: 1200px;
  display: flex;
  margin: auto;
  margin-bottom: 0.5rem;
`;

const TableItem = styled.h3`
  font-size: 2.2rem;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TotalCheckBox = styled.input`
  width: 13px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
