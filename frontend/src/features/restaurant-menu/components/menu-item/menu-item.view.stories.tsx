import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuItem, MenuItemProps } from "./menu-item.view";

export default {
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const props: MenuItemProps = {
  id: "id",
  title: "Title",
  price: "20,000¥",
  category: "pizza",
  color: "#b2226c",
  add: () => alert("on add"),
};

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <div style={{ width: 320 }}>
    <MenuItem {...args} />
  </div>
);

export const Pizza = Template.bind({});
Pizza.args = {
  ...props,
  category: "pizza",
};

export const PizzaHover = Template.bind({});
PizzaHover.args = {
  ...props,
  category: "pizza",
};
PizzaHover.parameters = { pseudo: { hover: true } };

export const Drink = Template.bind({});
Drink.args = {
  ...props,
  category: "drink",
};

export const Side = Template.bind({});
Side.args = {
  ...props,
  category: "side",
};
