import React, { useEffect, useCallback, useContext } from "react";

import { ContextCaseContext } from "./store";

import ChildComponent from "./context-child";
import CousinComponent from "./context-cousin";
function PropsParent() {
  const { testState, testAction } = useContext(ContextCaseContext);

  const { formState } = testState;

  const fetchData = useCallback(() => {
    console.log(formState);
  }, [formState]);

  useEffect(() => {
    fetchData();
  }, [formState]);
  console.log("parent Rendering");
  return (
    <div>
      <h4>Context Parent</h4>
      <CousinComponent />
      <ChildComponent />
    </div>
  );
}

export default React.memo(PropsParent);
