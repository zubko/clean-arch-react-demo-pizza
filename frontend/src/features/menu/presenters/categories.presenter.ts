import { map } from "rxjs";
import { ProductCategory } from "@app/core/entities/Product";
import {
  currentCategory$,
  updateCurrentCategory,
} from "../repository/menu.repository";
import {
  CategoriesViewProps,
  CategoryViewProps,
} from "../views/categories.view";

const Categories: ProductCategory[] = ["pizza", "drink", "side"];
const Translations = { en: { pizza: "Pizza", drink: "Drinks", side: "Sides" } };

export const getCategories$ = currentCategory$.pipe(
  map(
    (currentCategory): CategoriesViewProps => ({
      categories: Categories.map(
        (id): CategoryViewProps => ({
          id,
          title: Translations.en[id],
          current: id === currentCategory,
        })
      ),
      onSelectCategory: updateCurrentCategory,
    })
  )
);
