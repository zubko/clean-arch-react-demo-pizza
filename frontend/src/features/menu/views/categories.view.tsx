import styled from "styled-components";
import { Category, CategoryViewProps } from "./category.view";

export type CategoriesViewProps = {
  categories: CategoryViewProps[];
};

export const Categories: React.FC<CategoriesViewProps> = ({ categories }) => (
  <Container>
    {categories.map((props) => (
      <Category key={props.id} {...props} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2be253;
  padding: 8px;
  border-radius: 8px;
  margin: 8px;
`;
