import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const navbar = () => {
    return(
    <div className="n-wrapper" id="Navbar">
    {/* left */}
    <div className="n-left">
        <div className="n-name">Sebastián</div>
        <Toggle/>
    </div>
    {/* right */}
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType: "none"}}>

            <li>
                <Link activeClass="active" to="navbar" spy={true} smooth={true}>
                Home
                </Link>
            </li>    
            <li>
                <Link  to="services" spy={true} smooth={true}>
                Services
                </Link>
            </li>      
            <li>
                <Link  to="formation" spy={true} smooth={true}>
                Formation
                </Link>
            </li>     
            <li>
                <Link  to="portfolio" spy={true} smooth={true}>
                Portfolio
                </Link>
            </li>     
                        
            </ul>
        </div>
        <Link to = "contact" spy={true} smooth={true}>
            <button className="button n-button">Contact me</button>
        </Link>
        </div>  
    </div>
   );
};

export default navbar;
