import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Welcome to Umang Foundation</h2>
        <p>Making a difference in the community through education, health, and social welfare</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Donate Now</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
}

export default Hero;
