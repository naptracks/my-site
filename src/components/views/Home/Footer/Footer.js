import s from './Footer.module.scss';
import Logo from "../../../Logo";
import Button from "../../../Button";
import Subtitle from "../../../Subtitle";
import Socials from "../../../Socials";
import Link from 'next/link';

const Footer = ({data, status, withoutImg}) => {

    const date = new Date();
    return (
        <div className={s.footer}>
            {!withoutImg && <img src={'avatar.png'} alt={'Cesar Martel'}/>}

            <Subtitle white>{data.subtitle}</Subtitle>
            <div className={s.content}>
                <Logo status={status}/>
                <div className={s.bar}/>
                {!withoutImg ? <Link href={'/contact'}>
                    <Button cian>CONTACT</Button>
                </Link> : <Link href={'/'}>
                    <Button cian>PROFILE</Button>
                </Link>}
            </div>
            <div className={s.bottom}>
                <p>Cesar Martel. ©{date.getFullYear()}</p>
                <Socials small/>
            </div>
        </div>
    )
}

export default Footer;