import { color, gradient } from "@app/core/ui/theme/api";
import styled from "styled-components";

export type MenuItemProps = {
  id: string;
  title: string;
  price: string;
  category: "pizza" | "drink" | "side";
  color: string;
  add: () => void;
};

export const MenuItem = ({
  id,
  title,
  price,
  category,
  color,
  add,
}: MenuItemProps) => (
  <Container key={id}>
    <ImageContainer>
      {category === "pizza" && <ImagePizza color={color} />}
      {category === "drink" && <ImageDrink color={color} />}
      {category === "side" && <ImageSide color={color} />}
    </ImageContainer>
    <Title>{title}</Title>
    <Price>
      <span>{price}</span>
    </Price>
    <AddButton onClick={add}>Add</AddButton>
  </Container>
);

const Container = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid ${color("menuBg2")};
  flex-direction: column;
  background-color: ${color("pageBg")};
`;

const ImageContainer = styled.div`
  align-self: stretch;
  background: ${gradient("photoBg")};
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
`;

const ImagePizza = styled.div<{ color: string }>`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  flex-shrink: 0;
  background-color: ${({ color }) => color};
  margin-top: 12px;
  margin-left: -25%;
`;

const ImageDrink = styled.div<{ color: string }>`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  flex-shrink: 0;
  background-color: ${({ color }) => color};
  margin-top: 12px;
  margin-left: -25%;
`;

const ImageSide = styled.div<{ color: string }>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 75px 129.9px 75px;
  border-color: transparent transparent ${({ color }) => color} transparent;
  margin-top: 12px;
  margin-left: -25%;
`;

const Title = styled.h3`
  padding: 4px 8px;
  font-size: 22px;
  line-height: 1.5;
`;

const Price = styled.div`
  padding: 4px 8px;
  font-size: 20px;
  font-weight: 200;
`;

const AddButton = styled.button`
  padding: 8px 12px;
  background: ${gradient("buttonBg")};
  margin: 8px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  color: black;
  border: 2px solid black;
  &:hover {
    border-color: ${color("hover")};
    color: ${color("hover")};
    background: ${gradient("buttonBgHover")};
  }
`;
