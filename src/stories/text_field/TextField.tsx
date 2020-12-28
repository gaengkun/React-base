import React from "react";
import styled from "styled-components";

import "./text_field.css";

export interface TextFieldProps {
  state: string | number;

  callback?(event: any): void;

  type: "text" | "number" | "phone" | "email";

  name?: string;

  label?: {
    text: string;
    position: "LEFT" | "RIGHT" | "TOP" | "BOTTOM";
  };

  placeHolder?: string;

  wrapStyle?: any;
  inputStyle?: any;
  labelStyle?: any;
}

export function TextField(props: TextFieldProps) {
  const { state, callback, label, type, name, placeHolder, wrapStyle, inputStyle, labelStyle } = props;

  return (
    <TextFieldWrap className={`text ${label && label.position}`} style={{ ...wrapStyle }}>
      {label && (label.position === "TOP" || label.position === "LEFT") && <label style={{ ...labelStyle }}>{label.text}</label>}
      <input style={{ ...inputStyle }} type={`${type}`} value={state} onChange={callback} name={name} placeholder={placeHolder} />
      {label && (label.position === "BOTTOM" || label.position === "RIGHT") && (
        <label style={{ ...labelStyle }}>{label.text}</label>
      )}
    </TextFieldWrap>
  );
}

TextField.defaultProps = {
  type: "text",
};

const TextFieldWrap = styled.div`
  display: flex;
  align-items: center;

  &.top,
  &.bottom {
    flex-direction: column;
  }
`;
