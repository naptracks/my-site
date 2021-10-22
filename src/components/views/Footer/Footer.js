import s from './Footer.module.scss';
import Logo from "../../Logo";
import Button from "../../Button";
import Subtitle from "../../Subtitle";
import Socials from "../../Socials";

const Footer = () => {

    const date = new Date();
    return (
        <div className={s.footer}>
            <img src={'avatar.png'} alt={'Cesar Martel'}/>
            <Subtitle white>let's work <span className={s.yellow}>together</span>.</Subtitle>
            <div className={s.content}>
                <Logo/>
                <div className={s.bar}/>
                <Button cian>CONTACT</Button>
            </div>
            <div className={s.bottom}>
                <p>Cesar Martel. ©{date.getFullYear()}</p>
                <Socials small/>
            </div>
        </div>
    )
}

export default Footer;