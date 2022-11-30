import { Product } from "./products";

export type Cart = {
  id: string;
  amount: number;
  product: Product;
};

export type GetCart = {
  id: string;
  imageUrl: string;
  price: number;
  description: string;
};

export type AddCart = GetCart & { amount: string };

export type UpdateMutationFn = Omit<Cart, "product">;
export type DeleteMutationFn = Omit<Cart, "amount" | "product">;
export type ExecutePayMutationFn = Omit<Cart, "amount" | "product">;
