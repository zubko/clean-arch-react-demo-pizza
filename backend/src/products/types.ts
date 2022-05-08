export type ProductCategory = "pizza" | "drink" | "side";

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  price: number;
  image: string;
}
