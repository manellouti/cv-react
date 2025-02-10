import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import './styles/Footer.css';

const Footer = () => {
  useEffect(() => {

    const handleScroll = () => {
      const scrollToTopButton = document.getElementById('footerScrollToTop');
      const docHeight = document.documentElement.scrollHeight; 
      const winHeight = window.innerHeight; 
      const scrollPos = window.scrollY;

      // Affiche le bouton lorsque l'utilisateur est proche du bas de la page
      if (scrollPos + winHeight >= docHeight - 100) { 
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    };

    // Ajout de l'écouteur d'événement
    window.addEventListener('scroll', handleScroll);

    // Nettoyage lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
            <Link to="/github-profile" aria-label="Voir le profil GitHub">
              <FaGithub />
            </Link>
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
              <li><Link to="/Services">➤ Services</Link></li>
              <li><Link to="/contact">➤ Me contacter</Link></li>
              <li><Link to="/legalmentions">➤ Mentions légales</Link></li>
            </ul>
          </div>
  
          {/* Colonne 3 : Mes dernières réalisations */}
          <div className="footer-column">
            <h3>Mes dernières réalisations</h3>
            <ul>
              <li><Link to="/realisations">➤ Fresh Food</Link></li>
              <li><Link to="/realisations">➤ Restaurant Akira</Link></li>
              <li><Link to="/realisations">➤ Espace bien-être</Link></li>
            </ul>
          </div>
  
          {/* Colonne 4 : Mes derniers articles */}
          <div className="footer-column">
            <h3>Mes derniers articles</h3>
            <ul>
              <li><a href="/blog">➤ Code son site en HTML/CSS</a></li>
              <li><a href="/blog">➤ Vendre ses produits sur le web</a></li>
              <li><a href="/blog">➤ Se positionner sur Google</a></li>
            </ul>
          </div>
        </div>
  
        {/* Barre foncée en dessous */}
        <div className="footer-bottom">
        <p>© Designed by John Doe</p>       
      </div>

      <button 
  id="footerScrollToTop" 
  className="footer-scroll-to-top" 
  onClick={scrollToTop}>
  ↑
</button>

      </footer>
    );
};

export default Footer;
