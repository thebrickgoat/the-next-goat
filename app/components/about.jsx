'use client'

import MyThreeComponent from './physics/physics';

export default function About() {
    return (
        <section id="Skills" className="relative scroll-mt-16 py-16 px-8 text-white min-h-[40vh]">
            <h2 className='pb-4 relative font-bold text-6xl z-20'>ABOUT ME</h2>
            <div className='absolute top-0 left-0 w-full h-full bg-white z-10'>
                <MyThreeComponent />
            </div>
            <div className="flex relative pointer-events-none z-20">

                <div className="hidden md:block w-3/4">
                </div>
                <div className="w-full md:w-1/4 pb-8  ">
                    <p>
                        I am the kind of person that throws themselves into there work. So much so that they would would spend alot of free time learning how to make this 3d scene just to make that joke rather than do anything that might be considered productive. 
                    </p>

                </div>
            </div>
        </section>
    )
};