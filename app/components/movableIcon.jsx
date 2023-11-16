import React from "react";

import Draggable from "react-draggable";
import Image from "next/image";

export default function Hero(props) {
  const nodeRef = React.useRef(null);
  const [lastClickTime, setLastClickTime] = React.useState(0);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClickTime < 500) {
      if (props.openPopup) {
        props.openPopup();
      } else {
        const element = document.getElementById(props.link);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setLastClickTime(now);
  };

  return (
    <Draggable nodeRef={nodeRef} bounds="parent">
      <div
        ref={nodeRef}
        style={{ top: `${props.top}%`, left: `${props.left}%` }}
        className="w-[100px] m-8 select-none cursor-pointer"
        onTouchStart={handleClick}
        onClick={handleClick}
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
