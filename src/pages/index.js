import Head from 'next/head'

import Header from "../components/views/Header";
import Container from "../components/Container";
import Skills from "../components/views/Skills";
import Profile from "../components/views/Profile";
import Portfolio from "../components/views/Portfolio";
import Footer from "../components/views/Footer";


export default function Home() {


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

          <Container isDark={true}>
              <Header/>
          </Container>
          <Container>
              <Skills/>
          </Container>
          <Container isDark={true}>
              <Profile/>
          </Container>
          <Container>
            <Portfolio/>
          </Container>
          <Container footer isDark={true}>
              <Footer/>
          </Container>
      </>

  )
}
