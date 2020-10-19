import { useReducer, useEffect, useCallback } from "react";

type StateType = {
  loading: boolean;
  error: boolean | Error;
  data: any;
};

type ActionType = {
  type: "LOADING" | "SUCCESS" | "CONCAT" | "ERROR";
  data?: any;
  error?: Error;
};

function reducer(state: StateType, action: ActionType): any {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: state.data || null,
        error: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: false,
      };
    case "CONCAT":
      return {
        loading: false,
        data:
          state.data instanceof Array
            ? state.data.concat(action.data)
            : action.data,
        error: false,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return new Error(`undefined ActionType : ${action.type}`);
  }
}

const initialData = {
  loading: false,
  data: null,
  error: false,
};

function useAsync(callback: any, deps: Array<any> = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, initialData);

  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING" });

    try {
      const data = await callback();
      if (state.data instanceof Array && state.data.length > 0) {
        dispatch({ type: "CONCAT", data: data });
      } else {
        dispatch({ type: "SUCCESS", data: data });
      }
    } catch (error) {
      dispatch({ type: "ERROR", error: error });
    }
  }, deps);

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
