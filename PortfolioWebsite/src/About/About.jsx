import Nav_V2 from "../Navigation/Nav_v2.jsx";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./about.css"

function AboutPage() {
    useEffect(() => {
    document.title = "Onita Darius | About";
}, []);

    return (
    <>
        <div className="about-layout">
        <div className="about-nav-bar"><Nav_V2/></div>
            <div className="about-title">
                <h1 className="title">About - Onita Darius</h1>
                <h2 className="subtitle">- Cell Lead -</h2>
            </div>
            <div className="about-summary">   
                <p>
                I'm a Team Lead with experience in customer support and electronics
                manufacturing who enjoys solving problems and
                helping others succeed. My day to day life is focused on small projects
                around my house and learning backend and web development by building
                personal projects. I stared web development with a simple app that would
                calculate a ratio using Python through a API(FastAPI).
                </p>
                <p>
                You can currently  find some of my projects on my{" "}
                <NavLink to="/Projects" className="inlineLinks">
                    Projects
                </NavLink>{" "}
                page or on my{" "}
                <a
                    href="https://github.com/Onita-Darius"
                    className="inlineLinks"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub profile
                </a>
                . You can also find more about me and my resume here -{">"}{" "}
                <a
                    href="https://www.linkedin.com/in/darius-onita-763277299/"
                    className="inlineLinks"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>.</p>
            </div>

            <div className="sidebar-eucation">
                <h2>Education</h2>
                <h4>Diploma – Economics Technician</h4>
                <ul>
                    <li>"Mihai Viteazul" Technical College, Oradea 2018 - 2022</li>
                </ul>
            </div>

            <h2 className="about-workexp">Work experience</h2>
            <div className="work-exp-1">
                <h3>Cell Lead</h3>
                <p>
                    <strong>Celestica - Sep 2025 - Present</strong>
                </p>
                <ul>
                    <li>
                        Leading daily operations of a team within the Central Kitting department supporting SMT and PCB assembly production. 
                    </li>
                    <li>
                        Ensuring material accuracy and inventory integrity through verification and stock control. 
                    </li>
                    <li>
                        Working closely with production, warehouse, and planning teams to maintain uninterrupted material flow. 
                    </li>
                    <li>
                        Assisting with training, task delegation, and performance support for team members. 
                    </li>
                    <li>
                        Identifying opportunities to improve efficiency, organization, and workflow. 
                    </li>
                    <li>
                        Maintaining compliance with quality, safety, and company procedures.
                    </li>
                </ul>
            </div>

            <div className="work-exp-2">
                <h3>Junior Team Lead / Nesting Support Coach</h3>
                <p>
                    <strong>CGS Romania - Aug 2022 - Sep 2025</strong>
                </p>
                <ul>
                    <li>
                        Acted as a Junior Team Lead for teams of up to 15 employees, ensuring they are prepared for the production environment.
                    </li>
                    <li>
                        Coached and led new employees during their nesting period to ensure high-quality customer interactions.
                    </li>
                    <li>
                        Assessed agents progress and identified knowledge gaps to providing targeted guidance and support development.
                    </li>
                    <li>
                        Analyzed individual performance to delivered one-on-one coaching to drive continuous improvement and help with implementation of effective strategies.
                    </li>
                    <li>
                        Conducted training and role-play sessions to help new agents adapt to a fast-paced, high-expectation environment.
                    </li>
                    <li>
                        Collaborated with management and the client (Verizon) to improve training materials, create best practices, and maintain high-quality standards.
                    </li>
                    <li>
                        Created action plans to ensure agents meet or exceed KPIs.
                    </li>
                    <li>
                        Provided real-time guidance agents calls and conducted post-call evaluations to ensure continuous improvement.
                    </li>
                </ul>
            </div>

            <div className="sidebar-skills">
                <h2>Skills</h2>
                <ul>
                    <li>People Management</li>
                    <li>English Language: Intermediate</li>
                    <li>Microsoft Word, Excel, PowerPoint</li>
                    <li>Slack</li>
                    <li>HTML</li>
                    <li>Python</li>
                    <li>Leadership and team coaching</li>
                    <li>Performance monitoring and KPI management</li>
                    <li>Client communication and relationship management</li>
                    <li>Problem-solving and issue resolution</li>
                    <li>Time management and prioritization</li>
                    <li>Collaboration and teamwork</li>
                    <li>Adaptability and continuous learning mindset</li>
                </ul>
            </div>
        </div>
    </>
);
}

export default AboutPage;
