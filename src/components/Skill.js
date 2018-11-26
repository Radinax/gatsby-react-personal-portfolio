import React from 'react'
import styled from "styled-components";


class Skill extends React.Component {
    render() {

        const Card = styled.div`
           background-color: #fff;
            border: 1px solid #ebecec;
            border-radius: 6px;
            box-shadow: 0 1px 2px rgba(0,0,0,.1);
            margin: .5rem;
            box-sizing: border-box;
            text-align: center;
            width: 20%;
            min-width: 200px;
            :hover {
                transform: translateY(-1px);
                box-shadow: 0 6px 25px rgba(0,0,0,.1);
                transition: all 200ms ease;
            }
        `;

        const Image = styled.img`
            padding: 10px 10px 0px 10px;
            max-width: 80px;
            border-radius: 6px;
            height: auto;
            width: 70px;
            line-height: 1.6;
        `;

        const Title = styled.h3`
            font-size: 1rem;
        `;

        return (
            <Card>
                <Image src={this.props.src} alt={this.props.alt}/>
                <Title>{this.props.children}</Title>
            </Card>
        )
    }
}

export default Skill