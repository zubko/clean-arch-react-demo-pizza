export type ItemComponent = "menu-item" | "pizza-item";

export type ItemViewProps = {
  id: string;
  title: string;
  price: string;
  component: ItemComponent;
};

export type ItemsViewProps = {
  items: ItemViewProps[];
};

export const Items: React.FC<ItemsViewProps> = ({ items }) =>
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
