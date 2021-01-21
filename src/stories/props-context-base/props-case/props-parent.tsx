import React, { useState, useEffect, useCallback } from "react";

import ChildComponent from "./props-child";
import CousinComponent from "./props-cousin";
function PropsParent() {
  const [formState, setFormState] = useState({
    first: 1,
    second: "a",
    isBoolean: false,
  });

  const fetchData = useCallback(() => {
    console.log(formState);
  }, [formState]);

  useEffect(() => {
    fetchData();
  }, [formState]);
  console.log("parent Rendering");
  return (
    <div>
      <h4>Props Parent</h4>
      <CousinComponent formState={formState} setFormState={setFormState} />
      <ChildComponent formState={formState} setFormState={setFormState} />
    </div>
  );
}

export default React.memo(PropsParent);
