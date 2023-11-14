"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Skill from "./skill";

export default function Skills() {
  const skills = [
    {
      title: "HTML/CSS/JS",
      description:
        "10 Years of experience building frontends with HTML, CSS, and JS. From the Dreamweaver days to the modern SPA frameworks, I have built simple landing pages, storefronts wiht stripe, and complex web apps. And hey, sometimes some good markup and a couple of readable styles are all you need to deliver a great experience.",
      image: "/skills/html.svg",
      pips: [{ title: "Expertise", filled: 5 }],
    },
    {
      title: "Node.js",
      description:
        "5 Years in Node.js trying to geuss what version the person that built this was using, and why it doesn't work on my machine. Yarn, Gulp, Babel, and other critical parts of the tool chain, as well as using express to build APIs. A couple times I even wrote some scripts to update large product dbs overnight while i slept and had panic dreams about the the server timing out and bricking it.",
      image: "/skills/node.svg",
      pips: [{ title: "Expertise", filled: 4 }],
    },
    {
      title: "React",
      description: "3 Years in React not understanding how refs actually work. React changed the game, and i have used it off and on ever since I realized polymer wasn't going anywhere and I didn't much care much for angular. I've leveraged some verson of React in everything from personal projects using expo to complex user state management.",
      image: "/skills/react.svg",
      pips: [{ title: "Expertise", filled: 3 }],
    },

    {
      title: "Shopify",
      description:
        "6 Years in Shopify complaining about the multipage page checkout and the lack of a proper CMS. The platform has come a long way, and I have built everything from simple themes to complex headless setups. I have also built a couple custom apps for the platform, and extensively used the storefront API.",
      image: "/skills/shopify.svg",
      pips: [{ title: "Expertise", filled: 5 }],
    },
    {
      title: "Vue.js",
      description: "3 Years of Vue.js nesting v-ifs and v-fors. I have used vue to build mobile apps leveraging capacitor, used vite to build static sites, and also used it to build a couple shopify themes.",
      image: "/skills/vue.svg",
      pips: [{ title: "Expertise", filled: 4 }],
    },
    {
      title: "Next.js",
      description: "2 Years of Next.js overengineering blogs and talking shit about gatsby. Next.js has always been the most interesting of the subframeworks, and with 14 its becoming even better and really pushing frontend control and preformance foward.",
      image: "/skills/next.svg",
      pips: [{ title: "Expertise", filled: 3 }],
    },
    {
      title: "Creative Cloud",
      description: "10 years of Adobe Products(Illustrator, Photoshop and AfterEffects) slowy dying of feature bloat and anti consumer practices",
      image: "/skills/cc.svg",
      pips: [{ title: "Expertise", filled: 5 }],
    },
    {
      title: "git/devops",
      description: "6 Years of DevOps and git collecting different dotfiles and logins for different services. At this point there are more version control services than fingers on my hands, and I have used all of them at some point or anything in a production capacity. I also know my way around the cli, though these days gitLens does alot of the gorund work for me.",
      image: "/skills/git.svg",
      pips: [{ title: "Expertise", filled: 4 }],
    },
  ];

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
            console.log(newIndex);
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
      className={`scroll-mt-16 py-16 px-8 text-white bg-skills-500 ${
        selectedSkill.title ? "border-about-500" : ""
      }`}
    >
      <h2 className="pb-4 font-bold text-6xl">SKILLSET</h2>
      <div className="w-full">
        <p>
          I am a skilled developer adept in React, Vue, and Shopify and
          seamlessly integrate these technologies to create top-notch user
          experiences. I excel in building dynamic interfaces with React,
          leverage Vue.js for modular components and efficient navigation, and
          harness Shopify&apos;s capabilities for robust e-commerce solutions.
          With a comprehensive skillset spanning coding, UX design, and
          deployment workflows, this developer crafts cohesive digital
          experiences that prioritize both functionality and aesthetics.
        </p>
      </div>
      <div className="md:flex items-center gap-16 pt-8">
        <div className="flex flex-col w-full md:w-1/3 border-4 bg-skills-600 border-skills-900 p-8">
          <div className="relative min-h-[250px] mx-auto">
            <Image
              src={selectedSkill.image.split(".", 1) + ".png"}
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
            <div className="skillShadow bg-skills-900" ></div>
          </div>
          <div className="mt-4">
            <h3 className="pb-4 font-bold text-4xl">{selectedSkill.title}</h3>
            <h3 className="pb-4 text-xl">{selectedSkill.description}</h3>
            {selectedSkill.pips?.map((pip, index) => (
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
        <div className="flex-col w-full md:w-2/3">
          <h2 className="pb-8 text-4xl">
            <Image
              src="/skills/choose.png"
              alt={selectedSkill.title}
              width={675}
              height={36}
              className="object-cover m-auto w-3/4"
            />
          </h2>
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
