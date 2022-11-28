import { css, FlattenSimpleInterpolation } from "styled-components";

type SizeType = {
  [x: string]: FlattenSimpleInterpolation;
  default: FlattenSimpleInterpolation;
  xs: FlattenSimpleInterpolation;
  sm: FlattenSimpleInterpolation;
  md: FlattenSimpleInterpolation;
  lg: FlattenSimpleInterpolation;
};

export const SIZES: SizeType = {
  default: css`
    --select-font-size: 0.8rem;
    --select-padding: 0;
    --select-radius: 0;
  `,
  xs: css`
    --select-font-size: 0.4rem;
    --select-padding: 1px;
    --select-radius: 4px;
  `,
  sm: css`
    --select-font-size: 0.875rem;
    --select-padding: 8px 12px;
    --select-radius: 4px;
  `,
  md: css`
    --select-font-size: 1rem;
    --select-padding: 12px 16px;
    --select-radius: 8px;
  `,
  lg: css`
    --select-font-size: 1.25rem;
    --select-padding: 16px 20px;
    --select-radius: 12px;
  `,
};

type BorderType = {
  [x: string]: FlattenSimpleInterpolation;
  default: FlattenSimpleInterpolation;
  black_thin: FlattenSimpleInterpolation;
  black_thick: FlattenSimpleInterpolation;
  grey_thin: FlattenSimpleInterpolation;
  grey_thick: FlattenSimpleInterpolation;
};

export const BORDER: BorderType = {
  default: css`
    --select-border: none;
  `,
  black_thin: css`
    --select-border: 1px solid #000;
  `,
  black_thick: css`
    --select-border: 1px solid #000;
    --select-border-radius: 5px;
  `,
  grey_thin: css`
    --select-border: 1px solid #eaeaea;
    --select-border-radius: 5px;
  `,
  grey_thick: css`
    --select-border: 3px solid #eaeaea;
    --select-border-radius: 5px;
  `,
};
