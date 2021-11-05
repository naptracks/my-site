import s from './Skills.module.scss'
import Subtitle from "../../../Subtitle";
import Stack from "../../../Stack";
import Button from "../../../Button";
import Link from "next/link";

const Skills = ({data}) => {

    return (
        <div id={'skills'} className={s.skills}>
            <Subtitle cursor p={data.p}>
                {data.subtitle}
            </Subtitle>
            <div className={s.btn}>
                <Link href={'/contact'}>
                    <a> <Button black>CONTACT</Button></a>
                </Link>
            </div>
            <Stack/>
        </div>
    )
}

export default Skills;