import Nav_V2 from "../Navigation/Nav_v2.jsx";
import { NavLink } from "react-router-dom";
import "./home.css"


function Homepage () {
    return(
        <div className="HomeContainer">
            <title>Onita Darius | Home</title>
            <Nav_V2/>
            <h2 className="HomeTitle">Welcome to the home of Onita Darius</h2>
            <p className="HomeText">Hey good to see you, you are now on the main page of my website, here you will find a small portfolio of my projects and personal experience.</p>
            <p className="HomeText">I started learning WebDev with <a className="inlineLinks" href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">The Complete Full-Stack Web Development Bootcamp</a>, then i moved on and 
            started learning Python primarily through <a className="inlineLinks" href="https://www.w3schools.com/python/python_functions.asp">W3Schools</a> and the YouTube channel <a className="inlineLinks" href="https://www.youtube.com/@BroCodez">
            Bro Code</a>.</p>
            <p className="HomeText">Now that you know a bit about me, why dont you check out some of my <NavLink to="/Projects" className="inlineLinks">projects</NavLink>!</p>
        </div>
    )
}

export default Homepage