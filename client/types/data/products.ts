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
