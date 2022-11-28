import Link from "next/link";
import React, { FC } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";

import CardBody from "./cardBody";
import CardInfo from "./cardInfo";
import { SIZES, DIRECTION } from "./options";

import { ROUTE_PATH } from "../../../utils/constants";

type CardType = {
  id: number;
  size: "sm" | "md" | "lg";
  direction: "column" | "row";
  brand: string;
  title: string;
  image_url: string;
  discount: number;
  price: number;
  children?: React.ReactNode;
};

const { ROUTE_PATH_DETAIL } = ROUTE_PATH;
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
      <DetailLink href={`${ROUTE_PATH_DETAIL}/${id}`} legacyBehavior>
        <a>
          <CardBody sizeStyle={sizeStyle} image_url={image_url} />
        </a>
      </DetailLink>
      <CardInfo title={title} price={price} discount={discount} brand={brand} />
    </StyledCard>
  );
};
export default Card;

const DetailLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-inline: 0.5rem;
`;
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
