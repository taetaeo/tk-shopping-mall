import React, { FC } from "react";
import styled from "styled-components";

import TopInfo from "./topInfo";
import BottomInfo from "./bottomInfo";

import { Product } from "../../../types";

type Props = {
  product: Product;
};

const DetailSection: FC<any> = (props: any): JSX.Element => {
  const {
    id,
    brand,
    name,
    image_url,
    origin_price,
    discount,
    category,
    createdAt,
  } = props;
  return (
    <Main>
      <DetailContainer>
        <TopInfo {...props} />
        <BottomInfo />
      </DetailContainer>
    </Main>
  );
};

export default DetailSection;

const Main = styled.main`
  height: 100%;
`;

const DetailContainer = styled.section`
  width: 1300px;
  margin: 1rem auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;
