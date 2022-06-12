import { Product } from "@app/core/entities/Product";
import {
  productsStore,
  setProducts,
} from "@app/core/repository/products.repository";
import { resetAllStores } from "@app/core/repository/repository";
import { getFirstValue } from "@app/core/test/observable-test-utils";
import { updateRequestStatus } from "@ngneat/elf-requests";
import { productDetailsProps$ } from "./product-details.presenter";

const ProductMock: Product = {
  id: "1",
  category: "pizza",
  name: "name",
  slug: "slug",
  price: 1,
  image: "",
  description: "description-1",
};

describe("Product details presenter", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns the view model for existing product", () => {
    setProducts([ProductMock]);
    expect(getFirstValue(productDetailsProps$(ProductMock.slug)))
      .toMatchInlineSnapshot(`
      Object {
        "details": Object {
          "description": "description-1",
          "imageElement": <styled.div
            color="#b2226c"
          />,
          "name": "name",
          "onAdd": [Function],
          "onRemove": [Function],
          "price": "1€",
        },
        "loader": Object {
          "error": false,
          "inProgress": false,
          "retry": [Function],
        },
      }
    `);
  });

  it("returns the view model for non existing product", () => {
    expect(getFirstValue(productDetailsProps$(ProductMock.slug)))
      .toMatchInlineSnapshot(`
      Object {
        "details": undefined,
        "loader": Object {
          "error": false,
          "inProgress": false,
          "retry": [Function],
        },
      }
    `);
  });

  it("returns the view model for non existing product while fetching it", () => {
    productsStore.update(updateRequestStatus(ProductMock.slug, "pending"));
    expect(getFirstValue(productDetailsProps$(ProductMock.slug)))
      .toMatchInlineSnapshot(`
      Object {
        "details": undefined,
        "loader": Object {
          "error": false,
          "inProgress": true,
          "retry": [Function],
        },
      }
    `);
  });

  it("returns the view model for non existing product while error happened", () => {
    productsStore.update(
      updateRequestStatus(ProductMock.slug, "error", "test error")
    );
    expect(getFirstValue(productDetailsProps$(ProductMock.slug)))
      .toMatchInlineSnapshot(`
      Object {
        "details": undefined,
        "loader": Object {
          "error": true,
          "inProgress": false,
          "retry": [Function],
        },
      }
    `);
  });
});
