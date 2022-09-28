import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const SpinnerTemplate = () => {
  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      <Button label={"Button"} onClick={() => {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
        }, 1000)
      }}
      useSpinner={true}
      loading={loading}
      >

      </Button>
    </div>
  )
}



export const UseSpinner = Template.bind(SpinnerTemplate);
UseSpinner.args = {
  useSpinner: true,
  loading: true
}
