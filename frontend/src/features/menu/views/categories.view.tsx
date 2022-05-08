import { CategoriesViewModel } from "../presenters/categories.presenter";

export const Categories: React.FC<{ viewModel: CategoriesViewModel }> = ({
  viewModel,
}) => (
  <div>
    {viewModel.categories.map(({ current, title, id }) =>
      current ? (
        <span key={id}>{title}</span>
      ) : (
        <button key={id} onClick={() => viewModel.onSelectCategory(id)}>
          {title}
        </button>
      )
    )}
  </div>
);
