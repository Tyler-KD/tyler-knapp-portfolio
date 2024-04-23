import { PiSunBold, PiSunDimFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').
    matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const sunBold = <PiSunBold />;

  const sunDim = <PiSunDimFill />;

  return (
    <BrowserRouter>
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="fixed p-2 z-10 right-20  bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
          >
            {theme === 'dark' ? sunBold : sunDim}
        </button>
        <div className="bg-primary-color dark:bg-secondary-color text-stone-900 dark:text-stone-300">

        
        {/* Header and inner linked Navbar are displayed on every page because they are outside of Routes tag */}
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

        </div>
      
    </BrowserRouter>

  );
}

export default App
