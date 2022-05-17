import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Categories, Category, CategoryViewProps } from "./categories.view";

export default {
  component: Categories,
} as ComponentMeta<typeof Categories>;

const categories: CategoryViewProps[] = [
  {
    id: "id-1",
    title: "Category 1",
    selected: true,
    onSelect: () => alert("on select 1"),
  },
  {
    id: "id-2",
    title: "Category 2",
    selected: false,
    onSelect: () => alert("on select 2"),
  },
  {
    id: "id-3",
    title: "Category 3",
    selected: false,
    onSelect: () => alert("on select 3"),
  },
];

const CategoryTemplate: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const CategorySelected = CategoryTemplate.bind({});
CategorySelected.args = {
  ...categories[0],
  selected: true,
};

export const CategoryNotSelected = CategoryTemplate.bind({});
CategoryNotSelected.args = {
  ...categories[0],
  selected: false,
};

const CategoriesTemplate: ComponentStory<typeof Categories> = (args) => (
  <Categories {...args} />
);

export const CategoriesStory = CategoriesTemplate.bind({});
CategoriesStory.args = {
  categories,
};
