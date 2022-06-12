import { Product } from "@app/core/entities/Product";
import {
  fetchProduct,
  productRequestStatus$,
  productWithSlug$,
} from "@app/core/repository/products.repository";
import { addProductToCart, removeProductFromCart } from "@app/features/cart";
import { combineLatestWith, map, Observable } from "rxjs";
import { productImageElement } from "../product-image/product-image.presenter";
import { ProductDetailsProps } from "./product-details.view";

export const productDetailsProps$ = (
  productSlug: string
): Observable<ProductDetailsProps> =>
  productWithSlug$(productSlug)
    .pipe(combineLatestWith(productRequestStatus$(productSlug)))
    .pipe(
      map(
        ([maybeProduct, status]): ProductDetailsProps => ({
          details: maybeProduct
            ? formatProductDetails(maybeProduct)
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
  product: Product
): ProductDetailsProps["details"] => {
  const { name, price, description } = product;
  return {
    name,
    price: `${price}€`,
    description,
    imageElement: productImageElement(product),
    onAdd: () => addProductToCart(product),
    onRemove: () => removeProductFromCart(product),
  };
};
