import React from 'react'
import styled from "styled-components";
import Skill from "./Skill"
// Skills Images
import Html from '../assets/images/portfolio images skills/html.png';
import Css from '../assets/images/portfolio images skills/css.png';
import Firebase from '../assets/images/portfolio images skills/firebase.png';
import Graphql from '../assets/images/portfolio images skills/graphql.png';
import Gulp from '../assets/images/portfolio images skills/gulp.png';
import Jquery from '../assets/images/portfolio images skills/jquery.png';
import Javascript from '../assets/images/portfolio images skills/js.png';
import Mysql from '../assets/images/portfolio images skills/mysql.png';
import NodeLogo from '../assets/images/portfolio images skills/node.png';
import Php from '../assets/images/portfolio images skills/php.png';
import Postgre from '../assets/images/portfolio images skills/postgre.png';
import ReactLogo from '../assets/images/portfolio images skills/react.png';
import Redux from '../assets/images/portfolio images skills/redux.png';
import Sass from '../assets/images/portfolio images skills/sass.png';
import Vue from '../assets/images/portfolio images skills/vue.png';
import GatsbyLogo from '../assets/images/portfolio images skills/gatsby.png';

class Skills extends React.Component {
    render() {

        const Section = styled.div`
            background-color: #f2f2f2;
        `;

        const Container = styled.section`
            padding: 30px;
        `;

        const SkillsTitle = styled.h1`
            color: #262626;
            text-align: center;
            padding: 20px;
        `;

        const SkillSection = styled.div`
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
        `;
        
        return (
            <Section id="skills" className="section">
                <SkillsTitle>Technical Skills</SkillsTitle>
                <Container>
                    <SkillSection>
                        <Skill src={Html} alt="HTML">HTML</Skill>
                        <Skill src={Css} alt="CSS">CSS</Skill>
                        <Skill src={Sass} alt="SASS">SASS</Skill>
                        <Skill src={Gulp} alt="Gulp">Gulp</Skill>
                        <Skill src={Javascript} alt="Javascript">Javascript</Skill>
                        <Skill src={Jquery} alt="Jquery">Jquery</Skill>
                        <Skill src={ReactLogo} alt="React">React</Skill>
                        <Skill src={Vue} alt="Vue">Vue</Skill>
                        <Skill src={Redux} alt="Redux">Redux</Skill>
                        <Skill src={NodeLogo} alt="Node">Node</Skill>
                        <Skill src={Php} alt="PHP">PHP</Skill>
                        <Skill src={Mysql} alt="MySQL">MySQL</Skill>
                        <Skill src={Firebase} alt="Firebase">Firebase</Skill>
                        <Skill src={Postgre} alt="PostgreSQL">PostgreSQL</Skill>
                        <Skill src={Graphql} alt="GraphQL">GraphQL</Skill>
                        <Skill src={GatsbyLogo} alt="Gatsby">Gatsby</Skill>
                    </SkillSection>
                </Container>
            </Section>
        )
    }
}

export default Skills