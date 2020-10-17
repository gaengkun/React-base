import React, { useContext } from "react";
import { ContextCaseContext } from "./store";

function ContextCousinComponent() {
  console.log("cousin Rendering");

  const { testState, testAction } = useContext(ContextCaseContext);

  const { formState } = testState;
  const setFormState = testAction.setFormState!;

  return (
    <div>
      <h5>Context Cousin Component</h5>
      <div>
        <p>State Change by first</p>
        <button
          onClick={() => {
            setFormState({
              ...formState,
              first: Math.round(Math.random() * 10),
            });
          }}
        >
          first Change
        </button>
        <p>Fist : {formState.first}</p>
      </div>
      <div>
        <p>State Change by second</p>
        <button
          onClick={() => {
            setFormState({
              ...formState,
              second: formState.second === "a" ? "b" : "a",
            });
          }}
        >
          second Change
        </button>
        <p>Second : {formState.second}</p>
      </div>
      <div>
        <p>State Change by isBoolean</p>
        <button
          onClick={() => {
            setFormState({
              ...formState,
              isBoolean: !formState.isBoolean,
            });
          }}
        >
          isBoolean Change
        </button>
        <p>isBoolean : {formState.isBoolean ? "TRUE" : "FALSE"}</p>
      </div>
    </div>
  );
}

export default ContextCousinComponent;
