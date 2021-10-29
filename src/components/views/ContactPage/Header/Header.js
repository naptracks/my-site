import s from './Header.module.scss';
import Socials from "../../../Socials/Socials";
import Subtitle from "../../../Subtitle/Subtitle";
import KeyPoint from "../../../KeyPoint/KeyPoint";
import {svg} from '../../../../data/svg'
import Button from "../../../Button";



const Header = ({data, location}) => {
    return (
       <>
            <Subtitle  black p={data.subtitle.p}>{data.subtitle.h1}</Subtitle>
           <Socials orange/>
           <div className={s.btn}>
               <Button black><a href={'mailto:cesar.mrtl@icloud.com'}>{data.mailButton}</a></Button>
           </div>
           <div className={s.container}>
                <KeyPoint>{svg.phone} +33 06 66 03 44 03</KeyPoint>
                <KeyPoint>{svg.mail} cesar.mrtl@icloud.com</KeyPoint>
                <KeyPoint>{svg.position} {location}</KeyPoint>
            </div>
       </>
    )
}

export default Header;