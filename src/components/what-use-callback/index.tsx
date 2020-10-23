import React, { useCallback, useState, useMemo } from "react";

function MemozeidCheck(a: number, b: number) {
  return a * b;
}

function UseCallbackExperience() {
  console.log("rendering");

  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState("a");

  const [memo1, setMemo1] = useState(1);
  const [memo2, setMemo2] = useState(2);

  const memos = useMemo(() => MemozeidCheck(memo1, memo2), []);
  const memosCapture = useMemo(() => MemozeidCheck(memo1, memo2), [
    memo1,
    memo2,
  ]);

  const normalFn = () => {
    console.log(first);
  };

  const specialFn = useCallback(() => {
    console.log(first);
  }, []);

  const callbackInCallback = useCallback(() => {
    /* 
      useCallback 으로 감싼 함수에서 useCallback 으로 감싼 또 다른 함수를 호출하게되면
      호출자가 Capture한 State만이 피호출자에서 변경을 감지할 수 있음.
    */
    console.log(second);
  }, [first, second]);

  const firstCaptureFn = useCallback(() => {
    console.log(first);

    callbackInCallback();
  }, [first]);

  const memosCaptureFn = useCallback(() => {
    console.log("memo1", memo1);
    console.log("memo2", memo2);
    console.log("Not Capture", memos);
    console.log("Capture", memosCapture);
  }, [memos, memosCapture]);

  return (
    <div>
      <div>
        <p>Hello World</p>
        <div>
          <p>First : {first}</p>
          <p>Second : {second}</p>
        </div>
        <button
          onClick={() => {
            setFirst(Math.round(Math.random() * 10));
          }}
        >
          first Change
        </button>
        <button
          onClick={() => {
            setSecond(second === "a" ? "b" : "a");
          }}
        >
          second Change
        </button>
        <div>
          <button
            onClick={() => {
              setMemo1(Math.round(Math.random() * 10));
            }}
          >
            memo1 Change
          </button>
          <button
            onClick={() => {
              setMemo2(Math.round(Math.random() * 10));
            }}
          >
            memo2 Change
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              normalFn();
            }}
          >
            Call Normal Function
          </button>

          <button
            onClick={() => {
              specialFn();
            }}
          >
            Call First Time Capture Function
          </button>

          <button
            onClick={() => {
              firstCaptureFn();
            }}
          >
            Call if first State Change Capture Function
          </button>

          <button
            onClick={() => {
              memosCaptureFn();
            }}
          >
            Call Memos Capture Function
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(UseCallbackExperience);
