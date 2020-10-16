import React, { createContext, useState } from "react";

const initialData = {
  testState: {
    formState: {
      first: 1,
      second: "a",
      isBoolean: false,
    },
  },

  testAction: {},
};

const ContextCaseContext = createContext(initialData);

function ContextCaseProvider(props: { children: JSX.Element }) {
  const [formState, setFormState] = useState(initialData.testState.formState);

  const testState = {
    formState,
  };

  const testAction = {
    setFormState,
  };
  const bundle = {
    testState,
    testAction,
  };

  return <ContextCaseContext.Provider value={bundle}>{props.children}</ContextCaseContext.Provider>;
}

export { ContextCaseProvider, ContextCaseContext };
