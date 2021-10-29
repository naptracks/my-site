import s from './Skills.module.scss'
import Subtitle from "../../../Subtitle";
import Stack from "../../../Stack";
import Button from "../../../Button";
import Link from "next/link";

const Skills = ({data}) => {

    return (
        <div className={s.skills}>
            <Subtitle cursor p={data.p}>
                {data.subtitle}
            </Subtitle>
            <div className={s.btn}>
                <Link href={'/contact'}>
                    <Button black>CONTACT</Button>
                </Link>
            </div>
            <Stack/>
        </div>
    )
}

export default Skills;