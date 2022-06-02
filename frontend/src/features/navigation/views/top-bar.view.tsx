import { ComponentType, FC } from "react";
import styled from "styled-components";
import { Logo } from "./logo.view";
import { SiteTitle } from "./site-title.view";

type TopBarProps = {
  CartStatus: ComponentType;
};

export const TopBar: FC<TopBarProps> = ({ CartStatus }) => (
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
