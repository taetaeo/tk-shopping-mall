import React from "react";
import styled from "styled-components";
import {
  SlideButtonProps,
  direction,
  position,
} from "../../../types/ui/slider";
import { DIRECTION, POSITION } from "../../../utils/constants/common";

const { ROW, COLUMN } = DIRECTION;
const { LEFT, RIGHT } = POSITION;

const SliderButton: React.FC<SlideButtonProps> = (
  props: SlideButtonProps
): JSX.Element => {
  const { direction, position, children, onClick } = props;

  return (
    <StyledButton
      direction={direction}
      position={position}
      onClick={() => onClick(position)}
    >
      {children}
    </StyledButton>
  );
};

export default SliderButton;

const StyledButton = styled.div<{
  position: position;
  direction: direction;
}>`
  z-index: 9;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: #555;
  border-radius: 50%;
  color: white;
  position: absolute;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  top: calc(
    ${({ direction, position }) =>
      direction === ROW
        ? "50% - 25px"
        : position === LEFT
        ? "0"
        : "100% - 50px"}
  );
  ${({ position, direction }) =>
    position === LEFT &&
    `${LEFT}${direction === ROW ? 0 : "calc(50% - 25px)"}`};
  ${({ position, direction }) =>
    position === RIGHT &&
    `${RIGHT}:${direction === ROW ? 0 : "calc(50% - 25px)"}`};
  ${({ direction }) => direction === COLUMN && "transform: rotate(90deg)"};
`;
