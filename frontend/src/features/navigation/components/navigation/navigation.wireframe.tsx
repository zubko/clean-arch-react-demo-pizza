import { CartStatusWireframe } from "@app/features/cart/components/cart-status/cart-status.wireframe";
import { RestaurantMenuWireframe } from "@app/features/restaurant-menu/components/restaurant-menu/restaurant-menu.wireframe";
import { FC } from "react";
import { TopBar } from "../top-bar/top-bar.view";

export const NavigationWireframe: FC<{}> = () => (
  <>
    <TopBar CartStatus={CartStatusWireframe} />
    <RestaurantMenuWireframe />
  </>
);
