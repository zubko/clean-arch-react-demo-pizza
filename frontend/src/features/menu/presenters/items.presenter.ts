import { map, switchMap } from "rxjs";
import { getProductsByCategory$ } from "@app/core/repository/products.repository";
import { currentCategory$ } from "../repository/menu.repository";
import { ItemsViewProps } from "../views/items.view";

export const getCurrentItems$ = currentCategory$.pipe(
  switchMap((category) =>
    getProductsByCategory$(category).pipe(
      map(
        (products): ItemsViewProps => ({
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
