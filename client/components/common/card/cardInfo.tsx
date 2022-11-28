import React, { FC } from "react";
import styled from "styled-components";
import { CardItem } from "./options";

import { Icons } from "../../base";
import { ICONS_NAME } from "../../../utils/constants";

const { LIKE_EMPTY, COMMENT } = ICONS_NAME;
const DEFAULT_SIZE = "18";

type Props = {
  title: string;
  price: number;
  discount: number;
};
const CardInfo: FC<Props> = (props: Props): JSX.Element => {
  const { title, price, discount } = props;
  return (
    <StyledInfo>
      <Title>{title}</Title>
      <PriceContainer>
        <Price>{price}</Price>
        <Discount>{discount}%</Discount>
        <DiscountPrice>{price * (discount % 100) || 0}</DiscountPrice>
      </PriceContainer>
      <FunctionContainer>
        <Likes>
          {Icons({ size: DEFAULT_SIZE, name: LIKE_EMPTY, color: "#888" })}
          5000
        </Likes>
        <Comment>
          {Icons({ size: DEFAULT_SIZE, name: COMMENT, color: "#888" })}
          182
        </Comment>
      </FunctionContainer>
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

const Title = styled.h1`
  width: 100%;
  color: #292a32;
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FunctionContainer = styled.div`
  display: flex;
  margin: 0.1rem 0;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #74747b;
  font-size: 1rem;
  font-weight: 400;
  margin: 0.1rem 0;
`;

const Likes = styled(CardItem)``;
const Comment = styled(CardItem)``;
const Price = styled(CardItem)``;
const Discount = styled(CardItem)``;
const DiscountPrice = styled(CardItem)``;
