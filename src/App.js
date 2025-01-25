import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Sectors from "./pages/Sectors";
import Knowledge from "./pages/Knowledge";
import Technologies from "./pages/Technologies";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Publications from "./pages/Publications";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;