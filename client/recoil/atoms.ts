import { atom } from "recoil";
import { Cart } from "../types";
import { v4 } from "uuid";

export const checkedCartAtoms = atom<Cart[]>({
  key: `CART/CHECKED/${v4()}`,
  default: [],
});
