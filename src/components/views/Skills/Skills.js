import s from './Skills.module.scss'
import Subtitle from "../../Subtitle";
import Stack from "../../Stack";
import Button from "../../Button";

const Skills = () => {

    const p = "Software engineering gives us the freedom to design the world we want to see. Working collaboratively with creative thinkers on innovative solutions that make the world better for people is how I thrive."


    return (
        <div className={s.skills}>
            <Subtitle cursor p={p}>
                My <span className={s.orange}>Stack</span>  as a Full-Stack <span className={s.orange}>Programmer</span>
            </Subtitle>
            <div className={s.btn}>
                <Button black>CONTACT</Button>
            </div>
            <Stack/>
        </div>
    )
}

export default Skills;