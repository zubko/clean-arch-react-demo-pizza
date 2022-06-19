import { useObservable } from "@ngneat/react-rxjs";
import { getCategories$ } from "./categories.presenter";
import { Categories } from "./categories.view";

export const CategoriesWireframe = () => {
  const [categories] = useObservable(getCategories$);
  return <Categories {...categories} />;
};
