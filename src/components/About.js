import React from 'react'
import styled from "styled-components";
import profile from '../assets/images/profile.png';
// Social Media Icons
import Github from '../assets/images/social media images/git.png';
import Linkedin from '../assets/images/social media images/linked.png';
import Twitter from '../assets/images/social media images/twitter.png';

class About extends React.Component {
    render() {
        
        const ProfileImage = styled.img`
            border-radius: 50%;
            width: 80%;
            height: auto;
            margin-left: 40px;
            :hover {
                transform: translateY(-1px);
                box-shadow: 0 6px 25px #5b6171;
                transition: all 200ms ease;
            }
                    
            @media (max-width: 800px) {
                max-width: 300px;
                min-width: 200px;
                
            }
            
            @media (max-width: 500px) {
                min-width: 40px;
                max-width: 150px;
                margin-top: 20px;
                margin-left: 0px;
                width: 100%;
            }
            
        `;

        const Container = styled.section`
            height: 100vh;
            line-height: 2;
            background-color:#292C33;
            color: white;
            display: flex;
            flex-direction: row;
            @media (max-width: 500px) {
                flex-direction: column;           
            }
            div {
                display: flex;
                align-items: center;
                margin: 0 auto;
            }
            p {
                padding-top: 30px;
                text-align: center;
                font-size: 1.5rem;
                width: 70%;
                @media (max-width: 1024px) {
                    font-size: 1.2rem;
                }
                @media (max-width: 800px) {
                    font-size: 1.1rem;
                }
                @media (max-width: 500px) {
                    font-size: 1rem;
                    width: 80%;
                }
                margin: 0 auto;
                a {
                    text-decoration: underline;
                    color: #6699ff;
                    :hover {
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        `;

        const NameFont = styled.h1`
            font-size: 1.5rem;
            margin: 0 auto;
            padding: 0px;
            @media (max-width: 500px) {
                font-size: 1rem;
            }
            span {
                color: #ffff00;  
            }
        `;

        const Hr = styled.hr`
            size: 10px;
            border-color: #ffcc00;
            background-color: #ffcc00;
            margin-top: 20px;
        `;

        const SocialMediaSection = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            a {
                padding: 10px 30px;
                @media (max-width: 800px) {
                    padding: 10px 20px;
                }
                @media (max-width: 800px) {
                    padding: 10px 10px 20px 10px;
                }
                img {
                    height: 50px;
                    width: 50px;
                    @media (max-width: 800px) {
                        height: 40px;
                        width: 40px;
                    }
                    @media (max-width: 500px) {
                        height: 40px;
                        width: 40px;
                    }
                    border-radius: 50%;
                    :hover {
                        transform: translateY(-1px);
                        box-shadow: 0 6px 25px #5b6171;
                        transition: all 200ms ease;
                    }
                }
            }
        `;
        
        return (
            <React.Fragment>
                <Container id="about" className="section">
                    <div>
                        <ProfileImage src={profile} alt="Adrian Beria" />
                    </div>
                    <div>
                        <p>
                            <NameFont>My name is <span>Adrian Beria</span></NameFont> 
                            I am an <a href="https://www.linkedin.com/in/adrianberia2013/" target="_blank" rel="noopener noreferrer">Engineer</a> working as <a href='https://www.freecodecamp.org/radinax/front-end-certification' target="_blank" rel="noopener noreferrer">Web Developer</a> to create blazing fast websites and web applications using the latest technologies like React and Gatsby.
                            <Hr/>
                            <SocialMediaSection>
                                <a href="https://github.com/Radinax" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github" /></a>
                                <a href="https://twitter.com/Adrberia" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter" /></a>
                                <a href="https://www.linkedin.com/in/adrianberia2013/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin"/></a>
                            </SocialMediaSection>
                        </p>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default About