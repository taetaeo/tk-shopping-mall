type size = "xs" | "sm" | "md" | "lg";
type border =
  | "default"
  | "black_thin"
  | "black_thick"
  | "grey_thin"
  | "grey_thick";

export type SelectType = {
  disabled: boolean;
  size: size;
  border: border;
  children?: React.ReactNode | any;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
