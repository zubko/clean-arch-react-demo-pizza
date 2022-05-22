import { MenuItem, MenuItemProps } from "./menu-item.view";

export type MenuItemsProps = {
  items: MenuItemProps[];
  loader: MenuItemsLoaderProps;
};

export type MenuItemsLoaderProps = {
  inProgress: boolean;
  error: boolean;
  retry: () => void;
};

export const Items: React.FC<MenuItemsProps> = ({ items, loader }) =>
  !items.length ? (
    <>
      {loader.inProgress && <div>Loading...</div>}
      {loader.error && (
        <div>
          Error <button onClick={loader.retry}>🔄 retry</button>
        </div>
      )}
    </>
  ) : (
    <div>
      {loader.inProgress && <div>Updating...</div>}
      {items.map((itemProps) => (
        <MenuItem {...itemProps} />
      ))}
    </div>
  );
