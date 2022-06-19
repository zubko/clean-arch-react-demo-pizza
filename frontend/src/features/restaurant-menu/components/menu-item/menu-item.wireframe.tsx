import { Product } from "@app/core/entities/Product";
import { useObservable } from "@ngneat/react-rxjs";
import { menuItemProps$ } from "./menu-item.presenter";
import { MenuItem } from "./menu-item.view";

export const MenuItemWireframe = ({ product }: { product: Product }) => {
  const [props] = useObservable(menuItemProps$(product), {
    deps: [product.id],
  });
  return <MenuItem {...props} />;
};
