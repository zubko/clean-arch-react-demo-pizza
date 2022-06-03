import {
  productsByCategory$,
  productsRequestStatus$,
} from "@app/core/repository/products.repository";
import { addProductToCart } from "@app/features/cart/use-cases/add-product-to-cart";
import { combineLatest, map, switchMap } from "rxjs";
import { currentCategory$ } from "../../repository/menu.repository";
import { fetchProducts } from "../../use-cases/products.use-case";
import { MenuItemsProps } from "./menu-items.view";

const Colors = [
  "#b2226c",
  "#f075f0",
  "#34b8e8",
  "#26d57d",
  "#cab724",
  "#f027e7",
  "#9892ec",
  "#c16296",
  "#4d5aa7",
  "#54f9a9",
];

const getRandomColor = (key: string) =>
  Colors[key.charCodeAt(0) % Colors.length];

export const getCurrentItems$ = currentCategory$.pipe(
  switchMap((category) =>
    combineLatest([productsByCategory$(category), productsRequestStatus$]).pipe(
      map(
        ([products, status]): MenuItemsProps => ({
          items: products.map((product) => {
            let { id, name, price, category } = product;
            return {
              id,
              title: name,
              price: `${price}€`,
              category,
              color: getRandomColor(name),
              add: () => addProductToCart(product),
            };
          }),
          loader: {
            inProgress: status.value === "pending",
            error: status.value === "error",
            retry: fetchProducts,
          },
        })
      )
    )
  )
);
