import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SlideButton from "./SliderButton";

import SlideIItems from "./SliderItems";
import { SlideProps, position, direction } from "../../../types/ui/slider";
import { DIRECTION, POSITION } from "../../../utils/constants/common";
import Icons from "../../base/icons";
import { ICONS_NAME } from "../../../utils/constants/icons";

const { LEFT, RIGHT } = POSITION;
const { ROW, COLUMN } = DIRECTION;
const { LEFT_OUTLINE, RIGHT_OUTLINE } = ICONS_NAME;

const Slider: React.FC<SlideProps> = (props: SlideProps): JSX.Element => {
  const {
    children: propsChildren,
    loop,
    direction = ROW,
    autoLoop,
    autoTime = 3000,
    transitionTime = 500,
    height = 500,
  } = props;

  const children = Array.isArray(propsChildren)
    ? propsChildren
    : [propsChildren];
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (position: position) => {
    switch (position) {
      case LEFT:
        if (sliderIndex > 0) setSliderIndex((prev) => prev - 1);
        else if (loop) {
          setSliderIndex(children.length - 1);
        }
        break;
      case RIGHT:
        if (sliderIndex < children.length - 1)
          setSliderIndex((prev) => prev + 1);
        else if (loop) {
          setSliderIndex(0);
        }
      default:
        break;
    }
  };

  useEffect(() => {
    if (autoLoop) {
      const interval = setInterval(
        () =>
          setSliderIndex((prev) => (prev < children.length - 1 ? prev + 1 : 0)),
        autoTime
      );

      return () => clearInterval(interval);
    }
  }, [autoLoop, autoTime, children.length]);

  return (
    <CarouselContainer direction={direction} height={height}>
      <SlideButton
        direction={direction}
        onClick={handleClick}
        position={LEFT}
        children={Icons({ size: "25", name: LEFT_OUTLINE })}
      />

      {children.map((child: React.ReactNode, index: React.Key) => (
        <SlideIItems
          key={index}
          direction={direction}
          transitionTime={transitionTime}
          offset={sliderIndex}
          child={child}
        />
      ))}
      <SlideButton
        direction={direction}
        onClick={handleClick}
        position={RIGHT}
        children={Icons({ size: "25", name: RIGHT_OUTLINE })}
      />
    </CarouselContainer>
  );
};
export default Slider;

const CarouselContainer = styled.div<{
  direction: direction;
  height?: number;
}>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  background-color: #eee;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: ${({ direction }) => direction};
`;
