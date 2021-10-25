import Head from 'next/head'
import Header from "../components/views/Header";
import Container from "../components/Container";
import Skills from "../components/views/Skills";
import Profile from "../components/views/Profile";
import Portfolio from "../components/views/Portfolio";
import Footer from "../components/views/Footer";
import {useLayoutEffect, useRef, useState} from "react";
import {svg} from "../data/svg";
import s from '../styles/Home.module.scss';
import KeyPoint from "../components/KeyPoint/KeyPoint";
import {getStatus} from "../lib/api";
import Surfer from "../components/Surfer";



export default function Home() {

    // console.log(isAvailable)

    //
    // const refMain = useRef();
    // const [anim, setAnim] = useState({})
    // useLayoutEffect(() => {
    //     window.addEventListener('scroll', onScroll)
    //     return () => window.removeEventListener('scroll', onScroll)
    // })
    // const onScroll = () => {

    //     const top = refMain.current.getBoundingClientRect().top
    //     const scrollRef = top + 3500;
    //     const width = (scrollRef) * -1.8
    //     if(top <= -3500 && top >= -4500) {
    //         setAnim({
    //             transform: `translateX(${width}px)`,
    //         })
    //     }
    // }


    return (
      <>
          <Head>
            <title>Cesar Martel</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap"
                            rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Ubuntu:wght@300;700&display=swap" rel="stylesheet"/>
          </Head>
          <main >
              <Container isDark={true}>
                  <Header/>
              </Container>
              <Container>
                  <Skills/>
              </Container>
              {/*<Surfer anim={anim}/>*/}
              <Container isDark={true}>
                  <Profile/>
              </Container>
              <Container>
                  <Portfolio/>
              </Container>
              <Container footer isDark={true}>
                  <Footer/>
              </Container>
          </main>

      </>

  )
}


//
// export async function getServerSideProps() {
//
//     const isAvailable = await getStatus()
//
//     return {
//         props: {isAvailable}
//     }
//
// }
