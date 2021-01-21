/*
  State 여러개가 물려서 하나의 Api를 호출해야하는 경우를 나타낸 예제입니다.
  useReducer을 활용한 방법
*/

import React, { useEffect, useReducer, useCallback } from "react";

type StateType = {
  page: number;
  type: string;
  list: Array<any>;
};

type ActionType = {
  type: "TYPE" | "PAGE_UP" | "INIT";
  data?: any;
};

const initialValue = {
  page: 1,
  type: "type",
  list: [1, 2, 3, 4],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INIT":
      return { ...initialValue };

    case "PAGE_UP":
      return {
        ...state,
        page: state.page + 1,
      };

    case "TYPE":
      return {
        ...state,
        type: action.data,
        page: 1,
      };

    default:
      return state;
  }
};

function UseReducerCase() {
  const [formState, dispatchState] = useReducer(reducer, initialValue);

  const apiCall = useCallback(() => {
    //api 호출!!!
    console.log(formState);
  }, [formState]);

  useEffect(() => {
    apiCall();
  }, [formState]);

  return (
    <div>
      <div>
        <div>
          <span>Type 변경 및 page 초기화</span>
          <button
            onClick={() => {
              dispatchState({
                type: "INIT",
                data: "type" + Math.round(Math.random() * 10),
              });
            }}
          >
            버튼!
          </button>
        </div>
        <div>
          <span> Page 변경 </span>
          <button
            onClick={() => {
              dispatchState({
                type: "PAGE_UP",
              });
            }}
          >
            page + 1
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseReducerCase;
