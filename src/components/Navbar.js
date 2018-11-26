import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import ResponsiveMenu from 'react-responsive-navbar'
import styled from 'styled-components'
import '../assets/css/navbar-style.css';
 
class Example extends Component {
  render() {

    const List = styled.li`
      color: white;
      text-decoration: none;
      list-style-type: none;
      margin: 12px 15px 0px 15px;
      a {
        color: white;
        text-decoration: none;
        :hover {
          border-bottom: solid 3px white ;
          transition: 150ms ease-in-out;
        }
      }
    `;

    return (
      <ResponsiveMenu
        menuOpenButton={<FaBars />}
        menuCloseButton={<FaTimes />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <List>
                <a href="#about" rel="noopener noreferrer">About</a>
            </List>
            <List>
                <a href="#skills" rel="noopener noreferrer">Skills</a>
            </List>
            <List>
                <a href="#projects" rel="noopener noreferrer">Projects</a>
            </List>
            <List>
                <a href="#contact" rel="noopener noreferrer">Contact</a>
            </List>
          </ul>
        }
      />
    );
  }
}

export default Example