import "./navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser, faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'

function NavigationBar () {
    return(
    <div>
    <header className="header"><h1>Home of O.D.</h1></header>
    <nav id="navbar">
        <a href="#" className="navigation" id="home"><FontAwesomeIcon icon={faHouse} />Home</a>
        <a href="#" className="navigation" id="ab_us"><FontAwesomeIcon icon={faCircleUser} />About Me</a>
        <a href="#" className="navigation" id="projects"><FontAwesomeIcon icon={faFile} />Projects</a>
        <a href="#" className="navigation" id="contact"><FontAwesomeIcon icon={faEnvelope} />Contact</a>
    </nav>
    </div>
)
}

export default NavigationBar;