import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Film from "./components/Film";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import Contactform from "./components/Contactform";
import Branding from "./components/Branding";
import Art from "./components/Art";

// Main Home page
function MainHome() {
  return (
    <>
      <Navbar />
      <Hero />
      
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/services" element={<><Navbar /><Services /></>} />
        <Route path="/team" element={<><Navbar /><Team /></>} />
        <Route path="/about" element={<><Navbar /><Aboutus /></>} />
        <Route path="/portfolio" element={<><Navbar /><Portfolio /></>} />
        <Route path="/contact" element={<><Navbar /><Contactform /></>} />
        <Route path="/services/film-production" element={<><Navbar /><Film /></>} />
        <Route path="/services/branding" element={<><Navbar /><Branding /></>} />
        <Route path="/services/art-curation" element={<><Navbar /><Art /></>} />
      </Routes>
    </Router>
  );
}

export default App;
