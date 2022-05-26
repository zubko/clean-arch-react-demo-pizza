import { Logo } from "@app/core/ui/views/logo.view";
import React from "react";

export const MenuPage: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <div>
    <Logo />
    {children}
  </div>
);
