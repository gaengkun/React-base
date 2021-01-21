import React from "react";

import ContextGrandson from "./context-grandson";

function PropsChildComponent() {
  console.log("child Rendering");

  return (
    <div>
      <h5>Context Child Component</h5>
      {/* <div>
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
      </div> */}
      <div>
        <ContextGrandson />
      </div>
    </div>
  );
}

export default React.memo(PropsChildComponent);
