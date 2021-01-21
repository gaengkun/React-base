import React, { createContext, useState } from "react";

type ActionType = {
  setFormState?(data: any): void;
};

type StateType = {
  formState: {
    first: number;
    second: string;
    isBoolean: boolean;
  };
};

type BundleType = {
  testState: StateType;
  testAction: ActionType;
};

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

const ContextCaseContext = createContext<BundleType>(initialData);

function ContextCaseProvider(props: { children: JSX.Element }) {
  const [formState, setFormState] = useState(initialData.testState.formState);

  const testState: StateType = {
    formState,
  };

  const testAction: ActionType = {
    setFormState,
  };
  const bundle: BundleType = {
    testState,
    testAction,
  };

  return (
    <ContextCaseContext.Provider value={bundle}>
      {props.children}
    </ContextCaseContext.Provider>
  );
}

export { ContextCaseProvider, ContextCaseContext };
