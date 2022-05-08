import { map } from "rxjs";
import { ProductCategory } from "@app/core/entities/Product";
import {
  currentCategory$,
  updateCurrentCategory,
} from "../repository/menu.repository";

export type CategoryViewModel = {
  id: ProductCategory;
  title: string;
  current: boolean;
};

export type CategoriesViewModel = {
  categories: CategoryViewModel[];
  onSelectCategory: (id: ProductCategory) => void;
};

const Categories: ProductCategory[] = ["pizza", "drink", "side"];
const Translations = { en: { pizza: "Pizza", drink: "Drinks", side: "Sides" } };

export const getCategories$ = currentCategory$.pipe(
  map(
    (currentCategory): CategoriesViewModel => ({
      categories: Categories.map(
        (id): CategoryViewModel => ({
          id,
          title: Translations.en[id],
          current: id === currentCategory,
        })
      ),
      onSelectCategory: updateCurrentCategory,
    })
  )
);
