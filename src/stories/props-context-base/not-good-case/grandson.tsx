import React from "react";

type PropsType = {
  state: number;
};

function GrandsonComponent({ state }: PropsType) {
  /*
    약소하게 만들기 위해서 3뎁스까지 들어갔지만,
    만약 Props Drilling 이 더 많아진다면 더더욱 안좋은 케이스가 됨.
    왜냐하면 State를 Props로 자식에게 전파 할시,
    State값이 바뀌면 Props를 받은 모든 자식들이 re-rendering됨.
    Drilling이 많아질경우 Context 구조로 잡는것이 불필요한 re-rendering를 간단하게 막을 수 있음.
    물론, Pure Component를 쓴다면 막을 수 있찌만... 좀.. 
    애초에 쓰지도 않을 Props를 전파를 위해서만 쓴다면 코드의 길이가 길어지는것은 어쩔수 없는 사실.
  */
  return (
    <div>
      <b>Not Good Grandson</b>
      <p>Hello World {state} </p>
    </div>
  );
}

export default GrandsonComponent;
