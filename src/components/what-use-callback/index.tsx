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

  const firstCaptureFn = useCallback(() => {
    console.log(first);
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
