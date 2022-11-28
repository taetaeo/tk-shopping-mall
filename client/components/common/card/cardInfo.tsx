import React, { FC } from "react";
import styled from "styled-components";
import { CardItem } from "./options";

import { Icons } from "../../base";
import { ICONS_NAME } from "../../../utils/constants";

const { LIKE_EMPTY, COMMENT } = ICONS_NAME;
const DEFAULT_SIZE = "18";

type Props = {
  brand: string;
  title: string;
  price: number;
  discount: number;
};
const CardInfo: FC<Props> = (props: Props): JSX.Element => {
  const { brand, title, price, discount } = props;
  return (
    <StyledInfo>
      <Brand>{brand}</Brand>
      <Title>{title}</Title>
      <OriginPrice>
        <Price>{price}</Price>
      </OriginPrice>
      <PriceContainer>
        <Discount>{discount} %</Discount>
        <DiscountPrice>{price * (discount % 100) || 0}</DiscountPrice>
      </PriceContainer>
      {/* <FunctionContainer>
        <Likes>
          {Icons({ size: DEFAULT_SIZE, name: LIKE_EMPTY, color: "#888" })}
        </Likes>
        <Comment>
          {Icons({ size: DEFAULT_SIZE, name: COMMENT, color: "#888" })}
        </Comment>
      </FunctionContainer> */}
    </StyledInfo>
  );
};
export default CardInfo;

const StyledInfo = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Text = styled.h1`
  width: 100%;
  color: #292a32;
  font-size: 1.4rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 1rem;
`;
const Brand = styled(Text)`
  text-decoration: underline;
`;
const Title = styled(Text)`
  width: 100%;
  color: #292a32;
  font-size: 1.2rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 1rem;
`;

const FunctionContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 1.2rem;
`;
const OriginPrice = styled.div`
  display: flex;
  flex-direction: row;
  color: rgb(212, 212, 212);
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #ff4800;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 1rem;
`;

const Likes = styled(CardItem)``;
const Comment = styled(CardItem)``;
const Price = styled(CardItem)``;
const Discount = styled(CardItem)``;
const DiscountPrice = styled(CardItem)``;
