import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AmountInfo, ItemInfo, Left, PriceInfo, Right } from "./template";
import { Button } from "../../base";
import { ROUTE_PATH } from "../../../utils/constants";

const { ROUTE_PATH_DETAIL } = ROUTE_PATH;

type category = {
  [key: string]: string[];
};
type Props = {
  id: number;
  brand: string;
  name: string;
  category: string[];
  imageUrl: string;
  price: number;
  discount: number;
  amount: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CartItem: FC<Props> = (props: Props): JSX.Element => {
  const {
    id,
    brand,
    name,
    category,
    imageUrl,
    amount,
    price,
    discount,
    onChange,
  } = props;

  const calculatePrice = (price * discount) / 100;
  const totalPrice = calculatePrice * amount;
  return (
    <Item>
      <ItemInfo>
        <Left>
          <CheckBox type="checkbox" />
          <Link href={`${ROUTE_PATH_DETAIL}/${id}`}>
            <Image src={imageUrl} />
          </Link>
        </Left>
        <Right>
          <Link href="/">
            <BrandName>{brand}</BrandName>
          </Link>
          <ProductName>{name}</ProductName>
          <CategoryName>
            {category[0]} / {category[1]}
          </CategoryName>
          <OriginPrice>{price}</OriginPrice>
          <DisCount>{discount}</DisCount>
          <CalculatedPrice>
            {calculatePrice ? `${calculatePrice}원` : 0}
          </CalculatedPrice>
        </Right>
      </ItemInfo>

      <AmountInfo>
        <UpdateInput type="number" value={amount} onChange={onChange} />
      </AmountInfo>

      <PriceInfo>
        <TotalPrice>{totalPrice ? `${totalPrice}원` : 0}</TotalPrice>
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
  width: 100%;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
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
  text-decoration: line-through;
  text-decoration-color: rgb(255, 0, 0);
  text-decoration-style: double;
  text-decoration-thickness: 1px;
  color: rgb(255, 0, 0);
  font-size: 1rem;
  font-weight: 700;
`;
const DisCount = styled(ItemInfoColumn)`
  font-size: 0.8rem;
  font-weight: 700;
`;
const CalculatedPrice = styled(ItemInfoColumn)`
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
