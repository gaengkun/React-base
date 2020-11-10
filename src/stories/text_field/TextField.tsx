import React from "react";

import "./text_field.css";

export interface TextFieldProps {
  state: string | number;

  callback?(event: any): void;

  type: "text" | "number" | "phone" | "email";

  name?: string;

  label?: {
    text: string;
    position: "left" | "right" | "top" | "bottom";
  };

  placeHolder?: string;

  style?: any;
}

export function TextField(props: TextFieldProps) {
  const { state, callback, label, type, name, placeHolder, style } = props;

  return (
    <div className={`text ${label && label.position}`}>
      {label && (label.position === "top" || label.position === "left") && <label>{label.text}</label>}
      <input style={{ ...style }} type={`${type}`} value={state} onChange={callback} name={name} placeholder={placeHolder} />
      {label && (label.position === "bottom" || label.position === "right") && <label>{label.text}</label>}
    </div>
  );
}

TextField.defaultProps = {
  type: "text",
};
