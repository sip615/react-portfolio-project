import React from "react";
import todolist from "../images/todolist.jpg";
import dailydash from "../images/dailydash.jpg";
import crystalcollector from "../images/crystalcollector.jpg";
import bamazon from "../images/bamazon.jpg";
//FONT AWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
{/*------------------------------------------------------------------------------------------------------------------------ */}
                
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={todolist} alt="Todo List Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
{/*------------------------------------------------------------------------------------------------------------------------ */}
                
                    <div className="portfolio-image-box">   
                        <img className="portfolio-image" src={dailydash} alt="Daily Dashboard App..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
               
{/*------------------------------------------------------------------------------------------------------------------------ */}
                
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={crystalcollector} alt="Crystal Collector Game..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
{/*------------------------------------------------------------------------------------------------------------------------ */}
                
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={bamazon} alt="Node App: Ecom Store Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
{/*------------------------------------------------------------------------------------------------------------------------ */}                
                </div>
            </div>
        </div>
    )
}

export default Portfolio
