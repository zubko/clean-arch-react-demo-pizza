export type ItemProps = {
  id: string;
  title: string;
  price: string;
  add: () => void;
};

export const MenuItem = ({ id, title, price, add }: ItemProps) => (
  <div key={id} style={{ border: "1px solid black", padding: 8, margin: 4 }}>
    <h3>{title}</h3>
    <div>{price}</div>
    <button onClick={add}>Add</button>
  </div>
);
