import { CartStatus } from "@app/features/cart/views/cart-status.view";
import { FC } from "react";
import styled from "styled-components";
import { Logo } from "./logo.view";
import { SiteTitle } from "./site-title.view";

export const TopBar: FC<{}> = () => (
  <Container>
    <Logo />
    <SiteTitle />
    <CartStatus />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 16px 0;
`;
