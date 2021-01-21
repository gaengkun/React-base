/*
  State 여러개가 물려서 하나의 Api를 호출해야하는 경우를 나타낸 예제입니다.
  useState를 활용한 방법
*/

import React, { useState, useEffect, useCallback } from "react";

function UseStateCase() {
  const [formState, setFormState] = useState({
    page: 1,
    type: "type",
    list: [1, 2, 3, 4],
  });

  const apiCall = useCallback(() => {
    //api 호출!!!
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
              setFormState({
                ...formState,
                type: "type" + Math.round(Math.random() * 10),
                page: 1,
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
              setFormState({
                ...formState,
                page: formState.page + 1,
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

export default UseStateCase;
