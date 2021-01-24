import React from "react";
// import Typed from "react-typed";
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>SUNIL PATEL</h1> 
                {/* <Typed 
                    className="typed-text" 
                    strings={["MERN Stack", "Front-End", "Back-End","SEO"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                /> */}
                <h5 className="typed-text">Full-Stack Web Developer</h5>
                <Link smooth={true} offset={-110} to="contact" href="#" className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
