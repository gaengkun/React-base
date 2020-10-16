import React from "react";
import { ContextCaseProvider } from "./store";

export default () => {
  return (
    <ContextCaseProvider>
      <div></div>
    </ContextCaseProvider>
  );
};
