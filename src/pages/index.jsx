import Head from 'next/head'
import Header from "../components/views/Home/Header";
import Container from "../components/Container";
import Skills from "../components/views/Home/Skills";
import Profile from "../components/views/Home/Profile";
import Portfolio from "../components/views/Home/Portfolio";
import Footer from "../components/views/Home/Footer";
import {useLang} from "../lib/LangContext";
import {data, status} from '../data/data';
import {getProjectOne, getProjectTwo, getProjectThree, getProjectFour, getProjectFive, getStatus} from "../lib/api";
import {useProject} from "../hooks/useProject";


export default function Home({isAvailable, projectOne, projectTwo, projectThree, projectFour, projectFive}) {
    //useProject universalize project objects
    const pOne = useProject(projectOne)
    const pTwo = useProject(projectTwo)
    const pThree = useProject(projectThree)
    const pFour = useProject(projectFour)
    const pFive = useProject(projectFive)
    const projects = [pOne, pTwo, pThree, pFour, pFive]

    const lang = useLang(); //default: 'eng'
    const dataUpdated = lang === 'eng' ? data.home.eng : data.home.fr
    const statusUpdated = isAvailable ? status.available : status.busy


    return (
        <>
            <Head>
                <title>Cesar Martel</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <main>
                <Container isDark={true}>
                    <Header data={dataUpdated.header} status={lang === 'eng' ? statusUpdated.eng : statusUpdated.fr}/>
                </Container>
                <Container radius>
                    <Skills data={dataUpdated.skills}/>
                </Container>
                <Container isDark={true}>
                    <Profile data={dataUpdated.profile}/>
                </Container>
                <Container radius>
                    <Portfolio projects={projects} data={dataUpdated.portfolio} lang={lang}/>
                </Container>
                <Container footer isDark={true}>
                    <Footer data={dataUpdated.footer} status={lang === 'eng' ? statusUpdated.eng : statusUpdated.fr}/>
                </Container>
            </main>
        </>
    )
}

export async function getStaticProps() {


    const isAvailable = await getStatus()
    const projectOne = await getProjectOne()
    const projectTwo = await getProjectTwo()
    const projectThree = await getProjectThree()
    const projectFour = await getProjectFour()
    const projectFive = await getProjectFive()

    return {
        props: {
            isAvailable,
            projectOne,
            projectTwo,
            projectThree,
            projectFour,
            projectFive
        },
        revalidate: 1
    }
}

