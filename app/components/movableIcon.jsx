import { useState } from "react";
import React from "react";

import Draggable from "react-draggable";
import Image from "next/image";

export default function Hero(props) {
  const [clicked, setClicked] = useState(false);

  const handleDoubleClick = () => {
    if (props.openPopup) {
      props.openPopup();
    } else {
      const element = document.getElementById(props.link);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setClicked(true);
  };
  const nodeRef = React.useRef(null);

  return (
    <Draggable nodeRef={nodeRef} bounds="parent">
      <div
        ref={nodeRef}
        style={{ top: `${props.top}%`, left: `${props.left}%` }}
        className="w-[100px] m-8 select-none cursor-pointer"
        onTouchStart={handleDoubleClick}
        onDoubleClick={handleDoubleClick}
      >
        <Image
          priority
          alt={props.name}
          src={props.img}
          width="64"
          height="64"
          className=" m-auto select-none pointer-events-none"
        />
        <div className="text-center mt-4 text-superWhite win98popupText">
          {props.name}
        </div>
      </div>
    </Draggable>
  );
}
