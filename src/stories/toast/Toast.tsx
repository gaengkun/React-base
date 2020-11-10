import React, { useRef, useContext, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
//context

const lifeTime = 2500; // milisec

let msgArray: Array<string> = [];

let copyArray: Array<string> = [];

function nl2br(text: string) {
  return text.replace(/(?:\r\n|\r|\n)/g, "<br />");
}

export interface ToastPropsType {
  msg: string;
  setMsg: (data: string) => void;
}

export function ToastComponent(props: ToastPropsType) {
  const { msg, setMsg } = props;

  const [last, setLast] = useState<boolean>(false);

  useEffect(() => {
    if (msg && msg !== "") {
      msgArray.push(msg);
      copyArray.push(msg);
    }
  }, [msg]);

  const msgData = useMemo(() => {
    if (last === true) {
      return [];
    }
    if (msg && msg !== "") {
      if (copyArray.length > 0) {
        return [...msgArray, msg];
      } else {
        return [msg];
      }
    } else {
      return [];
    }
  }, [last, msg]);

  useEffect(() => {
    if (msgData.length > 0) {
      setTimeout(() => {
        copyArray.shift();
        if (copyArray.length === 0) {
          msgArray = [];
          setLast(true);
        }
      }, lifeTime);
    }
  }, [msgData]);

  useEffect(() => {
    if (last === true && msgData.length === 0) {
      setMsg("");
      setLast(false);
    }
  }, [last, msgData]);

  return (
    <>
      {
        msgData.length > 0 &&
          msgData.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <Toast>
                  <div dangerouslySetInnerHTML={{ __html: nl2br(v) }}></div>
                </Toast>
              </React.Fragment>
            );
          })
        // Memozized(msgData)
      }
    </>
  );
}

const Toast = styled.div`
  &.un {
    display: none;
  }

  position: fixed;
  bottom: 32px;
  left: 16px;
  opacity: 0;

  animation-name: toastFadeInOut;
  animation-duration: 2.4s;
  animation-timing-function: ease-in-out;

  width: calc(100% - 32px);
  height: auto;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  background-color: rgba(99, 43, 235, 0.9);
  color: #fff;
  border-radius: 12px;
  z-index: 120;

  @keyframes toastFadeInOut {
    0% {
      bottom: -50px;
    }
    20% {
      bottom: 24px;
      opacity: 1;
    }
    80% {
      bottom: 24px;
      opacity: 1;
    }
    100% {
      bottom: 50px;
      opacity: 0;
    }
  }
`;
