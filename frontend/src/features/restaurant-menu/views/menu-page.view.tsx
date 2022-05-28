import React from "react";
import styled from "styled-components";

export const MenuPage: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => <Container>{children}</Container>;

const Container = styled.div`
  padding: 8px 16px;
`;
