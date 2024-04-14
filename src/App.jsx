import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      
        {/* Navbar is displayed on every page because it is outside of Routes tag */}
        <Navbar />
        <main>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />}/>
        </Routes>
        </main>

        <Footer/>
      
    </BrowserRouter>

  );
}

export default App
