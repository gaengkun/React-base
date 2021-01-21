import React from "react";

import PropsGrandson from "./props-grandson";

function PropsChildComponent({ formState, setFormState }: any) {
  console.log("child Rendering");

  return (
    <div>
      <h5>PropsChildComponent</h5>
      <div>
        <PropsGrandson formState={formState} setFormState={setFormState} />
      </div>
    </div>
  );
}

export default React.memo(PropsChildComponent, (prev, cur) => {
  return false;
});
