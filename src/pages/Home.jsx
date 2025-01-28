import React from 'react';
import './styles/Home.css';
import heroBg from '../assets/img/hero-bg.jpg';  // Vérifie l'importation de l'image

const Home = () => {
  return (
    <div className="home">
      <section className="intro" style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>Bonjour, je suis John Doe</h1>
      <h2>Développeur web full stack</h2>
        <button>En savoir plus</button>
      </section>
    </div>
  );
};

export default Home;
