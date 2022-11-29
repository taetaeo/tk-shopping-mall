import { atom } from "recoil";

export const detailIdAtoms = atom<string>({
  key: "DETAIL/ID",
  default: "",
});
