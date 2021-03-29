import React, { useContext, useCallback, useState, useEffect } from "react";

import { Meta } from "@storybook/react/types-6-0";

import { GlobalContext, GlobalProvider } from "../../context/global_ctx";

import Warning from "./Warning";

export default {
  title: "Alert/Warning",
  component: Warning,
  decorators: [
    (Story: any) => {
      return (
        <GlobalProvider>
          <Story />
        </GlobalProvider>
      );
    },
  ],
  argTypes: {},
} as Meta;

export const Default = () => {
  const { globalState, globalAction } = useContext(GlobalContext);
  const setWarning = useCallback(() => {
    globalAction.setWarningLayer &&
      globalAction.setWarningLayer({
        status: true,
        content: "Hello World This is New World!" + Math.floor(Math.random() * 10),
        backgroundColor: "#fff7df",
        color: "#d5b046",
      });
  }, [globalAction]);

  return (
    <>
      <div>
        <button onClick={setWarning}>Default Warning</button>
      </div>
      <Warning />
    </>
  );
};

export const SelectWarning = () => {
  const { globalAction } = useContext(GlobalContext);

  const [selectTimeArray, setSelectTimeArray] = useState<Array<Array<number>>>([[0, 0], [0, 0], [0, 0]]);

  React.useEffect(() => {
    console.log(selectTimeArray);

  }, [selectTimeArray]);

  const inspection = (cIdx: number, value: number): boolean => {
    let test = true;

    selectTimeArray.forEach((v, i) => {
      if(cIdx !== i) {
        if(v[1] !== 0) {
          for(var start = v[0]; start <= v[1]; start++) {
            if(start === value) {
              test = false;
            } else {
              console.log("허허")
            }
          }
        }
      }
    })

    return test;
  }

  const MakeSeleceter = (props: {idx: number}) => {
    const { idx } = props;
    return (
      <div>
        <p>Set {idx + 1}</p>
        <select onChange={(e) => {
          const tempArray = [...selectTimeArray];
          const value = parseInt(e.target.value);
          const result = inspection(idx, value);
          if(result === true) {
            tempArray[idx][0] = value;
            setSelectTimeArray(tempArray);
          } else {
            tempArray[idx][0] = 0;
            setSelectTimeArray(tempArray);
            globalAction.setWarningLayer &&
              globalAction.setWarningLayer({
                status: true,
                content: `${idx+1}번쨰 startTime ${timeArray[value]}는 선택할 수 없다구!`,
                backgroundColor: "#fff7df",
                color: "#d5b046",
              });
          }
        }}>
          {timeArray.map((v, i) => {
            return (
              <option key={i} value={i} selected={selectTimeArray[idx][0] === i} >{v}</option>
            )
          })}
        </select>
        <span> ~ </span> 
        <select onChange={(e) => {
          const tempArray = [...selectTimeArray];
          const value = parseInt(e.target.value);
          
          if(tempArray[idx][0] >= value) {
            tempArray[idx][1] = 0;
              setSelectTimeArray(tempArray);
              globalAction.setWarningLayer &&
                globalAction.setWarningLayer({
                  status: true,
                  content: `${idx+1}번쨰 endTime ${timeArray[value]}는 선택할 수 없다구!!!@`,
                  backgroundColor: "#fff7df",
                  color: "#d5b046",
                });
          } else {
            const result = inspection(idx, value);
            if(result === true) {
              tempArray[idx][1] = parseInt(e.target.value);
              setSelectTimeArray(tempArray);
            } else {
              tempArray[idx][1] = 0;
              setSelectTimeArray(tempArray);
              globalAction.setWarningLayer &&
                globalAction.setWarningLayer({
                  status: true,
                  content: `${idx+1}번쨰 endTime ${timeArray[value]}는 선택할 수 없다구!`,
                  backgroundColor: "#fff7df",
                  color: "#d5b046",
                });
            }
          }
          
          
        }}>
          {timeArray.map((v, i) => {
            return (
              <option key={i} value={i} selected={selectTimeArray[idx][1] === i}>{v}</option>
            )
          })}
        </select>
      </div>
    )
  }

  return (
    <>
      {
        new Array(3).fill(0).map((v, i) => {
          return (
            <React.Fragment key={i} >
              <MakeSeleceter idx={i}/>
            </React.Fragment>
          )
        })
      }
      <Warning />
    </>
  )
}


const timeArray = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "24:00",
]
