import s from './Nav.module.scss';
import Logo from "../Logo";
import Button from "../Button/Button";
import {useLangUpdate} from "../../lib/LangContext";

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
