import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage/Home.jsx'
import AboutPage from "./About/About.jsx";
import ProjectsPage from "./Projects/Projects.jsx";
import ContactPage from "./Contact/Contact.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/AboutMe" element={<AboutPage/>} />
        <Route path="/Projects" element={<ProjectsPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
