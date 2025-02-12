import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <p onClick={scrollToTop} className="scroll-to-top">JOHN DOE</p>

        {/* Icône du menu burger */}
        <div className="burger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? 'active' : ''} onClick={closeMenu}>
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/realisations" className={location.pathname === '/realisations' ? 'active' : ''} onClick={closeMenu}>
              RÉALISATIONS
            </Link>
          </li>
          <li>
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={closeMenu}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>
              ME CONTACTER
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
