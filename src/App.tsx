import React from "react";
import "./App.css";

import {
  NotGoodCase,
  UseStateCase,
  UseReducerCase,
} from "./stories/many-state-base";
import ParentComponent from "./stories/pure-component-base/parent";
import UseCallbackBase from "./stories/use-callback-base";
import PropsParent from "./stories/props-context-base/props-case/props-parent";
import ContextParent from "./stories/props-context-base/context-case";
import UseCallbackExpreince from "./stories/what-use-callback";
import UseReducerComponent from "./stories/use-reducer-base";
import ManyInputBaseComponent from "./stories/many-input-base";
import ManyInputInspectionComponent from "./stories/many-input-base/many-input-inspection";

import CustomHookTestComponent from "./stories/custom-hook-base";

import ScrollComponent from "./stories/common-component/scroll-component";
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
        <h3>How to use UseReducer...</h3>
        <UseReducerComponent />
      </div>
      <div className="tit"></div>
      <div>
        <h3>Many Input Guide</h3>
        <ManyInputBaseComponent />
      </div>
      <div>
        <h3>Many Input Inspection Guide</h3>
        <ManyInputInspectionComponent />
      </div>
      <div className="tit"></div>
      <div>
        <h3>Custom Hook Guide</h3>
        <CustomHookTestComponent />
      </div>
      <div className="tit">
        <h3>Common Scroll Guide</h3>
        <ScrollComponent />
      </div>
    </div>
  );
}

export default React.memo(App);
