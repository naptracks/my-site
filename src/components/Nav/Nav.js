import Link from 'next/link'
import s from './Nav.module.scss';
import Logo from "../Logo";
import Button from "../Button/Button";
import {useLang, useLangUpdate} from "../../lib/LangContext";

const Nav = ({data, status, link}) => {

    const langUpdate = useLangUpdate()
    const lang = useLang();

    const btnStyles = {
        backgroundImage: lang === 'eng' ? 'url(eng.png)' : 'url(fr.png)'
    }

    return (
        <div className={s.nav}>
            {
                link ? <Link href={'/'}><a>
                    <Logo status={status}/>
                </a></Link> :
                    <Logo status={status}/>
            }
            <button style={btnStyles} className={s.flag} onClick={langUpdate}/>
            <div className={s.classicContainer}>
                <div className={s.flagIcon} style={btnStyles}/>
                <Button className={s.classic} onClick={langUpdate} cian>{data.button}</Button>
            </div>

        </div>
    )
}

export default Nav;



