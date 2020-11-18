import React, { useContext, useCallback } from "react";

import { Meta } from "@storybook/react/types-6-0";

import { GlobalContext, GlobalProvider } from "../../context/global_ctx";

import Alert from "./Alert";

export default {
  title: "Alert/Alert",
  component: Alert,
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
  const setAlert = useCallback(() => {
    globalAction.setAlertLayer &&
      globalAction.setAlertLayer({
        status: true,
        content: "Hello World This is New World!",
        title: "Title",
      });
  }, [globalAction]);

  return (
    <>
      {globalState.alertLayer.status === true && <Alert />}

      <div>
        <button onClick={setAlert}>Default Alert</button>
        <button onClick={setAlert}>Animation Alert</button>
      </div>
    </>
  );
};
