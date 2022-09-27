import Link from 'next/link'
import s from './Header.module.scss';
import Nav from "../../../Nav";
import Title from "../../../Title";
import IDE from "../../../IDE";
import Button from "../../../Button";
import Socials from "../../../Socials";

export const Header = ({data, status, lang}) => {

    return (
        <>
            <Nav data={data.nav} status={status}/>
            <Title p={data.title.p}>{data.title.h1}</Title>
            <Socials/>
            <div className={s.btn}>
                <Link href={'/contact'}>
                    <a><Button white>CONTACT</Button></a>
                </Link>
                {/* <Link href={"http://www.portfolio-headless.link/wp-content/uploads/2022/09/CesarMartel_FullStackDev_2022.pdf"}>
                    <a target={"_blank"} download><Button style={{marginLeft: "1rem"}}  withe>DOWNLOAD MY CV</Button> </a>
                </Link> */}
            </div>

                <IDE lang={lang} blur/>
        </>
    )
}

export default Header;

