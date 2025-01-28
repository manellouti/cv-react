import React from 'react';
import './styles/Home.css';
import heroBg from '../assets/img/hero-bg.jpg';  // Vérifie l'importation de l'image

const Home = () => {
  return (
    <div className="home">
      <section className="intro" style={{ backgroundImage: `url(${heroBg})` }}>
      <h3>Développeur web full stack</h3>
        <button>En savoir plus</button>
      </section>
    </div>
  );
};

export default Home;
