import React, { useState, useCallback, useEffect } from "react";

function UseCallbackBase() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState("가");
  const [third, setThird] = useState(false);

  const initFn = useCallback(() => {
    return (
      <div>
        <h5>첫 렌더링에 메모리상에 올라가는 함수. 변화감지 불가능</h5>
        <p>first : {first}</p>
        <p>second : {second}</p>
        <p>third : {third === true ? "TRUE" : "FALSE"}</p>
      </div>
    );
  }, []);

  const detectionFn = useCallback(() => {
    //State 가 변한다면 ? 이 함수가 메모리에 등록됨.
    return (
      <div>
        <h5>State가 변경될때 마다 메모리상에 올라가는 함수. 변화감지 가능</h5>
        <p>first : {first}</p>
        <p>second : {second}</p>
        <p>third : {third === true ? "TRUE" : "FALSE"}</p>
      </div>
    );

    /*
      return (
      <div>
        <h5>첫 렌더링에 메모리상에 올라가는 함수. 변화감지 불가능</h5>
        <p>first : 0</p>
        <p>second : 가</p>
        <p>third : "FALSE"</p>
      </div>
    );

     first -> 2

     return (
      <div>
        <h5>첫 렌더링에 메모리상에 올라가는 함수. 변화감지 불가능</h5>
        <p>first : 2</p>
        <p>second : 가</p>
        <p>third : "FALSE"</p>
      </div>
    );
    */
  }, [first, second, third]);

  const b = useCallback(() => {
    console.log("hello world" + first);
  }, []);

  const b1 = () => {
    console.log("hello world" + first);
  };

  const c = useCallback(() => {
    console.log("hellow World" + first);
  }, [first]);

  useEffect(() => {
    // State가 바뀌는 순간 자동 실행됨.
    b();
    b1();
    c();
  }, [first, second, third]);
  return (
    <div>
      <button
        onClick={() => {
          setFirst(Math.round(Math.random() * 10));
        }}
      >
        First Change
      </button>
      <button
        onClick={() => {
          setSecond(second + Math.round(Math.random() * 10));
        }}
      >
        Second Change
      </button>
      <button
        onClick={() => {
          setThird(!third);
        }}
      >
        Third Change
      </button>
      <div>
        <h4>변화감지 안됨</h4>
        {initFn()}
      </div>

      <div>
        <h4>변화감지 됨</h4>
        {detectionFn()}
      </div>
    </div>
  );
}

export default UseCallbackBase;
