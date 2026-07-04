import Nav_V2 from "../Navigation/Nav_v2.jsx";
import { useEffect } from "react";

function ContactPage () {

    useEffect(() => {
        document.title = "Onita Darius | Contact";
    }, []);

    return(
        <>
            <Nav_V2/>
            <h2>You can reach me at the following:</h2>
            <p>Email: <a href="mailto:onita.darius@gmail.com">onita.darius@gmail.com</a></p>
            <p>Phone: <a href="tel:+40765918126">0765918126</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/darius-onita-763277299/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p>GitHub: <a href="https://github.com/Onita-Darius" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </>
    )
}

export default ContactPage