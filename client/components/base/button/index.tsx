import React, { FC } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { ButtonType } from "./type";
import { SIZES, VARIANTS } from "./options";

const Button: FC<ButtonType> = (props: ButtonType) => {
  const { disabled, size, variant, children, onClick } = props;
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  sizeStyle: FlattenSimpleInterpolation;
  variantStyle: FlattenSimpleInterpolation;
}>`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size);
  font-weight: var(--button-weight);
  padding: var(--button-padding);
  border-radius: var(--button-radius);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);
  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
    color: var(--button-hover-color, #025ce2);
    font-weight: var(--button-hover-weight, 500);
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;
