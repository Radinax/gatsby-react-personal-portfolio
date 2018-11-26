import React from 'react'
import styled from "styled-components";


class Project extends React.Component {
    render() {

        const Card = styled.div`
            background-color: #f2f2f2;
            border: 1px solid #ebecec;
            border-radius: 6px;
            box-shadow: 0 1px 2px #5b6171;
            margin: .5rem;
            box-sizing: border-box;
            text-align: center;
            width: 30%;
            min-width: 200px;
            :hover {
                transform: translateY(-1px);
                box-shadow: 0 6px 25px #5b6171;
                transition: all 200ms ease;
            }
        `;

        const Image = styled.img`
            padding: 10px 10px 0px 10px;
            border-radius: 6px;
            height: auto;
            min-width: 200px;
            line-height: 1.6;
        `;

        const Title = styled.h3`
            font-size: 1rem;
        `;

        return (
            <Card>
                <a href={this.props.href} target="_blank" rel="noopener noreferrer"><Image src={this.props.src} alt={this.props.alt} /></a>
                <Title>{this.props.children}</Title>
            </Card>
        )
    }
}

export default Project