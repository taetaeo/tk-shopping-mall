import React, { FC } from "react";
import styled from "styled-components";

import InfoBox from "./infoBox";
import BottomInfo from "./bottomInfo";

import { Category } from "../../../types";

type Props = {
  id: string;
  brand: string;
  name: string;
  image_url: string;
  discount: number;
  origin_price: number;
  category: Category;
};

const DetailSection: FC<any> = (props: any): JSX.Element => {
  const { id, brand, name, image_url, origin_price, discount, category } =
    props;
  return (
    <Main>
      <DetailContainer>
        <InfoBox {...props} />
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
