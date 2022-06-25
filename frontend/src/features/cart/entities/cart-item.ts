import { Product } from "@app/core/entities/Product";

export interface CartItem {
  productId: Product["id"];
  count: number;
}
