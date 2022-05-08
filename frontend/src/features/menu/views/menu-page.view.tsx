import React from "react";

export const MenuPage: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <div>
    <h1>Menu page</h1>
    {children}
  </div>
);
