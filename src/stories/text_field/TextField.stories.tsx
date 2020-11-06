import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { TextField, TextFieldProps } from "./TextField";

export default {
  title: "Ui/TextField",
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: {
    position: "top",
    text: "Email",
  },
  style: { padding: "10px" },
};
