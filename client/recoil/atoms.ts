import { atom } from "recoil";
import { Cart } from "../types";
import { v4 } from "uuid";

type UserData = {
  id: string;
  email: string;
  token: any;
  name: string;
};

const DEFAULT_USER_DATA = {
  id: "",
  email: "",
  token: "",
  name: "",
};

export const userDataAtom = atom<UserData>({
  key: "USER/DATA",
  default: DEFAULT_USER_DATA,
});

export const checkedCartAtoms = atom<Cart[]>({
  key: `CART/CHECKED/${v4()}`,
  default: [],
});
