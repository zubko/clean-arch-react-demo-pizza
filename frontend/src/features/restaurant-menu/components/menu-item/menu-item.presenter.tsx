import { Product } from "@app/core/entities/Product";
import { addProductToCart, isProductInCart$ } from "@app/features/cart";
import { Link } from "react-router-dom";
import { map, Observable } from "rxjs";
import { productImageElement } from "../product-image/product-image.presenter";
import { MenuItemProps } from "./menu-item.view";

export const getMenuItemProps$ = (
  product: Product
): Observable<MenuItemProps> =>
  isProductInCart$(product).pipe(
    map((inCart): MenuItemProps => {
      let { id, name, price, slug } = product;
      return {
        id,
        title: name,
        price: `${price}€`,
        imageElement: productImageElement(product),
        linkElement: <Link to={`/menu/${slug || id}`} />,
        addTitle: inCart ? "Add one more" : "Add",
        add: () => addProductToCart(product),
      };
    })
  );
