import { atom } from "recoil";
import { Cart } from "../types";

export const detailIdAtoms = atom<string>({
  key: "DETAIL/ID",
  default: "",
});

export const checkedCartAtoms = atom<Cart[]>({
  key: "CART/CHECKED",
  default: [],
});
