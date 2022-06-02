import { Product } from "@app/core/entities/Product";
import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { cartItems$, setCartItems } from "../repository/cart.repository";
import { addProductToCart } from "./add-product-to-cart";

const MockProduct: Product = {
  id: "1",
  category: "drink",
  name: "product",
  price: 10,
  image: "",
};

describe("Add Products To Cart", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("adds a new item with count 1 if it's not present", () => {
    addProductToCart(MockProduct);
    expect(getFirstValue(cartItems$)).toMatchInlineSnapshot(`
      Array [
        Object {
          "count": 1,
          "productId": "1",
        },
      ]
    `);
  });

  it("increments the count if the item is present", () => {
    setCartItems([{ productId: "1", count: 5 }]);
    addProductToCart(MockProduct);
    expect(getFirstValue(cartItems$)).toMatchInlineSnapshot(`
      Array [
        Object {
          "count": 6,
          "productId": "1",
        },
      ]
    `);
  });
});
