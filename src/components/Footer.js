import React from 'react'
import styled from 'styled-components'

class Footer extends React.Component {

    render() {
        const Footer = styled.div`
            display: block;
            background-color: #292C33;
            text-align: center;
            padding: 10px;
            color: #f2f2f2;
        `;
        
        return (
            <Footer>
                @2019 Adrian Beria All Rights Reserved
            </Footer>
        )
    }
}

export default Footer
