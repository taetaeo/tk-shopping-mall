import React, { FC } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { SELECT_FILTER_TYPE } from "../../common/filter/Items";
import { SelectType } from "./type";
import { SIZES, BORDER } from "./options";

const StyledOption = styled.option`
  font-size: 0.8rem;
`;

const Select: FC<SelectType> = (props: SelectType): JSX.Element => {
  const { disabled, size, border, children, onClick } = props;
  const sizeStyle = SIZES[size];
  const borderStyle = BORDER[border];

  return (
    <StyledSelect
      disabled={disabled}
      sizeStyle={sizeStyle}
      borderStyle={borderStyle}
      onClick={onClick}
    >
      {children?.map((item: SELECT_FILTER_TYPE, index: React.Key) => (
        <StyledOption key={index} onClick={(e) => onClick(e)}>
          {item.value}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;

const StyledSelect = styled.select<{
  sizeStyle: FlattenSimpleInterpolation;
  borderStyle: FlattenSimpleInterpolation;
}>`
  ${(p) => p.sizeStyle}
  ${(p) => p.borderStyle}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: var(--select-border, 0);
  border-radius: var(--select-radius, 0);
  margin: 0;
  cursor: pointer;
  padding: var(--select-padding);
  font-size: var(--select-font-size);
  margin-top: var(--select-margin-top, 0);
`;
