import React, { FC } from "react";
import styled from "styled-components";
import { AmountSection, ItemSection, PriceSection } from "./template";
import CartItem from "./item";

const CartList = (props): JSX.Element => {
  const {} = props;

  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>): void => {
    alert("수량이 추가 되었습니다. ");
  };
  return (
    <Wrapper>
      <Header>
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
        {/* {products.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            brand={item.brand}
            category={item.category}
            imageUrl={item.image_url}
            price={item.price}
            discount={item.discount}
            amount={item.amount}
            name={item.name}
            onChange={handleAmount}
          />
        ))} */}
      </List>
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
const TableItem = styled.h3``;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
