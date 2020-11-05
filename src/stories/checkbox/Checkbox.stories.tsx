import React, { useState, useCallback, useMemo } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { CheckboxComponent, CheckboxProps } from "./Checkbox";

import "./checkbox.css";

export default {
  title: "Ui/Checkbox",
  component: CheckboxComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <CheckboxComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: false,
  callback: function () {
    console.log("callback arguments 에 Onchange Event 를 만들어서 넣어주세요.");
  },
};

Default.args = {
  status: false,
  label: {
    text: "text",
    id: "checkbox",
    position: "left",
  },
  size: 24,
};

export const Basic = () => {
  const [status, setStatus] = useState<boolean>(false);

  const changeCheckStatus = useCallback(() => {
    const checked = status === true ? false : true;
    setStatus(checked);
  }, [status]);

  return <CheckboxComponent status={status} callback={changeCheckStatus} />;
};

export const MultiCheckbox = () => {
  type ExampleType = {
    id: number;
    checked: boolean;
    text: string;
  };
  const [checkArray, setCheckArray] = useState<Array<ExampleType>>([
    { id: 1, checked: false, text: "one" },
    { id: 2, checked: false, text: "two" },
    { id: 3, checked: false, text: "three" },
    { id: 4, checked: false, text: "four" },
  ]);

  const allChecked = useMemo(() => {
    return checkArray.every((v) => v.checked);
  }, [checkArray]);

  const changeAllCheckStatus = useCallback(() => {
    if (allChecked === true) {
      setCheckArray(
        checkArray.map((v) => {
          return { ...v, checked: false };
        })
      );
    } else {
      setCheckArray(
        checkArray.map((v) => {
          return { ...v, checked: true };
        })
      );
    }
  }, [allChecked, checkArray]);

  const changeCheckStatus = useCallback(
    (id: number) => {
      setCheckArray(
        checkArray.map((v) => {
          if (v.id === id) {
            v.checked = !v.checked;
          }
          return v;
        })
      );
    },
    [checkArray]
  );

  return (
    <div>
      <div className="allChecked">
        <CheckboxComponent
          status={allChecked}
          callback={changeAllCheckStatus}
          label={{ id: "allcheckebox", text: "All Check", position: "right" }}
        />
      </div>

      {checkArray.map((v, i) => {
        return (
          <div key={i} className="checkboxs">
            <CheckboxComponent
              status={v.checked}
              callback={() => changeCheckStatus(v.id)}
              label={{ id: `checkbox-${v.id}`, text: v.text, position: "right" }}
            />
            {/* {v.text} */}
          </div>
        );
      })}
    </div>
  );
};
