"use client";

import React from "react";
import Horse from "./slap";
import Draggable from "react-draggable";
import Movable from "./movableIcon";
import Image from "next/image";

import { useState } from "react";

export default function Hero() {
  const nodeRef = React.useRef(null);
  const [popupOpen, setShowPopup] = useState(true);
  const [clippyOpen, setClippyOpen] = useState(true);
  const [clippyText, setClippyText] = useState(
    "Looks like  could use some help from a witty dev. Can I help you with that?"
  );
  const [clippyYesText, setClippyYesText] = useState("Yes");
  const [clippyNoText, setClippyNoText] = useState("No");

  const closePopup = () => {
    setShowPopup(false);
  };
  const openPopup = () => {
    setShowPopup(true);
  };
  const clippyClick = (answer) => {
    if (answer == "Yes" || answer == "oh okay") {
      const element = document.getElementById("Header");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      if (answer == "...No") {
        setClippyOpen(false);
        setTimeout(() => {
          setClippyOpen(true);
          setClippyText(
            "Looks like  could use some help from a witty dev. Can I help you with that?"
          );
          setClippyYesText("Yes");
          setClippyNoText("No");
        }, 3000);
      } else {
        setClippyText(
          "Are sure? I have been told they are also quite handsome."
        );
        setClippyYesText("oh okay");
        setClippyNoText("...No");
      }
    }
  };

  return (
    <section className="flex flex-col justify-space-around relative overflow-hidden z-40 bg-windows-700 h-screen">
      <Movable img="/icons/about.png" name="About Me" link="About" />
      <Movable
        img="/icons/skills.png"
        name="Skills and Talents"
        link="Skills"
      />
      <Movable img="/icons/work.png" name="Work/Portfolio" link="Work" />
      <Movable img="/icons/contact.png" name="Contact" link="Contact" />
      <Movable
        img="/horse.png"
        name="HorseSlap.exe"
        link="Horse"
        openPopup={openPopup}
      />
      {popupOpen && (
        <Draggable nodeRef={nodeRef} handle=".bar" bounds="parent">
          <div
            ref={nodeRef}
            className="absolute top-0 right-0 m-6 w-1/2 h-1/2 select-none"
          >
            <div className="win98popup shadow ">
              <div className="bar">
                <p>HorseSlap</p>
                <button
                  aria-label="Close Horse"
                  className="shadow"
                  onClick={closePopup}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8px"
                    height="7px"
                    viewBox="0 0 8 7"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                  >
                    <path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" />
                  </svg>
                </button>
              </div>
              <Horse />
            </div>
          </div>
        </Draggable>
      )}
      <div className="absolute bottom-14 right-3">
        {clippyOpen && (
          <div className="clippyBox">
            {clippyText}
            <div className="clippyBoxButtons flex justify-between mt-4 gap-2">
              <div
                className="clippyBoxButton"
                onClick={() => clippyClick(clippyYesText)}
              >
                {clippyYesText}
              </div>
              <div
                className="clippyBoxButton"
                onClick={() => clippyClick(clippyNoText)}
              >
                {clippyNoText}
              </div>
            </div>
          </div>
        )}
        <div className="clippy">
          <Image
            alt="a clippy joke that im sure you were alive long enough ago to understand"
            src="/clippy.gif"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="windows98startbar absolute bottom-0 left-0 w-screen">
        <button
          aria-label="Navigate to the best content your little browser has ever seen"
          className="startbutton flex items-center gap-2"
        >
          <Image
            alt="thebrickgoat logo"
            src="/logo.png"
            width={25}
            height={25}
          />
          The Brick Goat
        </button>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
