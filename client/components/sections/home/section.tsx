import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Item from "./item";
// import { MainEvent, NormalEvent } from "../../../../types/data/mockData";
import Slider from "../../common/slider";

type Props = {
  mainEvent: any;
  normalEvent: any;
};
const HomeSection: FC<{
  mainEvent: any;
  normalEvent: any;
}> = (props): JSX.Element => {
  const { mainEvent, normalEvent } = props;
  const mockList = [];
  mainEvent.map((item: { image_url_main: any }) =>
    mockList.push(item.image_url_main)
  );
  const section = ["left", "middle", "right"];
  return (
    <Main>
      <Slider
        loop
        autoLoop
        autoTime={5000}
        transitionTime={900}
        direction="row"
        height={1000}
      >
        {mainEvent.map((item, index) => (
          <Image src={item.image_url_main} key={index} />
        ))}
      </Slider>
      <Wrapper>
        {normalEvent.map((item, index) => (
          <Item key={index} section={section[index]} {...item} />
        ))}
      </Wrapper>
    </Main>
  );
};
export default HomeSection;

const Main = styled.main``;

const Wrapper = styled.main`
  max-width: 100%;
  display: grid;
  align-items: center;
  box-shadow: #e4e4e4 2px 2px 4px 2px;
  border-radius: 5px;
  aspect-ratio: 3 / 1;
  padding: 0 10px;
  column-gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "left middle right ";
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
