import React from "react";

import GrandsonComponent from "./grandson";
function ChildComponent(props: { state: number }) {
  const { state } = props;

  return (
    <div>
      <b>Noot Good Child</b>
      <GrandsonComponent state={state} />
    </div>
  );
}

export default ChildComponent;
