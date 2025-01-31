import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import './styles/Footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Colonne 1 : John Doe */}
          <div className="footer-column">
            <h3>John Doe</h3>
            <p>40 Rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <div className="footer-icons">
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
  
          {/* Colonne 2 : Liens utiles */}
          <div className="footer-column">
            <h3>Liens utiles</h3>
            <ul>
              <li><Link to="/#home">➤ Accueil</Link></li>
              <li><Link to="/#about">➤ À propos</Link></li>
              <li><Link to="/#services">➤ Services</Link></li>
              <li><Link to="/#contact">➤ Me contacter</Link></li>
              <li><Link to="/#mentions">➤ Mentions légales</Link></li>
            </ul>
          </div>
  
          {/* Colonne 3 : Mes dernières réalisations */}
          <div className="footer-column">
            <h3>Mes dernières réalisations</h3>
            <ul>
              <li><a href="#">➤ Fresh food</a></li>
              <li><a href="#">➤ Restaurant Akira</a></li>
              <li><a href="#">➤ Espace bien-être</a></li>
            </ul>
          </div>
  
          {/* Colonne 4 : Mes derniers articles */}
          <div className="footer-column">
            <h3>Mes derniers articles</h3>
            <ul>
              <li><a href="#">➤ Code son site en HTML/CSS</a></li>
              <li><a href="#">➤ Vendre ses produits sur le web</a></li>
              <li><a href="#">➤ Se positionner sur Google</a></li>
            </ul>
          </div>
        </div>
  
        {/* Barre foncée en dessous */}
        <div className="footer-bottom">
          <p>Designed by John Doe</p>
        </div>
      </footer>
    );
};

export default Footer;
