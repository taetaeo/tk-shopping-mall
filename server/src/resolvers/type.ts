type Method = "Query" | "Mutation" | string;
export type Resolver = {
  [key in Method]: {
    [key: string]: (
      parent: any,
      args: { [key: string]: any },
      context: {
        db: {
          events: Events;
          products: Products;
          cart: Cart;
        };
      },
      info: any
    ) => any;
  };
};
export type Event = {
  id: string;
  image_lg: string;
  image_main: string;
  image_md: string;
  image_thumb: string;
};
export type Events = Event[];

export type Category = {
  category_lg: string;
  category_md: string;
  category_sm: string;
};
export type Product = {
  id: string;
  brand: string;
  name: string;
  image_url: string;
  origin_price: number;
  discount: number;
  category: Category;
  createdAt?: number;
};
export type Products = Product[];

export type CartItem = {
  id: string;
  amount: number;
  product?: Product;
};
export type Cart = CartItem[];
