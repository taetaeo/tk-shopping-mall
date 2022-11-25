import { css, FlattenSimpleInterpolation } from "styled-components";
import { SizeType, VariantsType } from "./type";

export const SIZES: SizeType = {
  xs: css`
    --button-font-size: 0.8rem;
    --button-padding: 1px;
    --button-radius: 4px;
  `,
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `,
};
export const VARIANTS: VariantsType = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #28a745;
    --button-hover-bg-color: #218838;
  `,
  error: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
  default: css`
    --button-color: #000;
    --button-weight: 600;
    --button-bg-color: #fff;
    --button-hover-bg-color: #fff;
    --button-hover-color: rgb(0, 0, 0);
    --button-hover-weight: 1000;
  `,
  default_light: css`
    --button-color: #5d5d5d;
    --button-bg-color: none;
    --button-hover-bg-color: none;
    --button-hover-color: rgb(0, 0, 0);
    --button-hover-weight: 300;
  `,
};
