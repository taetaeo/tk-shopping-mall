import { FlattenSimpleInterpolation } from "styled-components";

type size = "xs" | "sm" | "md" | "lg";
type variant = "success" | "error" | "warning" | "default" | "default_light";

export type ButtonType = {
  disabled: boolean;
  size: size;
  variant: variant;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
export type SizeType = {
  [x: string]: FlattenSimpleInterpolation;
  xs: FlattenSimpleInterpolation;
  sm: FlattenSimpleInterpolation;
  md: FlattenSimpleInterpolation;
  lg: FlattenSimpleInterpolation;
};

export type VariantsType = {
  [x: string]: FlattenSimpleInterpolation;
  success: FlattenSimpleInterpolation;
  error: FlattenSimpleInterpolation;
  warning: FlattenSimpleInterpolation;
  default: FlattenSimpleInterpolation;
  default_light: FlattenSimpleInterpolation;
};
