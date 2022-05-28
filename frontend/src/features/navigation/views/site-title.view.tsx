import { color } from "@app/core/ui/theme/api";
import { FC } from "react";
import styled from "styled-components";

export const SiteTitle: FC<{}> = () => <Container>Neon Pizza</Container>;

const Container = styled.div`
  font-family: "Neonderthaw", cursive;
  font-size: 42px;
  font-weight: 400;
  color: ${color("logo")};
  text-shadow: 0 -20px 50px, 0 0 2px, 0 0 1em ${color("logoNeon")},
    0 0 0.5em ${color("logoNeon")}, 0 0 0.1em ${color("logoNeon")},
    0 5px 3px #00000053;
  user-select: none;
`;
