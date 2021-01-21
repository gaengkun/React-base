import React, { useState } from "react";

import ChildComponent from "./child";

function Parent() {
  const [constantNumber, setConstantNumber] = useState<number>(0);
  const [isBoolean, setIsBoolean] = useState<boolean>(false);
  const [ifObject, setIfObject] = useState<any>({
    test: 1,
    test1: "b",
  });

  const test = () => {};

  console.log("ParentComponent Rendering");
  return (
    <div>
      <h4>ParentComponent</h4>
      <p> Count 를 변경할 경우 Child Component 가 리렌더링 되지만, isBoolean값이 변경될 경우 ChildComponent 가 변경되지 않음.</p>

      <ChildComponent constantNumber={constantNumber} isBoolean={isBoolean} ifObject={ifObject} />

      <button
        onClick={() => {
          setConstantNumber(constantNumber + 1);
        }}
      >
        Count + 1
      </button>

      <button
        onClick={() => {
          setIsBoolean(!isBoolean);
        }}
      >
        Boolean Controll
      </button>

      <button
        onClick={() => {
          setIfObject({
            ...ifObject,
            test: Math.round(Math.random() * 10),
          });
        }}
      >
        Object Number Change
      </button>
    </div>
  );
}

export default Parent;
