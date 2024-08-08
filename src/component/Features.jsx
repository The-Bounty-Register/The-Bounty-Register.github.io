import React from 'react';
import './FeatureSection.css';
import tablet1 from '../imgs/tablet1.png';
import tablet2 from '../imgs/tablet2.png';
import tablet3 from '../imgs/tablet3.png';
import logo from "../imgs/logo.png"
import "./FeatureSection.css"

const FeatureSection = () => {
  return (
    <div className="features-section">
      <div className="text">
        <h1>FitMeIn</h1>
        <span>Powerd By</span>
        <img src={logo} alt="" />
        <p>a personalized operating system through <br />a natural language interface.</p>
        <a href="#logo">Learn More</a>
      </div>
      <div className="images">
        <div>
            <div className='img-text'>
            <img src={tablet1} alt="" />
            
            </div>
            <div className='img-text'>
            <img src={tablet2} alt="" />
            
            </div>
        </div>
        <div>
        <div className='img-text'>
            <img src={tablet3} alt="" />
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
