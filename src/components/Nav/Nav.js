import s from './Nav.module.scss';
import Logo from "../Logo";
import Button from "../Button/Button";

const Nav = () => {

    return (
        <div className={s.nav}>
            <Logo/>
            <Button cian>GO FRANÇAIS</Button>
        </div>
    )
}

export default Nav;
