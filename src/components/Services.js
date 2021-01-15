import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
        <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
{/*-----------------------------------------------------------------------------------*/}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                            <h3>Web Development</h3>
                            <p>
                                I use a multifaceted approach to tackle your business's Front-End and Back-End development 
                                needs. 
                            </p>
                        </div>
                    </div>
{/*-----------------------------------------------------------------------------------*/}

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                            <h3>Data Science</h3>
                            <p>
                                Data driven decisions are the way of the future. I can help you choose, develop, 
                                and train algorithms specific to your organization's optimization needs.
                            </p>
                        </div>
                    </div>

{/*-----------------------------------------------------------------------------------*/}

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/></div>
                            <h3>SEO</h3>
                            <p>
                                You deserve to be recognized for what you have to offer. I can develop a strategy
                                to get you to the front of search engine results, increase organic traffic, and be
                                seen by more of your future customers.
                            </p>
                        </div>
                    </div>

{/*-----------------------------------------------------------------------------------*/}

                </div>
            </div>
        </div>
        
    )
}

export default Services
