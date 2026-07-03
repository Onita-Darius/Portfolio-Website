import Nav_V2 from "../Navigation/Nav_v2.jsx";
import { NavLink } from "react-router-dom";

function AboutPage () {
    return(
        <div>
            <Nav_V2/>
            <h1>About Page</h1>
            <p>I'm a Team Lead with experience in customer support and electronics manufacturing who enjoys solving problems, improving processes, and helping others succeed.
My day to day life is focused on small projects around my house and learning backend and web development by building personal projects. I stared web development with a simple app that would calculate a 
ratio using Python through a API(FastAPI) .</p>
            <p>You can currently reach find some of my projects on my <NavLink to="/Projects" className="inlineLinks">Projects</NavLink> page or on my <a href="https://github.com/Onita-Darius" target="_blank" rel="noopener noreferrer">GitHub profile</a>.
            You can also find more about me and my resume here -{">"} <a href="https://www.linkedin.com/in/darius-onita-763277299/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
        </div>
    )
}

export default AboutPage