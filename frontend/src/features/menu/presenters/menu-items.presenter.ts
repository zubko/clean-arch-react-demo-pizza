import { combineLatest, map, switchMap } from "rxjs";
import {
  productsByCategory$,
  productsRequestStatus$,
} from "@app/core/repository/products.repository";
import { currentCategory$ } from "../repository/menu.repository";
import { MenuItemsProps } from "../views/menu-items.view";
import { updateProducts } from "../use-cases/products.use-case";

export const getCurrentItems$ = currentCategory$.pipe(
  switchMap((category) =>
    combineLatest([productsByCategory$(category), productsRequestStatus$]).pipe(
      map(
        ([products, status]): MenuItemsProps => ({
          items: products.map(({ id, name, price }) => ({
            id,
            title: name,
            price: `${price}€`,
            add: () => alert("TODO"),
          })),
          loader: {
            inProgress: status.value === "pending",
            error: status.value === "error",
            retry: updateProducts,
          },
        })
      )
    )
  )
);
