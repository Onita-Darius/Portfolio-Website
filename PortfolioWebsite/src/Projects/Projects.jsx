import Nav_V2 from "../Navigation/Nav_v2.jsx";
import Card from "./Card"
import "../CSS/projects.css"

function ProjectsPage () {
    return(
        <div>
            <Nav_V2/>
            <div className="projectsContainer">
                <Card imgsrc="src/assets/BaseIMG.jpg" cardTitle="Tinkers Ratio Calculator" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <Card imgsrc="src/assets/BaseIMG.jpg" cardTitle="A 2nd project" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <Card imgsrc="src/assets/BaseIMG.jpg" cardTitle="A 2nd project" cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                
            </div>
        </div>
    )
}

export default ProjectsPage