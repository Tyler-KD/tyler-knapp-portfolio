import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>

  );
}

export default App
