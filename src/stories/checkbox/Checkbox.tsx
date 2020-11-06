import React from "react";
import styled from "styled-components";
import "./checkbox.css";

export interface CheckboxProps {
  /**
   * Is Checked State
   */
  status: boolean;
  /**
   * onChange handler
   */
  callback?: () => void;
  /**
   * Checkbox width and height
   */
  size?: number;
  /**
   * Checkbox On Checked Background Color
   */
  backgroundColor?: string;

  /**
   * Checkbox Label type Obejct
   * text: Label Text
   * id: Label HtmlFor
   * position: Label position
   */
  label?: {
    text: string;
    id: string;
    position: "right" | "left";
  };
}

export function CheckboxComponent(props: CheckboxProps) {
  const { status, callback, size, backgroundColor, label } = props;

  return (
    <>
      {label && label.position === "left" && <label htmlFor={label.id}>{label.text}</label>}
      <ChechboxWrap
        id={label && label.id}
        status={status}
        type="checkbox"
        className={`${status === true && "on"}`}
        onChange={callback}
        size={size}
        backgroundColor={backgroundColor}
      />
      {label && label.position === "right" && <label htmlFor={label.id}>{label.text}</label>}
    </>
  );
}

CheckboxComponent.defaultProps = {
  status: false,
  size: 24,
  backgroundColor: "#632beb",
};

const ChechboxWrap = styled.input`
  width: ${(props: CheckboxProps) => (props.size ? `${props.size}px` : "24px")};
  height: ${(props: CheckboxProps) => (props.size ? `${props.size}px` : "24px")};
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    width: 13%;
    height: 50%;
    top: 25%;
    left: 56%;
    background-color: #e0e0e0;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    border-radius: 10px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 13%;
    background-color: #e0e0e0;
    top: 50%;
    left: 17%;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    border-radius: 10px;
  }

  &.on {
    border-color: #fff;
    background-color: ${(props: CheckboxProps) => (props.backgroundColor ? `${props.backgroundColor}` : "#632beb")};
    transition: 0.2s all ease 0s;

    &::before,
    &::after {
      background-color: #fff;
    }
  }
`;
