import { CartStatusWireframe } from "@app/features/cart";
import {
  ProductDetailsWireframe,
  RestaurantMenuWireframe,
} from "@app/features/restaurant-menu";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../not-found/not-found.view";
import { TopBar } from "../top-bar/top-bar.view";

export const NavigationWireframe: FC<{}> = () => (
  <>
    <TopBar CartStatus={CartStatusWireframe} />
    <BrowserRouter>
      <Routes>
        <Route index element={<RestaurantMenuWireframe />} />
        <Route path="menu">
          <Route index element={<RestaurantMenuWireframe />} />
          <Route path=":productSlug" element={<ProductDetailsWireframe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);
