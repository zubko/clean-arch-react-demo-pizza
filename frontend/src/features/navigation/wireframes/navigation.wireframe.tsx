import { MenuWireframe } from "@app/features/menu/wireframes/menu.wireframe";
import { FC } from "react";
import { TopBar } from "../views/top-bar.view";

export const NavigationWireframe: FC<{}> = () => (
  <>
    <TopBar />
    <MenuWireframe />
  </>
);
