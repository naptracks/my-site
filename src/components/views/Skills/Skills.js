import s from './Skills.module.scss'
import Subtitle from "../Subtitle";

const Skills = () => {

    const p = "Software engineering gives us the freedom to design the world we want to see. Working collaboratively with creative thinkers on innovative solutions that make the world better for people is how I thrive."


    return (
        <div className={s.skills}>
            <Subtitle cursor p={p}>
                My <span className={s.gray}>Stack</span>  as a Full-Stack <span className={s.gray}>Programmer</span>
            </Subtitle>

        </div>
    )
}

export default Skills;