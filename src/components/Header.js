import React from "react";
import Typed from "react-typed";
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Web Development Projects</h1> 
                <Typed 
                    className="typed-text" 
                    strings={["Web Development", "Data Science", "SEO"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contact" href="#" className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
