import React from 'react';
import './styles/Home.css';
import heroBg from '../assets/img/hero-bg.jpg';
import JohnDoeAbout from '../assets/img/john-doe-about.jpg';

const Home = () => {
  return (
    <div className="home">
      <section className="intro" style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>Bonjour, je suis John Doe</h1>
      <h2>Développeur web full stack</h2>
        <button>En savoir plus</button>
      </section>

      <section className="about">
        {/* Partie gauche : Titre et description */}
        <div className="about-left">
          <h2>À Propos</h2>
          <div className="underline"></div>
          <p>
            Passioné par l'informatique et les nouvelles technologies,
            j'ai suivi une formation d'intégrateur-développeur web au CEF.
            Au cours de cette formation j'ai pu acquérir des bases solides pour travailer dans
            le domaine du développement web.
            <br /> <br />
            Basé à Lyon, je suis en recherche d'une alternance au 
            sein d'une agence digitale pour consolider ma formationde développeur web full stack.
            <br /> <br />
            J'accorde une attention particulière à la qualité du code que j'écris et je respecte 
            les bonnes pratiques du web.
          </p>
        </div>

        {/* Partie droite : Image & compétences */}
        <div className="about-right">
          <img src={JohnDoeAbout} alt="John Doe" className="john-doe-about" />
          <h3>Mes Compétences</h3>
          <div className="skills">
            <div className="skill">
              <span>HTML 90%</span>
              <div className="progress">
                <div className="progress-bar html"></div>
              </div>
            </div>
            <div className="skill">
              <span>CSS3 80%</span>
              <div className="progress">
                <div className="progress-bar css"></div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript 70%</span>
              <div className="progress">
                <div className="progress-bar js"></div>
              </div>
            </div>
            <div className="skill">
              <span>PHP 60%</span>
              <div className="progress">
                <div className="progress-bar php"></div>
              </div>
            </div>
            <div className="skill">
              <span>React 50%</span>
              <div className="progress">
                <div className="progress-bar react"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
