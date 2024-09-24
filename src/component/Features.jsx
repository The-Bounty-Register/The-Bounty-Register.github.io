import React from 'react';
import './FeatureSection.css';
import logo from "../imgs/logo.png"
import "./FeatureSection.css"

const FeatureSection = () => {
  return (
    <div className="features-section">
      <div className="text">
        <h1>FitMeIn</h1>
        <span>Powerd By</span>
        <img src={logo} alt="" />
        <p>A technology house based in United Kingdom</p>
        <a href="/about">Learn More</a>
      </div>
    </div>
  );
}

export default FeatureSection;
