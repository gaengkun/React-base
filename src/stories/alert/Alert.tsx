import React, { useContext, useCallback } from "react";

import styled, { css, keyframes } from "styled-components";

import { GlobalContext } from "../../context/global_ctx";

export default function AlertComponent() {
  const { globalState, globalAction } = useContext(GlobalContext);
  const { alertLayer } = globalState;

  const { content, renderType, status, title, ...another } = alertLayer;

  const createMarkup = useCallback(() => {
    if (alertLayer.content !== undefined && alertLayer.content !== "") {
      return { __html: alertLayer.content };
    }
  }, [alertLayer.content]);

  return (
    <Layer
      {...another}
      onClick={() => {
        globalAction.setAlertLayer!({
          status: false,
        });
      }}
    >
      <div
        className="wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {alertLayer.title && (
          <div className="title">
            <h4>{alertLayer.title}</h4>
          </div>
        )}
        {alertLayer.content && (
          <>
            {alertLayer.renderType === "HTML" ? (
              <div dangerouslySetInnerHTML={createMarkup()}></div>
            ) : (
              <p>{alertLayer.content}</p>
            )}
          </>
        )}

        <button
          className="common-btn"
          onClick={() => {
            globalAction.setAlertLayer!({
              status: false,
            });
          }}
        >
          {alertLayer.btn ? alertLayer.btn : "확인"}
        </button>
      </div>
    </Layer>
  );
}

const Layer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  ${(props: any) =>
    props.animation &&
    css`
      animation: ${BACK} ${props.animation.sec ? props.animation.sec + "s" : 0.4 + "s"};
    `}

  h4 {
    margin: 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #fff;
    background-color: #fff;
    border-radius: 20px;

    ${(props: any) => {
      return (
        props.animation &&
        css`
          animation: ${props.animation.from} ${props.animation.sec ? props.animation.sec + "s" : 0.4 + "s"};
        `
      );
    }}

    transform: translateY(-80%);

    .title {
      width: 100%;
      border-bottom: 1px solid #e0e0e0;
      text-align: center;
      h4 {
        margin: 16px 0;
      }
    }
  }

  .common-btn {
    width: 100%;
    padding: 12px 0;
    background-color: #632beb;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  @keyframes TOP {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }

    100% {
      transform: translateY(-80%);
      opacity: 1;
    }
  }

  @keyframes LEFT {
    0% {
      transform: translate(-100%, -80%);
      opacity: 0;
    }

    100% {
      transform: translate(0, -80%);
      opacity: 1;
    }
  }

  @keyframes RIGHT {
    0% {
      transform: translate(100%, -80%);
      opacity: 0;
    }

    100% {
      transform: translate(0, -80%);
      opacity: 1;
    }
  }

  @keyframes BOTTOM {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }

    100% {
      transform: translateY(-80%);
      opacity: 1;
    }
  }

  @keyframes CENTER {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const BACK = keyframes`
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: rgba(0, 0, 0, 0.7);
    }
  `;
