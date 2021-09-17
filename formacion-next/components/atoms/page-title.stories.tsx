import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageTitle } from "./page-title";

export default {
  title: "Atoms/Page Title",
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
