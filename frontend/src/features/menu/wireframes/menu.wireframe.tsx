import { useObservable } from "@ngneat/react-rxjs";
import { useEffect } from "react";
import { getCategories$ } from "../presenters/categories.presenter";
import { getCurrentItems$ } from "../presenters/menu-items.presenter";
import { updateProducts } from "../use-cases/products.use-case";
import { Categories } from "../views/categories.view";
import { Items } from "../views/menu-items.view";
import { MenuPage } from "../views/menu-page.view";

export const MenuWireframe = () => {
  const [categories] = useObservable(getCategories$);
  const [items] = useObservable(getCurrentItems$);
  useEffect(updateProducts, []);
  return (
    <MenuPage>
      <Categories {...categories} />
      <Items {...items} />
    </MenuPage>
  );
};
