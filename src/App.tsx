import React from "react";
import "./App.css";

import { NotGoodCase, UseStateCase, UseReducerCase } from "./components/many-state-base";
import ParentComponent from "./components/pure-component-base/parent";
import UseCallbackBase from "./components/use-callback-base";
import PropsParent from "./components/props-context-base/props-case/props-parent";
function App() {
  return (
    <div className="App">
      <div id="StateCase">
        <h3>Many State Case...</h3>
        <div>
          <h4>NotGood Case</h4>
          <NotGoodCase />
        </div>
        <div>
          <h4>UseState Case</h4>
          <UseStateCase />
        </div>
        <div>
          <h4>UseReducer Case</h4>
          <UseReducerCase />
        </div>
      </div>
      <div className="tit"></div>
      <div>
        <h3>Pure Component Case...</h3>
        <div>
          <ParentComponent />
        </div>
      </div>
      <div className="tit"></div>
      <div>
        <h3>UseCallback How to Use...</h3>
        <UseCallbackBase />
      </div>
      <div className="tit"></div>
      <div>
        <h3>Props vs Context</h3>
        <PropsParent />
      </div>
    </div>
  );
}

export default App;
