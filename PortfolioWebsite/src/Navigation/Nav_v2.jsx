import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoNoBg from "../assets/logo-nobg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faFile, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./nav v2.css";

function Nav_V2() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="nav-container">
            <div className="nav-v2">
                <div className="nav-logo-container">
                    <NavLink to="/" className="nav-logo-link" onClick={() => setMenuOpen(false)}>
                        <img className="nav-logo" src={logoNoBg}alt="Logo"/>
                        <div className="nav-logo-span"></div>
                    </NavLink>
                </div>
                <div className="nav-title-container">
                    <h1 className="nav-title">Onita Darius</h1>
                    <h4 className="nav-sub-title">Web Developer • Python Developer</h4>
                </div>
                <div className="nav-links-desktop">
                    <NavLink to="/AboutMe" className="navigation"><FontAwesomeIcon icon={faCircleUser} /> About Me</NavLink>
                    <NavLink to="/Projects" className="navigation"><FontAwesomeIcon icon={faFile} /> Projects</NavLink>
                    <NavLink to="/Contact" className="navigation"><FontAwesomeIcon icon={faEnvelope} /> Contact</NavLink>
                </div>
                <div className="mobile-menu">
                    <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars}/>
                    </button>
                    <div className={`mobile-dropdown ${menuOpen ? "open" : ""}`}>
                        <NavLink to="/AboutMe" className="navigation" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faCircleUser} />About Me</NavLink>
                        <NavLink to="/Projects" className="navigation" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faFile} />Projects</NavLink>
                        <NavLink to="/Contact" className="navigation" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faEnvelope} />Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav_V2;