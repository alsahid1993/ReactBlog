import React from 'react'
import './style.css';

import Sidebar from '../Sidebar'
import Footer from '../Footer';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <React.Fragment>

            <div className="container">
                {props.children}

                <Sidebar />
            </div>
            <div>
                <Footer />
            </div>
        </React.Fragment>
    )

}

export default Layout