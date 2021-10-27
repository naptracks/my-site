import s from './Profile.module.scss';
import Subtitle from "../../Subtitle";
import KeyPoint from "../../KeyPoint/KeyPoint";
import {svg} from '../../../data/svg';
import Button from "../../Button";
import Socials from "../../Socials";


const Profile = ({data}) => {


    return (
        <div>
            <Subtitle cursor white p={data.p} img>
                {data.subtitle}
            </Subtitle>
            <Socials/>
            <div className={s.btn}>
                <Button white>CONTACT</Button>
            </div>
            <div className={s.skillSet}>
                <div className={s.ability}>
                    <KeyPoint p={data.skillOne.p} white>{svg.iconSkill1}{data.skillOne.keyPoint}</KeyPoint>
                </div>
                <div className={s.ability}>
                    <KeyPoint p={data.skillTwo.p} white>{svg.iconSkill3} {data.skillTwo.keyPoint}</KeyPoint>
                </div>
                <div className={s.ability}>
                    <KeyPoint p={data.skillThree.p} white>{svg.iconSkill2} {data.skillThree.keyPoint}</KeyPoint>
                </div>
            </div>

        </div>
    )
}

export default Profile