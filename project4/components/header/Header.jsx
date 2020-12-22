import React from 'react';
import  './Header.css';
//import Image from './header.jpg'


class Header extends React.Component {
  render() {
    return (
      <div id = "headerback">
        <img id= "img" src="http://localhost:3000/components/header/header.jpg" alt="header"/>
      </div>
    )
};}

export default Header;
