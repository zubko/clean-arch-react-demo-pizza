import { CartStatusWireframe } from "@app/features/cart";
import { RestaurantMenuWireframe } from "@app/features/restaurant-menu";
import { FC } from "react";
import { TopBar } from "../top-bar/top-bar.view";

export const NavigationWireframe: FC<{}> = () => (
  <>
    <TopBar CartStatus={CartStatusWireframe} />
    <RestaurantMenuWireframe />
  </>
);
