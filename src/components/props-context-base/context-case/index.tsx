import React from "react";
import { ContextCaseProvider } from "./store";

import ContextParent from "./context-parent";
export default () => {
  return (
    <ContextCaseProvider>
      <ContextParent />
    </ContextCaseProvider>
  );
};
