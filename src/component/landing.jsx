import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './landing.css';
import video from '../imgs/video.mp4';
import UAE from "../imgs/UAE.png";
import UK from "../imgs/UK.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Landing = () => {
  const fullText = "workouts revolutionised";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let direction = 1; // 1 for typing, -1 for deleting
    const typingSpeed = 100; // Adjust typing speed here
    const interval = setInterval(() => {
      if (direction === 1) {
        // Typing
        setDisplayedText(fullText.slice(0, index + 1));
        index += 1;
        if (index === fullText.length) {
          direction = -1;
        }
      } else {
        // Deleting
        setDisplayedText(fullText.slice(0, index - 1));
        index -= 1;
        if (index === 0) {
          direction = 1;
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing">
      <div className="video-container">
        <video src={video} loop autoPlay muted className="video" />
      </div>
      <div className="text">
        <h1>FitMeIn</h1>
        <motion.h3
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <span>{displayedText}</span>
        </motion.h3>
        <div className="flags">
          <img src={UAE} alt="UAE flag" />
          <img src={UK} alt="UK flag" />
        </div>
        <div className='actions'>
          <a href="#book">Book a Demo</a>
          <a href="#contact" className='flex'>Contact Us <ArrowForwardIcon className='arrow-right'/></a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
