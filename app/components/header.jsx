"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["About", "Skills", "Work", "Contact"];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="Header" className="sticky shadow-md flex items-center bg-white text-black top-0 w-full py-4 px-8 flex justify-between flex-wrap gap-4 z-30">
      <a href="/" className="text-2xl font-bold">thebrickgoat</a>
      <button
        className="text-2xl hover:text-gray-500 md:hidden"
        onClick={toggleMenu}
      >
        <Image
          alt="menu toggle"
          src="/logo.png"
          width="48"
          height="48"
          className={isMenuOpen ? "rotate-0" : "rotate-180"}
          onClick={toggleMenu}
          style={{ transition: "transform 0.3s ease" }}
        />
      </button>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex md:items-center w-full md:w-auto gap-4`}
      >
        {menuItems.map((item) => (
          <a
            key={item}
            onClick={toggleMenu}
            href={`#${item}`}
            className="text-2xl hover:text-gray-500 block md:inline-block"
            >
            {item.toLocaleLowerCase()}
          </a>
        ))
        }
      </nav>
    </div>
  );
}
