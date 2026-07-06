import Nav_V2 from "../Navigation/Nav_v2.jsx";
import Card from "./Card"
import { useEffect } from "react";
import "./projects.css"

function ProjectsPage () {

    useEffect(() => {
        document.title = "Onita Darius | Projects";
    }, []);

    return(
        <>
            <Nav_V2/>
            <div className="projectsContainer">
                <Card imgsrc="src/assets/Tinkers-Ratio-Calculator.png" cardTitle="Tinkers Ratio Calculator" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <Card imgsrc="src/assets/BaseIMG.jpg" cardTitle="A Second Project Title" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <Card imgsrc="src/assets/BaseIMG.jpg" cardTitle="A Third Project Title" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
            </div>
        </>
    )
}

export default ProjectsPage