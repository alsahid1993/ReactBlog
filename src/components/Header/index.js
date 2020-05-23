import React from 'react';
import './style.css';
import SocialIcons from '../Social';
/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <SocialIcons />
        </header>
    )

}

export default Header