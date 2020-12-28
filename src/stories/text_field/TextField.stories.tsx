import React, { useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { TextField, TextFieldProps } from "./TextField";

export default {
  title: "Ui/TextField",
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  const [state, setState] = useState<string | number>("");

  args.callback = (e: any) => {
    setState(e.target.value);
  };

  args.state = state;

  return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  state: "",
  label: {
    position: "LEFT",
    text: "Email",
  },
  inputStyle: { padding: "10px" },
  placeHolder: "Email을 입력해 주세요.",
};
