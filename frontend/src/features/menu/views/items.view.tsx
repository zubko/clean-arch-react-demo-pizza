import { ItemsViewModel } from "../presenters/items.presenter";

export const Items: React.FC<{ viewModel: ItemsViewModel }> = ({
  viewModel: { items },
}) =>
  !items.length ? (
    <div>Loading...</div>
  ) : (
    <div>
      {items.map(({ id, title, price }) => (
        <div
          key={id}
          style={{ border: "1px solid black", padding: 8, margin: 4 }}
        >
          <h3>{title}</h3>
          <div>{price}</div>
          <button>Add</button>
        </div>
      ))}
    </div>
  );
