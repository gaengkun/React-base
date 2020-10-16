import React from "react";

import ContextGrandson from "./context-grandson";

function PropsChildComponent({ formState, setFormState }: any) {
  console.log("child Rendering");

  return (
    <div>
      <h5>PropsChildComponent</h5>
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
      <div>
        <ContextGrandson formState={formState} setFormState={setFormState} />
      </div>
    </div>
  );
}

export default PropsChildComponent;
