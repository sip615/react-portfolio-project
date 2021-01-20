import React from "react";
// import {
//     LinkedinShareButton,
//     LinkedinIcon
// } from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Main St. Boston, MA</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-5555">+1 555 555 5555</a>
                        </div>
                        <div className="d-flex">
                            <p>email@email.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Areas of Expertise</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton url={"URL_TO_SHARE_HERE"}>
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
