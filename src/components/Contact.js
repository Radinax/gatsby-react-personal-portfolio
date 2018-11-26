import React from 'react'
import styled from "styled-components";

class Contact extends React.Component {
    render() {

        const Section = styled.div`
            background-color: #f2f2f2;
        `;

        const Container = styled.section`
            border-radius: 5px;
            width: 60%;
            margin: 0px auto;
            padding-bottom: 40px;
        `;

        const ContactTitle = styled.h1`
            color: #262626;
            text-align: center;
            padding: 20px;
        `;
        
        const None = {
            display: "none"
        }

        const Form = styled.form`
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            width: 100%;
            input[type=text], input[type=email], select, textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }
            textarea {
                height: 150px;
            }
            input[type=submit] {
                background-color: #ffcc00;
                padding: 10px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                float: left;
                width: 15%;
                margin-top: 10px;
                @media (max-width: 768px) {
                    width: 25%;
                }
                @media (max-width: 500px) {
                    width: 100%;
                }
            }
            input[type=submit]:hover {
                opacity: 0.7;
            }
        `;

        return (
            <Section id="contact" className="section">
                <ContactTitle>Contact Me</ContactTitle>
                <Container>
                    <Form method="POST" action="https://formspree.io/adrberia@gmail.com">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Your name" required />
                        <label for="email">Email</label>
                        <input type="email" name="_replyto" placeholder="Your email" required />
                        <input type="hidden" name="_subject" value="Website contact"></input>
                        <label for="name">Comment</label>
                        <textarea type="text" name="message" placeholder="Your message" required></textarea>
                        <input type="text" name="_gotcha" style={None}/>
                        <input type="submit" value="Send" />
                    </Form>
                </Container>
            </Section>
        )
    }
}

export default Contact