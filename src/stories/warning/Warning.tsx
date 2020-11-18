import React, { useContext, useCallback, useState, useEffect, useMemo } from "react";

import styled from "styled-components";

import { GlobalContext } from "../../context/global_ctx";

let msgArray: Array<string> = [];
let copyArray: Array<string> = [];

export default function WarningComponent() {
  const { globalState, globalAction } = useContext(GlobalContext);
  const { warningLayer } = globalState;

  const { status, renderType, content, animation, ...style } = warningLayer;

  const [last, setLast] = useState<boolean>(false);

  useEffect(() => {
    if (content && content !== "") {
      msgArray.push(content);
      copyArray.push(content);
    }
  }, [content]);

  const contentData = useMemo(() => {
    if (last === true) {
      return [];
    }

    if (content && content !== "") {
      if (copyArray.length > 0) {
        return [...msgArray, content];
      } else {
        return [content];
      }
    } else {
      return [];
    }
  }, [content, last]);

  useEffect(() => {
    if (contentData.length > 0) {
      setTimeout(() => {
        copyArray.shift();
        if (copyArray.length === 0) {
          msgArray = [];
          setLast(true);
        }
      }, 4100);
    }
  }, [contentData]);

  useEffect(() => {
    if (last === true && contentData.length === 0) {
      globalAction.setWarningLayer &&
        globalAction.setWarningLayer({
          status: false,
          content: "",
        });
      setLast(false);
    }
  }, [last, contentData, setLast, globalAction]);

  const createMarkup = useCallback(() => {
    if (content !== undefined && content !== "") {
      return { __html: content };
    }
  }, [content]);

  return (
    <Layer>
      {contentData.length > 0 &&
        contentData.map((v, i) => {
          return (
            <div className="wrapper" key={i} style={{ ...style }}>
              {content && <>{renderType === "HTML" ? <div dangerouslySetInnerHTML={createMarkup()}></div> : <p>{v}</p>}</>}
            </div>
          );
        })}
    </Layer>
  );
}

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 10px;
  right: 20px;
  width: max-content;

  .wrapper {
    background-color: #fff7df;
    color: #f5b046;
    animation: RIGHT 4s;
    transform: translate(80%, 80%);
    opacity: 0;
  }

  @keyframes RIGHT {
    0% {
      transform: translate(100%, 0%);
      opacity: 0;
    }

    50% {
      transform: translate(0%, 0%);
      opacity: 1;
    }

    100% {
      display: none;
      transform: translate(100%, 0%);
      opacity: 0;
    }
  }
`;
