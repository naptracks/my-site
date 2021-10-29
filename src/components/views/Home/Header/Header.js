import Link from 'next/link'
import s from './Header.module.scss';
import Nav from "../../../Nav";
import Title from "../../../Title";
import IDE from "../../../IDE";
import Button from "../../../Button";
import Socials from "../../../Socials";

export const Header = ({data, status}) => {

    return (
        <>
            <Nav data={data.nav} status={status}/>
            <Title p={data.title.p}>{data.title.h1}</Title>
            <Socials/>
            <div className={s.btn}>
                <Link href={'/contact'}>
                    <Button white>CONTACT</Button>
                </Link>
            </div>
            <IDE blur/>
        </>
    )
}

export default Header;

