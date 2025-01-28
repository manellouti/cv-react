import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
const location = useLocation();

  return (
    <header className="header">
      <nav className="navbar">
      <p>JOHN DOE</p>
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? 'active' : ''}
            >
              ACCUEIL
            </Link>
        </li>
        <li>
          <Link 
            to="/Services" 
            className={location.pathname === '/services' ? 'active' : ''}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link 
            to="/realisations" 
            className={location.pathname === '/realisations' ? 'active' : ''}
          >
            REALISATIONS
          </Link>
        </li>
        <li>
          <Link 
            to="/blog" 
            className={location.pathname === '/blog' ? 'active' : ''}
          >
            BLOG
          </Link>
        </li>
        <li>
          <Link 
            to="/Contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            ME CONTACTER
          </Link>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Navbar;