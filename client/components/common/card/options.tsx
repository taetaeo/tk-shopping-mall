import styled, { css, FlattenSimpleInterpolation } from "styled-components";

type SizeType = {
  [x: string]: FlattenSimpleInterpolation;
  sm: FlattenSimpleInterpolation;
  md: FlattenSimpleInterpolation;
  lg: FlattenSimpleInterpolation;
};
type DirectionType = {
  [x: string]: FlattenSimpleInterpolation;
  column: FlattenSimpleInterpolation;
  row: FlattenSimpleInterpolation;
};

export const SIZES: SizeType = {
  sm: css`
    --card-width: 180px;
    --card-padding: 0.5rem 1rem;
    --card-radius: 5px;
  `,
  md: css`
    --card-width: 280px;
    --card-padding: 1rem 1.2rem;
    --card-radius: 5px;
  `,
  lg: css`
    --card-width: 385px;
    /* --card-padding: 1.2rem 1.4rem; */
    --card-radius: 5px;
  `,
};
export const DIRECTION: DirectionType = {
  row: css`
    --card-direction: row;
  `,
  column: css`
    --card-direction: column;
  `,
};
export const CardItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  padding-right: 1rem;
`;
