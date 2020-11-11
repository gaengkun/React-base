import React, { useReducer } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { DropboxComponent, DropboxProps, StateType, ActionType } from "./Dropbox";

export default {
  title: "Ui/Dropbox",
  component: DropboxComponent,
  argTypes: {
    borderColor: { control: "color" },
    fontColor: { control: "color" },
    arrowColor: { control: "color" },
    hoverFontColor: { control: "color" },
    optionCount: { control: "number" },
    optionHeight: { control: "number" },
  },
} as Meta;

const DefaultReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        isOpen: action.open!,
      };
    case "select":
      return {
        ...state,
        isOpen: false,
        selectIdx: action.idx!,
        others: action.others,
      };
    default:
      return state;
  }
};

const initialValue = {
  isOpen: false,
  boxList: [
    { value: 0, text: "a" },
    { value: 1, text: "b" },
    { value: 2, text: "c" },
    { value: 3, text: "d" },
    { value: 4, text: "e" },
    { value: 5, text: "f" },
    { value: 6, text: "g" },
    { value: 7, text: "h" },
    { value: 8, text: "i" },
    { value: 9, text: "j" },
    { value: 10, text: "k" },
  ],
  selectIdx: 5,
};

const Template: Story<DropboxProps> = (args) => {
  const [state, dispatch] = useReducer(DefaultReducer, initialValue);

  args = {
    ...args,
    state,
    dispatch,
  };

  return (
    <div style={{ height: args.height ? args.height * 4 + "px" : "auto" }}>
      <DropboxComponent {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: 100,
  height: 40,
};

export const Basic = () => {
  const [state, dispatch] = useReducer(DefaultReducer, initialValue);

  return (
    <div>
      <DropboxComponent state={state} dispatch={dispatch} />
    </div>
  );
};
