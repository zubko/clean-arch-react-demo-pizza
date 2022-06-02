import { Product } from "@app/core/entities/Product";
import { upsertProductIdToCart } from "../repository/cart.repository";

export const addProductToCart = (product: Product) => {
  upsertProductIdToCart(product.id);
};
