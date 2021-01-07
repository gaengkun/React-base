import React, { useRef } from "react";
import styled from "styled-components";

export function DragElementComponent() {
  const startPointX = useRef<any>(0);
  const startPointY = useRef<any>(0);
  const spaceX = useRef<any>(0);
  const spaceY = useRef<any>(0);

  const previousSpaceX = useRef<any>(0);
  const previousSpaceY = useRef<any>(0);

  const DragWrapRef = useRef<HTMLDivElement>(null);

  return (
    <DragWrap
      ref={DragWrapRef}
      // draggable={true}
      onDragStart={(e) => {
        console.log("start !!", e);
        startPointX.current = e.pageX - spaceX.current;
        startPointY.current = e.pageY - spaceY.current;
      }}
      onDrag={(e) => {
        console.log("start", startPointX, startPointY);

        spaceX.current =
          e.clientX < 0
            ? previousSpaceX.current
            : e.clientX - startPointX.current;

        spaceY.current =
          e.clientY < 0
            ? previousSpaceY.current
            : e.clientY - startPointY.current;

        console.log(e);

        if (DragWrapRef.current !== null) {
          const { style } = DragWrapRef.current;

          style.left = spaceX.current + "px";
          style.top = spaceY.current + "px";

          previousSpaceX.current = spaceX.current;
          previousSpaceY.current = spaceY.current;

          console.log(DragWrapRef.current.style.left);
        }
      }}
      onDragEnd={(e) => {
        console.log("x", spaceX);
        console.log("y", spaceY);
      }}
    >
      Start Drag!!
    </DragWrap>
  );
}

const DragWrap = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: red;

  top: 0px;
  left: 0px;

  cursor: move;
`;
