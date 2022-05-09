import { useObservable } from "@ngneat/react-rxjs";
import { getCategories$ } from "../presenters/categories.presenter";
import { getCurrentItems$ } from "../presenters/items.presenter";
import { Categories } from "../views/categories.view";
import { Items } from "../views/items.view";
import { MenuPage } from "../views/menu-page.view";

export const MenuWireframe = () => {
  const [categories] = useObservable(getCategories$);
  const [items] = useObservable(getCurrentItems$);
  return (
    <MenuPage>
      <Categories {...categories} />
      <Items {...items} />
    </MenuPage>
  );
};
