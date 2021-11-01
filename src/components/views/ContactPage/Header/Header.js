import s from './Header.module.scss';
import Socials from "../../../Socials/Socials";
import Subtitle from "../../../Subtitle/Subtitle";
import KeyPoint from "../../../KeyPoint/KeyPoint";
import {svg} from '../../../../data/svg'
import Button from "../../../Button";



const Header = ({data, location}) => {
    return (
       <>
            <Subtitle img  black p={data.subtitle.p}>{data.subtitle.h1}</Subtitle>
           <Socials orange/>
           <div className={s.btn}>
               <Button black><a href={'mailto:cesar.mrtl@icloud.com'}>{data.mailButton}</a></Button>
           </div>
           <div className={s.container}>
               <KeyPoint classname={s.infoPhoneCall}><a href={'tel://+33666034403'}>{svg.phone} +33 06 66 03 44 03 </a></KeyPoint>
                <KeyPoint classname={s.infoPhone}>{svg.phone} +33 06 66 03 44 03</KeyPoint>
                <KeyPoint classname={s.info}>{svg.mail} cesar.mrtl@icloud.com</KeyPoint>
                <KeyPoint classname={s.info}>{svg.position} {location}</KeyPoint>
            </div>
       </>
    )
}

export default Header;