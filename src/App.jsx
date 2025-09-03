import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/navbar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
const App = () => {
  return (
    
    <div className="text-white">
     <Navbar />
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects />} />
       <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
};

export default App;
