
export default function Skills(props) {
    return (
        <div onClick={props.onClick} className={`flex flex-col align-center justify-center ${props.selected.title == props.title ? 'skills-selected': 'border-skills-900' } border-4 bg-skills-600`}>
            <img src={props.image}/>
        </div>
    )
}