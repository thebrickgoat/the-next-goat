import { useState } from 'react';
import Draggable from 'react-draggable';

export default function Hero(props) {
    const [clicked, setClicked] = useState(false);

    const handleDoubleClick = () => {
        if(props.openPopup){
            props.openPopup();
        }
        else{
            console.log(props.link);
            const element = document.getElementById(props.link);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
        setClicked(true);
    }

    return (
        <Draggable bounds="parent">
            <div style={{top:`${props.top}%`, left:`${props.left}%`}} className='absolute w-[100px] m-8  select-none cursor-pointer' onDoubleClick={handleDoubleClick}>
                <img src={props.img} className='select-none pointer-events-none w-full' />
                <div className='text-center text-white win98popupText'>
                    {props.name}
                </div>
            </div>
        </Draggable>
    )
};