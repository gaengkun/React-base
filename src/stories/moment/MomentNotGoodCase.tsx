import React from "react";

const formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

const MomentComponent = () => {
  function convertDateFormet(date: string | Date, format: string) {
    let pretreatmentDate: Date = new Date();

    if (date instanceof Date) {
      pretreatmentDate = date;
    } else {
      if (date.length === 8) {
        pretreatmentDate = new Date(
          [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2)].join("-")
        );
      } else if (date.includes("-")) {
        pretreatmentDate = new Date(date);
      } else if (date.includes(".")) {
        pretreatmentDate = new Date(date.replaceAll(".", "-"));
      } else {
        pretreatmentDate = new Date();
      }
    }

    const checkFormatObj: {
      [key: string]: string;
    } = {
      YYYY: pretreatmentDate.getFullYear().toString(),
      yyyy: pretreatmentDate.getFullYear().toString(),
      YY: (pretreatmentDate.getFullYear() % 100).toString(),
      yy: (pretreatmentDate.getFullYear() % 100).toString(),

      MM:
        pretreatmentDate.getMonth() + 1 < 10
          ? "0" + pretreatmentDate.getMonth() + 1
          : (pretreatmentDate.getMonth() + 1).toString(),
      M: (pretreatmentDate.getMonth() + 1).toString(),

      dd: prefendZeros(pretreatmentDate.getDate()).toString(),
      d: pretreatmentDate.getDate().toString(),
      DD: prefendZeros(pretreatmentDate.getDate()).toString(),
      D: pretreatmentDate.getDate().toString(),

      HH: prefendZeros(pretreatmentDate.getHours()),
      H: pretreatmentDate.getHours().toString(),

      hh: (() => {
        const hours = pretreatmentDate.getHours();

        if (hours > 12) {
          return prefendZeros(hours - 12);
        } else if (hours < 12) {
          return prefendZeros(hours);
        } else {
          return "12";
        }
      })(),

      h: (() => {
        const hours = pretreatmentDate.getHours();

        if (hours > 12) {
          return prefendZeros(hours - 12);
        } else if (hours < 12) {
          return prefendZeros(hours);
        } else {
          return "12";
        }
      })(),

      mm: prefendZeros(pretreatmentDate.getMinutes()),

      m: pretreatmentDate.getMinutes().toString(),

      ss: prefendZeros(pretreatmentDate.getSeconds()),

      s: pretreatmentDate.getSeconds().toString(),
    };

    const formatArray = format.match(formattingTokens);

    let returnValue = "";

    formatArray?.forEach((v) => {
      returnValue += checkFormatObj[v] ? checkFormatObj[v] : v;
    });

    return returnValue;
  }

  return (
    <div>
      <h1>{convertDateFormet("20201112", "YYYY-MM-DD HH:m:ss")}</h1>
    </div>
  );
};

export default MomentComponent;

function prefendZeros(props: number): string {
  const returnString = props < 10 ? "0" + props : props.toString();

  return returnString;
}

// props Date Item return Type Date.
function propsDatePretreatment(props: string | Date) {
  if (props instanceof Date) {
    return props;
  } else {
    if (props.length === 8) {
      return new Date(
        [props.substr(0, 4), props.substr(4, 2), props.substr(6, 2)].join("-")
      );
    } else if (props.includes("-")) {
      return new Date(props);
    } else if (props.includes(".")) {
      return new Date(props.replaceAll(".", "-"));
    } else {
      throw Error;
    }
  }
}

function hourTypeSetting(date: Date) {
  const hours = date.getHours();

  if (hours > 12) {
    return prefendZeros(hours - 12);
  } else if (hours < 12) {
    return prefendZeros(hours);
  } else {
    return "12";
  }
}
