import React, { useCallback, useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { ToastComponent, ToastPropsType } from "./Toast";

export default {
  title: "Alert/Toast",
  component: ToastComponent,
} as Meta;

export const Default = () => {
  const [msg, setMsg] = useState<string>("");

  const changeMsg = useCallback(() => {
    setMsg("안녕" + Math.random());
  }, [msg]);

  return (
    <div>
      <button onClick={changeMsg}>Msg변경</button>

      <ToastComponent msg={msg} setMsg={setMsg} />
    </div>
  );
};
