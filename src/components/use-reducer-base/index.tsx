import React, { useReducer, useCallback } from "react";

// type StateType = {
//   first: number;
//   second: string;
//   third: boolean;
//   list: Array<any>;
// };

// type ActionType = {
//   type: "FIRST" | "SECOND" | "THIRD" | "LIST";
//   data?: any;
// };

const initialValue = {
  first: 1,
  second: "a",
  third: true,
  list: [],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "FIRST":
      return {
        ...state,
        first: action.data,
      };
    case "SECOND":
      return {
        ...state,
        second: action.data,
      };
    case "THIRD":
      return {
        ...state,
        third: !state.third,
      };
    case "LIST":
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};

function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const reducerTest = useCallback(() => {
    console.log(state);
  }, []);

  return (
    <div>
      <div>
        <h4>First: {state.first}</h4>
        <button
          onClick={() => {
            dispatch({ type: "FIRST", data: Math.round(Math.random() * 10) });
          }}
        >
          Dispatch by First
        </button>
      </div>
      <div>
        <h4>Second: {state.second}</h4>
        <button
          onClick={() => {
            dispatch({
              type: "SECOND",
              data: state.second === "a" ? "b" : "a",
            });
          }}
        >
          Dispatch by Second
        </button>
      </div>
      <div>
        <h4>Third: {state.third ? "TURE" : "FALSE"}</h4>
        <button
          onClick={() => {
            dispatch({ type: "THIRD" });
          }}
        >
          Dispatch by Third
        </button>
      </div>
      <button onClick={reducerTest}>ReducerTest</button>
    </div>
  );
}

export default UseReducerComponent;
