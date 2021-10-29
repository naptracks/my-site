import Link from 'next/link'
import s from './Nav.module.scss';
import Logo from "../Logo";
import Button from "../Button/Button";
import {useLangUpdate} from "../../lib/LangContext";
import cn from "classnames";

const Nav = ({data, status}) => {

    const langUpdate = useLangUpdate()

    return (
        <div className={s.nav}>
            <Logo status={status}/>
            <Button onClick={langUpdate} cian>{data.button}</Button>
        </div>
    )
}

export default Nav;

export const NavContact = ({data, status, dark}) => {
    const langUpdate = useLangUpdate()
    const styles = cn({
        [s.nav]: true,
        [s.dark]: dark
    })

    return (
        <div className={styles}>
            <Link href={'/'}>
                <a><Logo status={status}/></a>
            </Link>
            <Button onClick={langUpdate} cian>{data.button}</Button>
        </div>
    )
}


