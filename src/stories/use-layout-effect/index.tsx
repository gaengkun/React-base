import React, { useEffect, useLayoutEffect, useState } from "react";

export default () => {
  const [number, setNumber] = useState<number>(1);
  const [layoutNumber, setLayoutNumber] = useState<number>(1);

  useEffect(() => {
    if (number === 0) {
      setNumber(10);
    }
  }, [number]);

  useLayoutEffect(() => {
    if (layoutNumber === 0) {
      setLayoutNumber(10);
    }
  }, [layoutNumber]);

  return (
    <div>
      <h1>Diff useEffect and useLayoutEffect</h1>

      <h3>Render Number {number}</h3>

      <h3>Render Layout Number {layoutNumber} </h3>
      <button
        onClick={() => {
          setNumber(0);
        }}
      >
        number Change
      </button>
      <button
        onClick={() => {
          setLayoutNumber(0);
        }}
      >
        layoutNumber Change
      </button>
    </div>
  );
};
