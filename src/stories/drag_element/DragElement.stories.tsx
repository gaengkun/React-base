import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { DragElementComponent } from "./DragElement";

export default {
  title: "Ui/Drag",
  component: DragElementComponent,
} as Meta;

const Template: Story = (args) => <DragElementComponent />;

export const Default = Template.bind({});
