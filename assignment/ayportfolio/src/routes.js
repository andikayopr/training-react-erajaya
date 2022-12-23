import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Experience from "./pages/Experience";
import Interest from "./pages/Interest";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/interest" element={<Interest />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default RoutesApp;
