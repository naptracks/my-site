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
import {useState, useLayoutEffect, useRef} from "react";
import Surfer from "../components/Surfer";


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

    //surfer
    // const refMain = useRef();
    // const [anim, setAnim] = useState({transform: 'translateX(-200px)'})
    //
    // useLayoutEffect(() => {
    //     window.addEventListener('scroll', onScroll)
    //     return () => window.removeEventListener('scroll', onScroll)
    // })
    // const onScroll = () => {
    //
    //     const top = refMain.current.getBoundingClientRect().top
    //     const scrollRef = top + 3610;
    //     const width = (scrollRef) * -2
    //
    //     if (top <= -3450 && top >= -4500) {
    //         setAnim({
    //             transform: `translateX(${width}px)`,
    //         })
    //     }
    // }


    return (
        <>
            <Head>
                <title>Cesar Martel Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <main>
                <Container isDark={true}>
                    <Header lang={lang} data={dataUpdated.header} status={lang === 'eng' ? statusUpdated.eng : statusUpdated.fr}/>
                </Container>
                <Container footer radius>
                    <Skills data={dataUpdated.skills}/>
                </Container>
                {/*<Surfer anim={anim}/>*/}
                <Container footer isDark={true}>
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

