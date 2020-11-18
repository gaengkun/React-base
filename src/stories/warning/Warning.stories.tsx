import React, { useContext, useCallback } from "react";

import { Meta } from "@storybook/react/types-6-0";

import { GlobalContext, GlobalProvider } from "../../context/global_ctx";

import Warning from "./Warning";

export default {
  title: "Alert/Warning",
  component: Warning,
  decorators: [
    (Story: any) => {
      return (
        <GlobalProvider>
          <Story />
        </GlobalProvider>
      );
    },
  ],
  argTypes: {},
} as Meta;

export const Default = () => {
  const { globalState, globalAction } = useContext(GlobalContext);
  const setWarning = useCallback(() => {
    globalAction.setWarningLayer &&
      globalAction.setWarningLayer({
        status: true,
        content: "Hello World This is New World!" + Math.floor(Math.random() * 10),
        backgroundColor: "#fff7df",
        color: "#d5b046",
      });
  }, [globalAction]);

  return (
    <>
      <div>
        <button onClick={setWarning}>Default Warning</button>
      </div>
      <Warning />
    </>
  );
};
