import React, { FC } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";

import CardBody from "./cardBody";
import CardInfo from "./cardInfo";
import { SIZES, DIRECTION } from "./options";

type CardType = {
  id: string;
  size: "sm" | "md" | "lg";
  direction: "column" | "row";
  brand: string;
  title: string;
  image_url: string;
  discount: number;
  price: number;
  children?: React.ReactNode;
};

const Card: FC<CardType> = (props: CardType): JSX.Element => {
  const {
    id,
    size,
    brand,
    title,
    image_url,
    price,
    discount,
    direction,
    children,
  } = props;
  const sizeStyle = SIZES[size];
  const directionStyle = DIRECTION[direction];

  return (
    <StyledCard sizeStyle={sizeStyle} directionStyle={directionStyle}>
      <CardBody sizeStyle={sizeStyle} image_url={image_url} id={id} />
      <CardInfo title={title} price={price} discount={discount} brand={brand} />
    </StyledCard>
  );
};
export default Card;

const StyledCard = styled.div<{
  sizeStyle: FlattenSimpleInterpolation;
  directionStyle: FlattenSimpleInterpolation;
}>`
  ${(p) => p.sizeStyle}
  ${(p) => p.directionStyle}
  width: var(--card-width, 180px);
  height: 100%;

  display: flex;
  flex-direction: var(--card-direction);

  margin: auto;
  justify-content: center;
  align-items: center;
`;
