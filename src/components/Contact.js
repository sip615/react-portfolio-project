import React from "react"

const Contact = () => {
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>
                    Please fill out the form and describe your 
                    project needs and I'll contact you as soon as 
                    possible.
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                            <div className="text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                            />
                            <div className="line"></div>
                        </div>
                        {/* PHONE INPUT */}
                        <div className="text-center">
                            <input
                                type="phone"
                                className="form-control"
                                placeholder="Phone Number"
                                phone="phone"
                            />
                            <div className="line"></div>
                        </div>
                        {/* Email INPUT */}
                        <div className="text-center">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                email="email"
                            />
                            <div className="line"></div>
                        </div>
                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                subject="subject"
                            />
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="In a few words, describe your project..."
                                description="description"
                            ></textarea>
                            <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact