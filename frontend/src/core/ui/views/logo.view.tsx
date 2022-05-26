import { color } from "@app/core/ui/theme/api";
import { FC } from "react";
import styled from "styled-components";

export const Logo: FC<{}> = () => (
  <Container>
    <b>
      🌃 Ne<span>o</span>n Pi<span>zz</span>a
    </b>
  </Container>
);

const Container = styled.div`
  margin-left: 8px;
  b {
    font-family: "Neonderthaw", cursive;
    font-size: 42px;
    font-weight: 400;
    color: ${color("logo")};
    text-shadow: 0 -20px 50px, 0 0 2px, 0 0 1em ${color("logoNeon")},
      0 0 0.5em ${color("logoNeon")}, 0 0 0.1em ${color("logoNeon")},
      0 5px 3px #00000053;
  }
  b span {
    font-family: "Neonderthaw", cursive;
    animation: blink linear infinite 2s;
  }
  b span:nth-of-type(2) {
    animation: blink linear infinite 3s;
  }
  @keyframes blink {
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79% {
      color: ${color("pageBg")};
    }
    80% {
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: ${color("pageBg")};
      text-shadow: none;
    }
    83% {
      color: inherit;
      text-shadow: inherit;
    }
    92% {
      color: ${color("pageBg")};
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }
`;
