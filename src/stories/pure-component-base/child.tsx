import React from "react";

function ChildComponent({ constantNumber, isBoolean, ifObject }: any) {
  console.log("ChildComponent Rendering");

  return (
    <div>
      <h4>Child Component</h4>
      <p>부모에서 넘겨준 값</p>
      <p>{constantNumber}</p>

      <p>{isBoolean ? "TRUE!" : "FALSE!"}</p>

      <p>{ifObject.test === 1 ? "TEST === 1" : "TEST === ??"}</p>
    </div>
  );
}

function diffCheck(prev: any, cur: any) {
  return prev.constantNumber === cur.constantNumber;
}

export default React.memo(ChildComponent, diffCheck);
