import { Logo } from "@app/core/ui/views/logo.view";
import React from "react";
import styled from "styled-components";

export const MenuPage: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <Container>
    <Logo />
    {children}
  </Container>
);

const Container = styled.div`
  padding: 8px 16px;
`;
