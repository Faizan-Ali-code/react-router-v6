import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact/:bookingref/:email" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/* /?bookingref=AP15-6180&email=abrar.hassan@auxilium.digital */}
    </div>
  );
};

export default App;
