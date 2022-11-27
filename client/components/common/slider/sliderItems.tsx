import React from "react";
import styled, { css } from "styled-components";
import { DIRECTION } from "../../../utils/constants/common";
import {
  SlideItemsProps,
  direction,
  transitionTime,
  offset,
} from "../../../types/ui/slider";

const { ROW } = DIRECTION;

const SliderItems: React.FC<SlideItemsProps> = (
  props: SlideItemsProps
): JSX.Element => {
  const { direction, transitionTime, offset, child } = props;
  return (
    <StyledItem
      direction={direction}
      transitionTime={transitionTime}
      offset={offset}
    >
      {child}
    </StyledItem>
  );
};

export default SliderItems;

const StyledItem = styled.div<{
  offset: offset;
  transitionTime: transitionTime;
  direction: direction;
}>`
  max-width: 100vw;
  min-width: 100vw;
  max-height: 500px;
  min-height: 100%;
  transition: transform ${({ transitionTime }) => transitionTime}ms ease-in-out;

  ${({ direction }) =>
    direction === ROW
      ? css<{ offset: number }>`
          transform: translateX(${({ offset }) => -offset * 100}%);
        `
      : css<{ offset: number }>`
          transform: translateY(${({ offset }) => -offset * 100}%);
        `}
`;
