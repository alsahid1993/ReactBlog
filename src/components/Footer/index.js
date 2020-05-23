import React from 'react';
import './style.css';
import SocialIcons from '../Social';
/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
       <React.Fragment>
        <div className = "footer">Footer</div>
        <div>
            <SocialIcons/>            
        </div>
        </React.Fragment>
    )

}

export default Footer