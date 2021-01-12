import React from "react";
import Author from "../me.png";


const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="author-image" src={Author} alt="Author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis massa a mi interdum 
                        ultrices consequat sed augue. Curabitur ultrices nunc quis metus porttitor, non euismod 
                        urna dictum. Phasellus dictum, arcu sed lacinia pretium, tortor felis eleifend neque, non 
                        cursus urna metus sed odio. Morbi ullamcorper consequat laoreet. Sed ut consequat neque. 
                        Maecenas lacinia iaculis faucibus. Etiam quis orci vitae quam egestas luctus. Praesent eu 
                        nulla imperdiet lacus commodo malesuada. Donec posuere augue eget nisl dignissim malesuada.

                        Maecenas vestibulum euismod interdum. Ut at orci nec lectus semper mattis. Nullam gravida, 
                        ligula ut finibus suscipit, neque nunc sodales elit, eu vulputate turpis eros lobortis nisl. 
                        Quisque tincidunt ac urna facilisis gravida. Curabitur maximus lectus vel lorem euismod 
                        dapibus. Aliquam erat volutpat. Vestibulum nec efficitur felis. Donec rutrum nibh vitae nisi 
                        blandit, ac pretium sem luctus.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
