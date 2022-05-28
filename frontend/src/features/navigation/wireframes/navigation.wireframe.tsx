import { RestaurantMenuWireframe } from "@app/features/restaurant-menu/wireframes/restaurant-menu.wireframe";
import { FC } from "react";
import { TopBar } from "../views/top-bar.view";

export const NavigationWireframe: FC<{}> = () => (
  <>
    <TopBar />
    <RestaurantMenuWireframe />
  </>
);
