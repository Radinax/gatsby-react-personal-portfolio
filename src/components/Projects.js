import React from 'react'
import styled from "styled-components";
import Project from "./Project"
// Project Images
import Domoviz from '../assets/images/portfolio project images/domoviz.png';
import AlliedHospital from '../assets/images/portfolio project images/alliedhospital.png';
import EmeraldAventura from '../assets/images/portfolio project images/emeraldaventura.png';

class Projects extends React.Component {
    render() {

        const Section = styled.div`
            background-color: #292C33;
        `;

        const Container = styled.section`
            padding: 30px;
        `;

        const ProjectsTitle = styled.h1`
            color: #f2f2f2;
            text-align: center;
            padding: 20px;
        `;

        const ProjectSection = styled.div`
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
        `;

        const ProjectParagraph = styled.p`
            color: #f2f2f2; 
            text-align: center;
            font-size: 1.1rem;
            margin: 0 auto;
            padding-top: 20px;
            a {
                text-decoration: underline;
                color: #6699ff;
                :hover {
                    color: white;
                    text-decoration: none;
                }
            }
        `;
        
        return (
            <Section id="projects" className="section">
                <ProjectsTitle>Projects</ProjectsTitle>
                <Container>
                    <ProjectSection>
                        <Project src={Domoviz} href="http://www.domoviz.com" alt="Domoviz">Domoviz</Project>
                        <Project src={AlliedHospital} href="https://allied-hospitality.com" alt="Allied Hospitality">Allied Hospitality</Project>
                        <Project src={EmeraldAventura} href="http://emeraldaventura.com/#!/" alt="Emerald Aventura">Emerald Aventura</Project>
                    </ProjectSection>
                    <ProjectParagraph>
                        Check my <a href="https://github.com/Radinax/Free-Code-Camp-Projects-" target="_blank" rel="noopener noreferrer">Algorithms</a> and <a href="https://github.com/Radinax" target="_blank" rel="noopener noreferrer">Web Applications</a> where I have used every technical skills I showed.
                    </ProjectParagraph>
                </Container>
            </Section>
        )
    }
}

export default Projects