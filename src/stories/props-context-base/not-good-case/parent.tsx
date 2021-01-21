import React, { useState } from "react";

import ChildComponent from "./child";
function ParentComponent() {
  const [state, setState] = useState<number>(0);

  return (
    <div>
      <h4>Props Not Good Case</h4>
      <ChildComponent state={state} />
    </div>
  );
}

export default ParentComponent;
