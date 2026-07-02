
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser, faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from "react-router-dom";

function NavigationBar () {

    return(
    <div>
    <header className="header"><h1>Home of O.D.</h1></header>
    <nav id="navbar">
        <NavLink to="/" className="navigation" id="home"><FontAwesomeIcon icon={faHouse} />Home</NavLink>
        <NavLink to="/aboutme" className="navigation" id="ab_me"><FontAwesomeIcon icon={faCircleUser} />About Me</NavLink>
        <NavLink to="/projects" className="navigation" id="projects"><FontAwesomeIcon icon={faFile} />Projects</NavLink>
        <NavLink to="/contact" className="navigation" id="contact"><FontAwesomeIcon icon={faEnvelope} />Contact</NavLink>
    </nav>
    </div>
)
}

export default NavigationBar;