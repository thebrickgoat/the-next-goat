'use client'
import Horse from './slap';
import Draggable from 'react-draggable';
import Movable from './movableIcon';

import { useState } from 'react';

export default function Hero() {
    const [popupOpen, setShowPopup] = useState();
    const closePopup = () => {
        setShowPopup(false);
    }
    const openPopup = () => {
        setShowPopup(true);
    }

    return (
        <section className="relative overflow-hidden">
            <Movable top="0" img="/icons/contact.png" name="Contact" link="Contact" />
            <Movable top="20" img="/icons/skills.png" name="Skills and Talents" link="Skills" />
            <Movable top="45" img="/icons/work.jpg" name="Work/Portfolio" link="Work" />
            <Movable left="10" top="2" img="/horse.png" name="HorseSlap.exe" link="Horse" openPopup={openPopup} />

            {popupOpen && (
                <Draggable handle=".bar" bounds="parent">
                    <div className="absolute top-0 right-0 m-6 w-1/3 h-1/3 select-none	">
                        <div className="win98popup shadow ">
                            <div className="bar">
                                <p>HorseSlap</p>
                                <button className="shadow" onClick={closePopup}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" /></svg>
                                </button>
                            </div>
                            <Horse />
                        </div>
                    </div>
                </Draggable>
            )}

            <div className="flex flex-col justify-end items-start h-screen bg-windows-700 p-8 text-white">
                <h1 className="font-baskerville font-bold text-8xl mb-4">thebrickgoat</h1>
                <p className="text-2xl mb-8">im just out here trusting god 🙏</p>
            </div>
        </section>
    )
};