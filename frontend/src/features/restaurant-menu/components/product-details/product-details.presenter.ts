import { Product } from "@app/core/entities/Product";
import {
  fetchProduct,
  productRequestStatus$,
  productWithSlug$,
} from "@app/core/repository/products.repository";
import {
  addProductToCart,
  cartItemForProductSlug$,
  removeProductFromCart,
} from "@app/features/cart";
import { CartItem } from "@app/features/cart/repository/cart.repository";
import { combineLatestWith, map, Observable } from "rxjs";
import { productImageElement } from "../product-image/product-image.presenter";
import { ProductDetailsProps } from "./product-details.view";

export const productDetailsProps$ = (
  productSlug: string
): Observable<ProductDetailsProps> =>
  productWithSlug$(productSlug)
    .pipe(
      combineLatestWith(
        productRequestStatus$(productSlug),
        cartItemForProductSlug$(productSlug)
      )
    )
    .pipe(
      map(
        ([maybeProduct, status, maybeCartItem]): ProductDetailsProps => ({
          details: maybeProduct
            ? formatProductDetails(maybeProduct, maybeCartItem)
            : undefined,
          loader: {
            inProgress: status.value === "pending",
            error: status.value === "error",
            retry: () => fetchProduct(productSlug),
          },
        })
      )
    );

const formatProductDetails = (
  product: Product,
  maybeCartItem: CartItem | undefined
): ProductDetailsProps["details"] => {
  const { name, price, description } = product;
  return {
    name,
    price: `${price}€`,
    description,
    imageElement: productImageElement(product),
    onAdd: () => addProductToCart(product),
    onRemove: maybeCartItem ? () => removeProductFromCart(product) : undefined,
  };
};
