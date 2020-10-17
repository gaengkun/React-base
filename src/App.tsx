import React from "react";
import "./App.css";

import {
  NotGoodCase,
  UseStateCase,
  UseReducerCase,
} from "./components/many-state-base";
import ParentComponent from "./components/pure-component-base/parent";
import UseCallbackBase from "./components/use-callback-base";
import PropsParent from "./components/props-context-base/props-case/props-parent";
import ContextParent from "./components/props-context-base/context-case";
import UseCallbackExpreince from "./components/what-use-callback";
import ManyInputBaseComponent from "./components/many-input-base";
import ManyInputInspectionComponent from "./components/many-input-base/many-input-inspection";
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
        <ContextParent />
      </div>
      <div className="tit"></div>
      <div>
        <h3>How to use UseCallback...</h3>
        <UseCallbackExpreince />
      </div>
      <div className="tit"></div>
      <div>
        <h3>Many Input Guide</h3>
        <ManyInputBaseComponent />
      </div>
      <div className="tit"></div>
      <div>
        <h3>Many Input Inspection Guide</h3>
        <ManyInputInspectionComponent />
      </div>
    </div>
  );
}

export default React.memo(App);
