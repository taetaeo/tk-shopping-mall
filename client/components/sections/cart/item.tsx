import React, { FC, SyntheticEvent } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AmountInfo, ItemInfo, Left, PriceInfo, Right } from "./template";
import { Button } from "../../base";
import { ROUTE_PATH } from "../../../utils/constants";
import { Cart } from "../../../types";
import { stringToNumber } from "../../../utils/helpers";

const { ROUTE_PATH_DETAIL } = ROUTE_PATH;
const ORDER_PRICE = 2500;

const CartItem = ({
  id,
  amount,
  product: {
    image_url,
    origin_price,
    discount,
    name,
    brand,
    createdAt,
    category: { category_lg, category_md, category_sm },
  },
}: Cart): JSX.Element => {
  const handleUpdateAmount = (e: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    const amount = stringToNumber(value) || 0;
    if (amount < 1) return;
  };

  return (
    <Item>
      <ItemInfo>
        <Left>
          <CheckBox
            type="checkbox"
            className="cart-item__checkbox"
            name="select-item"
          />
          <Link href={`${ROUTE_PATH_DETAIL}/${id}`}>
            <Image src={image_url} />
          </Link>
        </Left>
        <Right>
          <Link href="/">
            <BrandName>{brand}</BrandName>
          </Link>
          <ProductName>{name}</ProductName>
          <CategoryName>
            {category_lg} / {category_md} / {category_sm}
          </CategoryName>
          <PriceContainer>
            <OriginPrice>{origin_price}</OriginPrice>
            <DisCount>- {discount} %</DisCount>
            <CalculatedPrice>
              {origin_price - origin_price * (discount / 100)}
            </CalculatedPrice>
          </PriceContainer>
          <ItemInfoColumn>배송비 : {ORDER_PRICE}</ItemInfoColumn>
        </Right>
      </ItemInfo>

      <AmountInfo>
        {!createdAt ? (
          <div>삭제된 상품입니다.</div>
        ) : (
          <UpdateInput
            type="number"
            value={amount}
            min={1}
            onChange={handleUpdateAmount}
          />
        )}
      </AmountInfo>

      <PriceInfo>
        {/* <TotalPrice>{totalPrice ? `${totalPrice}원` : 0}</TotalPrice> */}
      </PriceInfo>

      <DeleteContainer>
        <Button
          disabled={false}
          size={"sm"}
          variant={"default_light"}
          children={"삭제하기"}
        />
      </DeleteContainer>
    </Item>
  );
};

export default CartItem;

const Item = styled.ul`
  width: 1200px;
  height: 100%;
  margin-inline: 1rem;
  display: flex;
  margin: auto;
  margin-bottom: 0.5rem;
`;

const Image = styled.img`
  width: 170px;
  height: 170px;
  object-fit: contain;
`;
const ItemInfoColumn = styled.li`
  margin-top: 1rem;
  width: 100%;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const PriceContainer = styled.div`
  display: flex;
`;
const BrandName = styled(ItemInfoColumn)`
  font-size: 1.2rem;
  font-weight: 700;
`;
const ProductName = styled(ItemInfoColumn)`
  font-size: 1rem;
  font-weight: 500;
`;
const OriginPrice = styled(ItemInfoColumn)`
  width: 2rem;
  text-decoration: line-through;
  text-decoration-color: rgb(255, 0, 0);
  text-decoration-style: double;
  text-decoration-thickness: 1px;
  color: rgb(255, 0, 0);
  font-size: 1rem;
  font-weight: 700;
`;
const DisCount = styled(ItemInfoColumn)`
  width: 3rem;
  font-size: 0.8rem;
  font-weight: 700;
`;
const CalculatedPrice = styled(ItemInfoColumn)`
  width: 2rem;
  font-size: 1rem;
`;
const CategoryName = styled(ItemInfoColumn)`
  font-size: 0.6rem;
`;
const CheckBox = styled.input`
  margin: 1rem;
`;

const UpdateInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #eaeaea;
  font-size: 1rem;
  padding: 1rem;
  border: none;
`;
const TotalPrice = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeleteContainer = styled.div`
  min-width: 10%;
  padding: 0.5rem;
  border: 1px solid rgb(228, 228, 228);
  display: flex;
  justify-content: center;
  align-items: center;
`;
