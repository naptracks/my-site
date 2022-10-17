import s from './Skills.module.scss'
import Subtitle from "../../../Subtitle";
import Stack from "../../../Stack";
import Button from "../../../Button";
import Link from "next/link";
import { cv } from '../../../../data/data';

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
                <Link href={cv}>
                    <a target={"_blank"} download><Button style={{marginLeft: "1rem"}}  withe>DOWNLOAD MY CV</Button> </a>
                </Link>
            </div>
            <Stack/>
        </div>
    )
}

export default Skills;