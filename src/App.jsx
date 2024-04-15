import Header from "./components/Header";
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
      
        {/* Header and Navbar are displayed on every page because they are outside of Routes tag */}
        <Header />
        
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

        {/* Footer is displayed on every page because it is outside of Routes tag */}
        <Footer/>
      
    </BrowserRouter>

  );
}

export default App
