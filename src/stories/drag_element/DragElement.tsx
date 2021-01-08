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
  const DragShadowImg = useRef<HTMLImageElement>(null);

  return (
    <DragWrap
      ref={DragWrapRef}
      draggable={true}
      onDragStart={(e) => {
        startPointX.current = e.pageX - spaceX.current;
        startPointY.current = e.pageY - spaceY.current;
        if (DragShadowImg.current !== null) e.dataTransfer.setDragImage(DragShadowImg.current, 0, 0);
      }}
      onDrag={(e) => {
        let dragX, dragY;

        if (e.pageX < 0 || e.pageY < 0) {
          return;
        }
        console.log("x", e.pageX);
        if (DragWrapRef.current !== null) {
          console.log(DragWrapRef.current.clientWidth - startPointX.current);
        }

        spaceX.current = e.clientX < 0 ? previousSpaceX.current : e.clientX - startPointX.current;

        spaceY.current = e.clientY < 0 ? previousSpaceY.current : e.clientY - startPointY.current;

        previousSpaceX.current = spaceX.current;
        previousSpaceY.current = spaceY.current;

        if (DragWrapRef.current !== null) {
          const { style } = DragWrapRef.current;
          style.left = spaceX.current < 0 ? "0px" : spaceX.current + "px";
          style.top = spaceY.current < 0 ? "0px" : spaceY.current + "px";
        }
      }}
    >
      {/* Start Drag!! */}

      <img ref={DragShadowImg} style={{ display: "none" }} />
    </DragWrap>
  );
}

const DragWrap = styled.div`
  position: fixed;
  width: 200px;
  height: 100px;
  background-color: red;

  top: 0px;
  left: 0px;

  /* transform: translate(0, 0); */

  resize: both;
  overflow: auto;

  /* cursor: move; */

  &:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
  }
`;
