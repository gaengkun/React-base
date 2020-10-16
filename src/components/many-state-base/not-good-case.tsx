import React, { useState, useCallback, useEffect } from "react";

function NotGoodCase() {
  const [page, setPage] = useState(1);
  const [type, setType] = useState("type");

  useEffect(() => {
    const apiCall = async () => {
      //api 호출!!!
      await setTimeout(() => {
        console.log(page);
        console.log(type);
      }, 500);
    };

    apiCall();
  }, [page, type]);

  return (
    <div>
      <div>
        <div>
          <span>Type 변경 및 page 초기화</span>
          <button
            onClick={() => {
              setType("type" + Math.round(Math.random() * 10));
              setPage(1);
            }}
          >
            버튼!
          </button>
        </div>
        <div>
          <span> Page 변경 </span>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            page + 1
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotGoodCase;
