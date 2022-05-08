import { createStore } from "@ngneat/elf";
import {
  selectManyByPredicate,
  setEntities,
  withEntities,
} from "@ngneat/elf-entities";
import { persistState, localStorageStrategy } from "@ngneat/elf-persist-state";

import { Product, ProductCategory } from "../entities/Product";

const store = createStore({ name: "products" }, withEntities<Product>());
// persistState(store, { storage: localStorageStrategy });

export const getProductsByCategory$ = (category: ProductCategory) =>
  store.pipe(selectManyByPredicate((product) => product.category === category));

export const setProducts = (products: Product[]) =>
  store.update(setEntities(products));

setTimeout(() => {
  setProducts([
    {
      id: "1",
      category: "pizza",
      name: "Margarita",
      price: 10,
      image: "",
    },
    {
      id: "2",
      category: "pizza",
      name: "Pepperoni",
      price: 15,
      image: "",
    },
    {
      id: "3",
      category: "pizza",
      name: "Salami",
      price: 20,
      image: "",
    },
    {
      id: "4",
      category: "drink",
      name: "Cola",
      price: 2,
      image: "",
    },
    {
      id: "5",
      category: "drink",
      name: "Juice",
      price: 5,
      image: "",
    },
    {
      id: "6",
      category: "side",
      name: "Sauce",
      price: 1,
      image: "",
    },
  ]);
}, 2000);
