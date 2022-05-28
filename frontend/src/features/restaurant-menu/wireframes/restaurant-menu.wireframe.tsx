import { useObservable } from "@ngneat/react-rxjs";
import { useEffect } from "react";
import { getCategories$ } from "../presenters/categories.presenter";
import { getCurrentItems$ } from "../presenters/menu-items.presenter";
import { fetchProducts } from "../use-cases/products.use-case";
import { Categories } from "../views/categories.view";
import { MenuItems } from "../views/menu-items.view";
import { MenuPage } from "../views/menu-page.view";

export const RestaurantMenuWireframe = () => {
  const [categories] = useObservable(getCategories$);
  const [items] = useObservable(getCurrentItems$);
  useEffect(fetchProducts, []);
  return (
    <MenuPage>
      <Categories {...categories} />
      <MenuItems {...items} />
    </MenuPage>
  );
};
