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

  const setAniamtiionAlert = useCallback(
    (type: { from: any; sec?: number }) => {
      globalAction.setAlertLayer &&
        globalAction.setAlertLayer({
          status: true,
          content: "Hello World This is New World!",
          title: "Title",
          animation: type,
        });
    },
    [globalAction]
  );

  return (
    <>
      {globalState.alertLayer.status === true && <Alert />}

      <div>
        <button onClick={setAlert}>Default Alert</button>
        <button
          onClick={() =>
            setAniamtiionAlert({
              from: "CENTER",
              sec: 1,
            })
          }
        >
          Animation Alert By Center and 1s
        </button>
        <button
          onClick={() =>
            setAniamtiionAlert({
              from: "TOP",
              sec: 1,
            })
          }
        >
          Animation Alert By Top and 1s
        </button>
        <button
          onClick={() =>
            setAniamtiionAlert({
              from: "LEFT",
              sec: 1,
            })
          }
        >
          Animation Alert By Left and 1s
        </button>
        <button
          onClick={() =>
            setAniamtiionAlert({
              from: "RIGHT",
              sec: 1,
            })
          }
        >
          Animation Alert By Right and 1s
        </button>
        <button
          onClick={() =>
            setAniamtiionAlert({
              from: "BOTTOM",
              sec: 1,
            })
          }
        >
          Animation Alert By Bottom and 1s
        </button>
      </div>
    </>
  );
};
