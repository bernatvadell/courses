import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./card";

export default {
  title: "Molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "https://www.patterson.agency",
  content: "Me encanta Patterson :)",
  title: "Patterson",
};
