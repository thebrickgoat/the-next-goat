"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed shadow-md flex items-center bg-white text-black top-0 w-full py-4 px-8 flex justify-between flex-wrap gap-4 z-30">
      <span className="text-2xl font-bold">thebrickgoat</span>
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
        } md:flex md:items-center w-full md:w-auto`}
      >
        <a
          onClick={toggleMenu}
          href="#Skills"
          className="text-2xl hover:text-gray-500 block md:inline-block"
        >
          skills
        </a>
        <a
          onClick={toggleMenu}
          href="#Work"
          className="text-2xl hover:text-gray-500 block md:inline-block ml-4"
        >
          work
        </a>
        <a
          onClick={toggleMenu}
          href="#Contact"
          className="text-2xl hover:text-gray-500 block md:inline-block ml-4"
        >
          contact
        </a>
      </nav>
    </header>
  );
}
