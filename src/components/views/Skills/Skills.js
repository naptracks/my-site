import s from './Skills.module.scss'
import Subtitle from "../../Subtitle";
import Stack from "../../Stack";
import Button from "../../Button";

const Skills = ({data}) => {



    return (
        <div className={s.skills}>
            <Subtitle cursor p={data.p}>
                {data.subtitle}
            </Subtitle>
            <div className={s.btn}>
                <Button black>CONTACT</Button>
            </div>
            <Stack/>
        </div>
    )
}

export default Skills;