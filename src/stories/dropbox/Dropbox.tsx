import React from "react";
import styled from "styled-components";

export type StateType = {
  isOpen: boolean;
  boxList: Array<{
    value: string | number;
    text: string;
  }>;
  selectIdx: number;
};

export type ActionType = {
  type: "open" | "select";
  open?: boolean;
  idx?: number;
};

export interface DropboxProps {
  /**
   * Reducer State
   */
  state: StateType;

  /**
   * Reducer Dispatch
   */
  dispatch: (data: ActionType) => void;

  /**
   * Dropbox Select & Option Width
   */
  width?: number;

  /**
   * Dropbox Select & Option Height
   */
  height?: number;

  /**
   * Dropbox Border Color
   */
  borderColor?: string;

  /**
   * Dropbox Select Font Color
   */
  fontColor?: string;

  /**
   * Dropbox Arrow Color
   */

  arrowColor?: string;
}

export function DropboxComponent(props: DropboxProps) {
  const { state, dispatch } = props;

  return (
    <SelectBox {...props}>
      <div
        className="selectModule"
        tabIndex={-1}
        onBlur={() => {
          dispatch({ type: "open", open: false });
        }}
      >
        <div
          className={`select ${state.isOpen ? "open" : "close"}`}
          onClick={(e) => {
            dispatch({ type: "open", open: !state.isOpen });
          }}
        >
          {state.boxList[state.selectIdx].text}
        </div>
        <div className={`optionBox ${state.isOpen ? "open" : "close"}`}>
          {state.boxList.map((item: any, index: number) => {
            return (
              <div
                className="option"
                key={index}
                onClick={(e) => {
                  dispatch({ type: "select", idx: index });
                }}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </SelectBox>
  );
}

const SelectBox = styled.div`
  width: ${(props: any) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props: any) => (props.height ? `${props.height}px` : "100%")};
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  .selectModule {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    z-index: 1;
    .select {
      display: flex;
      align-items: center;
      border: 1px solid ${(props: any) => (props.borderColor ? props.borderColor : "#632beb")};
      box-sizing: border-box;
      width: ${(props: DropboxProps) => (props.width ? `${props.width}px` : "100%")};
      height: ${(props: DropboxProps) => (props.height ? `${props.height}px` : "100%")};
      padding: 0px 12px;
      position: relative;
      color: ${(props: any) => (props.fontColor ? props.fontColor : "#632beb")};
      font-weight: 700;
      border-radius: ${(props: any) => (props.borderRadius ? props.borderRadius : "0px")};

      &:after {
        display: block;
        position: absolute;
        right: 10px;
        top: 40%;
        width: 12px;
        height: 12px;
        transform: translate(-50%, -40%) rotate(-135deg);
        border-left: 2px solid ${(props: any) => (props.arrowColor ? props.arrowColor : "#632beb")};
        border-top: 2px solid ${(props: any) => (props.arrowColor ? props.arrowColor : "#632beb")};
        content: "";
      }
      cursor: pointer;
      &.open {
        width: 100%;
        height: 100%;

        &:after {
          display: block;
          position: absolute;
          right: 10px;
          width: 12px;
          height: 12px;
          top: 60%;
          transform: translate(-50%, -60%) rotate(45deg);
          border-left: 2px solid ${(props: any) => (props.arrowColor ? props.arrowColor : "#632beb")};
          border-top: 2px solid ${(props: any) => (props.arrowColor ? props.arrowColor : "#632beb")};
          content: "";
        }
      }
    }

    .optionBox {
      overflow-y: auto;
      top: 100%;
      width: 100%;

      height: ${(props: any) => (props.optionCoutNumber ? props.optionCoutNumber : "300")}%;

      display: flex;
      position: absolute;
      background: #fff;
      margin-top: -1px;
      display: none;
      border: 1px solid ${(props: any) => (props.selectBordercolor ? props.selectBordercolor : "#8555f6")};
      box-sizing: border-box;

      &.open {
        display: block;
      }

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #e5e5e5;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #acacac;
      }
    }
    .option {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      padding: 0px 20px;
      font-size: 16px;
      box-sizing: border-box;
      color: #757575;
      cursor: pointer;

      &:hover {
        background: #f8f8f8;
        color: ${(props: any) => (props.hoverFontcolor ? props.hoverFontcolor : "#632beb")};
      }

      &:active {
        background: #eee;
        color: #757575;
      }

      &.on {
        display: block;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .selBox {
    display: flex;

    & > div {
      margin-right: 30px;
    }
  }
`;
