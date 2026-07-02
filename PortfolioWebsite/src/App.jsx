import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage/Home.jsx'
import ProjectsPage from "./Projects/Projects.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Homepage/>} />
        <Route path="/AboutMe" element={<Homepage/>} />
        <Route path="/Projects" element={<ProjectsPage/>} />
        <Route path="/Contact" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
