import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logo as LogoComp } from "./logo.view";

export default {
  component: LogoComp,
} as ComponentMeta<typeof LogoComp>;

const Template: ComponentStory<typeof LogoComp> = (args) => (
  <LogoComp {...args} />
);

export const Logo = Template.bind({});
