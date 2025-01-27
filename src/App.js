import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/portoflio" exact element={<Portfolio />} />
      <Route path="/services" exact element={<Services />} />
      {/* ici les autres routes pour les pages */}
    </Routes>
    </div>
    </Router>
  );
}

export default App;
