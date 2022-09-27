import Link from "next/link";
import s from './Profile.module.scss';
import Subtitle from "../../../Subtitle";
import KeyPoint from "../../../KeyPoint/KeyPoint";
import {svg} from '../../../../data/svg';
import Button from "../../../Button";
import Socials from "../../../Socials";


const Profile = ({data}) => {


    return (
        <div id={'profile'}>
            <Subtitle cursor white p={data.p} img>
                {data.subtitle}
            </Subtitle>
            <Socials/>
            <div className={s.btn}>
                <Link href={'/contact'}>
                    <a><Button white>CONTACT</Button> </a>
                </Link>
                {/* <Link href={"http://www.portfolio-headless.link/wp-content/uploads/2022/09/CesarMartel_FullStackDev_2022.pdf"}>
                    <a target={"_blank"} download><Button style={{marginLeft: "1rem"}}  withe>DOWNLOAD MY CV</Button> </a>
                </Link> */}

            </div>
            <div className={s.skillSet}>
                <div className={s.ability}>
                    <KeyPoint minHeight p={data.skillOne.p} white>{svg.iconSkill1}{data.skillOne.keyPoint}</KeyPoint>
                </div>
                <div className={s.ability}>
                    <KeyPoint minHeight p={data.skillTwo.p} white>{svg.iconSkill3} {data.skillTwo.keyPoint}</KeyPoint>
                </div>
                <div className={s.ability}>
                    <KeyPoint minHeight p={data.skillThree.p} white>{svg.iconSkill2} {data.skillThree.keyPoint}</KeyPoint>
                </div>
            </div>

        </div>
    )
}

export default Profile