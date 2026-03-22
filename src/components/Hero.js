import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h2>Welcome to Our Responsive Website</h2>
          <p>
            Built with React and optimized for all devices. Experience seamless
            design across mobile, tablet, and desktop screens.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
