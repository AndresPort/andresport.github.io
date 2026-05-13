import "./SkillIcon.css"

export default function SkillIcon({icon,name,level}){

    return(
        <div className="skillIconFrame" id={`skillIcon${name}`}>
            <img src={icon} alt="imgIcon" className="imgIcon" id={`imgIcon${name}`}/>
            <span className="iconName"id={`iconName${name}`} >{name} <br/> {level}</span>
        </div>
    )
}