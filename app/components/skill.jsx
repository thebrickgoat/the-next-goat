import Image from 'next/image';

export default function Skills(props) {
    return (
        <div onClick={props.onClick} className={`flex flex-col align-center justify-center ${props.selected.title == props.title ? 'skills-selected': 'border-skills-900' } border-4 bg-skills-600`}>
           {props.image && <Image src={props.image} className="m-auto" width="164" height="164" alt={props.title}/>}
        </div>
    )
}