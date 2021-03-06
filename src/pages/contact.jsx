import Container from "../components/Container";
import {getStatus, getLocation} from "../lib/api";
import {status, data} from "../data/data";
import {useLang} from "../lib/LangContext";
import Head from "next/head";

import Header from "../components/views/ContactPage/Header/Header";
import Footer from "../components/views/Home/Footer";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form";
import KeyPoint from "../components/KeyPoint/KeyPoint";
import s from "../components/views/ContactPage/Header/Header.module.scss";


const ContactPage = ({isAvailable, location}) => {

    const lang = useLang()
    const dataUpdated = lang === 'eng' ? data.contact.eng : data.contact.fr
    const statusUpdated = isAvailable ? status.available : status.busy
    const title = lang === 'eng' ? 'Get-In-Touch CesarMartel' : 'Contact Cesar Martel';


    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <main>
                <Container isDark navbar>
                    <Nav link status={lang === 'eng' ? statusUpdated.eng : statusUpdated.fr}
                         data={dataUpdated.header.nav}/>
                </Container>
                <Container fullRadius>
                    <Header location={location} data={dataUpdated.header}/>
                </Container>
                <Container isDark={true} footer>
                    {/*<div className={s.formContainer}>*/}
                    {/*    <KeyPoint white>{dataUpdated.footer.keyPoint}</KeyPoint>*/}
                    {/*    <Form data={dataUpdated.footer.form}/>*/}
                    {/*</div>*/}
                    <Footer withoutImg data={dataUpdated.footer}
                            status={lang === 'eng' ? statusUpdated.eng : statusUpdated.fr}/>
                </Container>
            </main>
        </>
    )
}

export default ContactPage;

export async function getStaticProps() {
    const isAvailable = await getStatus()
    const location = await getLocation()

    return {
        props: {
            isAvailable,
            location
        },
        revalidate: 1
    }
}