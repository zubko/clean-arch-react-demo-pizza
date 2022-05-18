import styled, { css } from "styled-components";

export type CategoryViewProps = {
  id: string;
  title: string;
  selected: boolean;
  onSelect: () => void;
};

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
