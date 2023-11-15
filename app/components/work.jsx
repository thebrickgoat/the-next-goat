"use client";

import { useState } from "react";
import Image from "next/image";

export default function Work({ work }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = work.map((card) => card.categories.toLowerCase()); 
  const uniqueCategories = [...new Set(categories.flat())];

  return (
    <section id="Work" className="scroll-mt-16">
      <div className="p-8">
        <h2 className="border-4 shadow-md border-black w-fit p-4 font-bold text-3xl md:text-6xl">
          PROJECTS AND WORKS
        </h2>
      </div>
      <div className="hidden bg-work-100 bg-work-200 bg-work-300 bg-work-400 bg-work-500 bg-work-600 bg-work-700 bg-work-800 bg-work-900 "></div>
      <div className="flex flex-wrap gap-4 p-8 pt-0">
        {uniqueCategories.map((button, i) => (
          <button
            key={button}
            className={`px-4 font-bold uppercase py-2 shadow-md ${
              selectedCategory === button
                ? `bg-work-${5 + i}00 text-white`
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedCategory(button)}
          >
            {button}
          </button>
        ))}
        <button
          className={`px-4 font-bold uppercase py-2 shadow-md ${
            selectedCategory === "All"
              ? "bg-work-800 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
      </div>
      <div
        className={`transition-color duration-500 ease-in-out ${
          selectedCategory === "All"
            ? "bg-work-800"
            : `bg-work-${5 + uniqueCategories.indexOf(selectedCategory)}00`
        }`}
      >
        <div className="mx-auto p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {work
            .filter(
              (card) =>
                selectedCategory === "All" ||
                card.categories.includes(selectedCategory)
            )
            .map((card) => (
              <div
                key={card.id}
                className="flex flex-col p-4 shadow-2xl bg-white transition-opacity duration-500 ease-in-out"
              >
                {card.image && (
                  <Image
                    src={`/work/${card.image}`}
                    alt={card.title}
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />
                )}
                <h2 className="text-xl text-gray-800 font-bold mt-4">
                  {card.title}
                </h2>
                <p className="mt-2 text-gray-500">{card.body}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.categories.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 transition-color duration-500 ease-in-out ${
                        selectedCategory === "All"
                          ? "bg-work-800"
                          : `bg-work-${
                              5 + uniqueCategories.indexOf(selectedCategory)
                            }00`
                      } text-white rounded-full text-xs text-gray-700`}
                    >
                      {tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
