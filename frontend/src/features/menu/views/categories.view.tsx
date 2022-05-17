import styled, { css } from "styled-components";

export type CategoryViewProps = {
  id: string;
  title: string;
  selected: boolean;
  onSelect: () => void;
};

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

export const Category: React.FC<CategoryViewProps> = ({
  selected,
  title,
  onSelect,
}) => (
  <CategoryButton onClick={onSelect} disabled={selected}>
    {title}
  </CategoryButton>
);

export const CategoryButton = styled.button`
  padding: 4px 8px;
  margin: 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: black;
  border-radius: 4px;
  border: 2px solid black;
  background: linear-gradient(0deg, #f8ff00 0%, #3ad59f 100%);
  ${(props) =>
    !props.disabled &&
    css`
      background: linear-gradient(180deg, #f8ff00 0%, #3ad59f 100%);
      &:hover {
        border-color: #ffff00;
        color: #ffff00;
        background: linear-gradient(180deg, #f8ff00 0%, #2a946f 100%);
      }
    `}
`;
