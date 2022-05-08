import { map, switchMap } from "rxjs";
import { getProductsByCategory$ } from "@app/core/repository/products.repository";
import { currentCategory$ } from "../repository/menu.repository";

export type ItemComponent = "menu-item" | "pizza-item";

export type ItemViewModel = {
  id: string;
  title: string;
  price: string;
  component: ItemComponent;
};

export type ItemsViewModel = {
  items: ItemViewModel[];
};

export const getCurrentItems$ = currentCategory$.pipe(
  switchMap((category) =>
    getProductsByCategory$(category).pipe(
      map(
        (products): ItemsViewModel => ({
          items: products.map(({ id, name, price, category }) => ({
            id,
            title: name,
            price: `${price}€`,
            component: category === "pizza" ? "pizza-item" : "menu-item",
          })),
        })
      )
    )
  )
);
