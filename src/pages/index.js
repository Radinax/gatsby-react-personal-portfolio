import React from 'react'
import Helmet from 'react-helmet'
// Components
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
// Utils
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  .section {
    padding-top: 40px;
  }

  html{scroll-behavior:smooth}
`

class HomeIndex extends React.Component {
    render() {
        const siteTitle = "Adrian Beria Portfolio"
        const siteDescription = "This a portfolio of projects of the Engineer Adrian Beria, who's a full stack web developer"
        const siteKeywords = "Adrian,Beria,Portafolio,HTML,CSS,JavaScript,ReactJS,Web,Developer"
        const siteAuthor = "Adrian Beria"

        const Main = styled.div`
            margin: 0;
            padding: 0;
            border: 0;
        `

        return (
            <Main>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <meta name="keywords" content={siteKeywords} />
                        <meta name="author" content={siteAuthor} />
                </Helmet>
                <Navbar />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
                <GlobalStyle />
            </Main>
        );
    }
}

export default HomeIndex;