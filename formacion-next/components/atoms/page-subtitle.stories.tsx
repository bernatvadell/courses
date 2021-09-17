import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageSubtitle } from "./page-subtitle";

export default {
  title: "Atoms/Page Subtitle",
  component: PageSubtitle,
} as ComponentMeta<typeof PageSubtitle>;

const Template: ComponentStory<typeof PageSubtitle> = (args) => (
  <PageSubtitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
