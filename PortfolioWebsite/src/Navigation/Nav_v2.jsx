import { NavLink } from "react-router-dom";
import logoNoBg from "../assets/logo NoBG.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser, faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import "./nav v2.css";

function Nav_V2() {
    return (
        <div className="nav-container">
            <div className="nav-v2">
                <div className="nav-logo-container">
                    <NavLink to="/Home" className="nav-logo-link">
                        <img className="nav-logo" src={logoNoBg} alt="About Me"></img>
                        <div className="nav-logo-span"></div>
                    </NavLink> 
                </div>
                <div className="nav-title-container">
                    <h1 className="nav-title">Onita Darius</h1>
                    <h4 className="nav-sub-title">Web Developer • Python Developer</h4>
                </div>
                <div className="nav-links-container">
                    <NavLink to="/AboutMe" className="navigation" id="ab-me"><FontAwesomeIcon icon={faCircleUser} />About Me</NavLink>
                    <NavLink to="/Projects" className="navigation" id="projects"><FontAwesomeIcon icon={faFile} />Projects</NavLink>
                    <NavLink to="/Contact" className="navigation" id="contact"><FontAwesomeIcon icon={faEnvelope} />Contact</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Nav_V2;