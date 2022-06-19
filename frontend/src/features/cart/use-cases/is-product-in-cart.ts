import { Product } from "@app/core/entities/Product";
import { distinct, map } from "rxjs";
import { cartItemWithProductId$ } from "../repository/cart.repository";

export const isProductInCart$ = (product: Product) =>
  cartItemWithProductId$(product.id).pipe(
    map((p) => p != null),
    distinct()
  );
