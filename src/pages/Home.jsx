import React from 'react';
import Navbar from '../components/Navbar';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="intro">
        <h2>Bienvenue sur mon portfolio !</h2>
        <p>Je suis un développeur web passionné par la création de sites modernes et interactifs.</p>
      </section>
    </div>
  );
};

export default Home;
