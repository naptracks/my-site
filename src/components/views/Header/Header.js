import s from './Header.module.scss';
import Nav from "../../Nav";
import Title from "../../Title";
import IDE from "../../IDE";
import Button from "../../Button";
import Socials from "../../Socials";

export const Header = () => {

    return (
        <>
            <Nav/>
            <Title p={'React JS, Next JS, GraphQL, REST API, Material UI'}>Web<span className={s.yellow}> Developer</span></Title>
            <Socials/>
           <div className={s.btn}>
               <Button white>CONTACT</Button>
           </div>
            <IDE blur />

        </>
    )
}

export default Header;

