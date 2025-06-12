import React from 'react';
import hero from './img.jpg';
import './HeroSection.css'; 

function HeroSection() {
  return (
    <div className="hero-section">
      <img src={hero} alt="Hero Section" className="hero-image" />
    </div>
  );
}

export default HeroSection;
