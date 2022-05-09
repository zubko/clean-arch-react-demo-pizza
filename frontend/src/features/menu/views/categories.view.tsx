import { ProductCategory } from "@app/core/entities/Product";

export type CategoryViewProps = {
  id: ProductCategory;
  title: string;
  current: boolean;
};

export type CategoriesViewProps = {
  categories: CategoryViewProps[];
  onSelectCategory: (id: ProductCategory) => void;
};

export const Categories: React.FC<CategoriesViewProps> = ({
  categories,
  onSelectCategory,
}) => (
  <div>
    {categories.map(({ current, title, id }) =>
      current ? (
        <span key={id}>{title}</span>
      ) : (
        <button key={id} onClick={() => onSelectCategory(id)}>
          {title}
        </button>
      )
    )}
  </div>
);
