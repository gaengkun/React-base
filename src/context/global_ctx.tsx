import React, { createContext, useState } from "react";

type StateType = {
  alertLayer: AlertType;
  warningLayer: WarningType;
};

type ActionType = {
  setAlertLayer?(props: AlertType): void;
  setWarningLayer?(props: WarningType): void;
};

const initData: BundleType = {
  globalState: {
    alertLayer: {
      status: false,
    },
    warningLayer: {
      status: false,
    },
  },
  globalAction: {},
};

type BundleType = {
  globalState: StateType;
  globalAction: ActionType;
};
const GlobalContext = createContext<BundleType>(initData);

function GlobalProvider(props: { children: JSX.Element }) {
  const [alertLayer, setAlertLayer] = useState(initData.globalState.alertLayer);
  const [warningLayer, setWarningLayer] = useState(initData.globalState.warningLayer);

  const globalState: StateType = {
    alertLayer,
    warningLayer,
  };

  const globalAction: ActionType = {
    setAlertLayer,
    setWarningLayer,
  };

  const bundle: BundleType = {
    globalState,
    globalAction,
  };

  return <GlobalContext.Provider value={bundle}>{props.children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };
