import React from "react";
import './App.css';
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/footer";

const App = () => {

return (
  <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
  </div>
  )
}

export default App;

