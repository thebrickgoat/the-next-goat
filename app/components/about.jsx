"use client";

import MyThreeComponent from "./physics/physics";

export default function About() {
  return (
    <section
      id="About"
      className="relative scroll-mt-16 py-16 px-8 text-white h-screen"
    >
      <h2 className="pb-4 relative font-bold text-6xl z-20">ABOUT ME</h2>
      <div className="absolute top-0 left-0 w-full h-full bg-white z-10">
        <MyThreeComponent />
      </div>
      <div className="flex relative pointer-events-none z-20">
        <div className="hidden md:block w-3/4"></div>
        <div className="w-full md:w-1/4 pb-8  ">
          <p>
            I am the kind of person that throws themselves into their work. So
            much so that they would rather spend alot of free time learning how
            to put together this 3d scene just to make that joke rather than,
            say do anything that might be considered productive.
          </p>
        </div>
      </div>
    </section>
  );
}
