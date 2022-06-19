import { useObservable } from "@ngneat/react-rxjs";
import { getCurrentItems$ } from "./menu-items.presenter";
import { MenuItems } from "./menu-items.view";

export const MenuItemsWireframe = () => {
  const [items] = useObservable(getCurrentItems$);
  return <MenuItems {...items} />;
};
