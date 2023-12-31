"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Skill from "./skill";

export default function Skills({ skills }) {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (focusedIndex === null) {
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prevIndex) => {
            const newIndex = prevIndex - skills.length / 2;
            return newIndex < 0 ? prevIndex + skills.length / 2 : newIndex;
          });
        }
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (focusedIndex === null) {
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prevIndex) => {
            const newIndex = prevIndex + skills.length / 2;
            return newIndex > skills.length - 1
              ? prevIndex - skills.length / 2
              : newIndex;
          });
        }
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (focusedIndex === null) {
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? skills.length - 1 : newIndex;
          });
        }
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        if (focusedIndex === null) {
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prevIndex) => {
            const newIndex = prevIndex + 1;

            return newIndex > skills.length - 1 ? 0 : newIndex;
          });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusedIndex]);

  useEffect(() => {
    if (focusedIndex !== null) {
      setSelectedSkill(skills[focusedIndex]);
    }
  }, [focusedIndex]);

  return (
    <section
      id="Skills"
      className={`scroll-mt-16 p-8 text-white bg-skills-500 bg-skillLogo ${
        selectedSkill.title ? "border-about-500" : ""
      }`}
    >
      <h2 className="pb-4 border-4 border-skills-900 bg-skills-800/75 p-4 w-fit	font-bold text-3xl md:text-6xl">SKILLSET</h2>
      <div className="w-full">
      </div>
      <div className="md:flex items-stretch gap-8 pt-8">
        <div className="flex flex-col w-full h-full mb-8 md:mb-0 md:w-1/2 border-4 bg-skills-800/75 border-skills-900 p-8">
          <div className="relative min-h-[250px] mx-auto">
            <Image
              src={selectedSkill.image}
              alt={selectedSkill.title}
              width={150}
              height={100}
              className="bounce relative object-cover  z-20"
            />
            <Image
              src="/skills/arm.gif"
              alt={selectedSkill.title}
              width={150}
              height={100}
              className="absolute left-10 top-4 z-20"
            />
            <Image
              src="/skills/arm.gif"
              alt={selectedSkill.title}
              width={150}
              height={100}
              className="absolute -left-12 top-4 z-10"
            />
            <Image
              src="/skills/leg.gif"
              alt={selectedSkill.title}
              width={150}
              height={100}
              className="bounce absolute -left-4 top-24 z-10"
            />
            <Image
              src="/skills/leg.gif"
              alt={selectedSkill.title}
              width={150}
              height={100}
              className="bounce absolute left-8 top-24 z-10"
            />
            <div className="skillShadow bg-skills-900"></div>
          </div>
          <div className="mt-4">
            <h3 className="pb-4 font-bold text-2xl">{selectedSkill.title}</h3>
            <h3 className="pb-4">{selectedSkill.description}</h3>
            {selectedSkill.pips?.map((pip) => (
              <div key={pip.title} className="flex space-x-2 mb-8 items-center">
                <div>{pip.title}</div>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={pip.title + i}
                      className={`w-3 border-white border-2 h-3 ${
                        pip.filled < i + 1 ? "" : "bg-white"
                      } rounded-full`}
                    ></div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-col items-strech w-full md:w-1/2">
          <div className="pb-8 text-4xl">
            <Image
              src="/skills/choose.png"
              alt={selectedSkill.title}
              width={675}
              height={36}
              className="object-cover m-auto w-3/4"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                title={skill.title}
                description={skill.description}
                image={skill.image}
                onClick={() => setSelectedSkill(skill)}
                selected={selectedSkill}
                focused={focusedIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
