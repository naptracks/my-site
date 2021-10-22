import s from './Header.module.scss';
import Nav from "../Nav";
import Title from "../Title";
import IDE from "../IDE";
import Button from "../Button/Button";

export const Header = () => {

    return (
        <>
            <Nav/>
            <Title p={'React JS, Next JS, GraphQL, REST API, Material UI'}>Web Developer</Title>
           <div className={s.btn}>
               <Button white>CONTACT</Button>
           </div>
            <IDE blur />

        </>
    )
}

export default Header;

