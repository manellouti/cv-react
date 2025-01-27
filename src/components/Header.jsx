import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Header.css';

const Header = () => {
  return (
    <header className="header">
          {/* Navbar ici */}
          <nav className="navbar">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;