import React from 'react';
import { motion } from 'framer-motion';
import './about.css';
import Header from './header';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const AboutUs = () => {
  return (
    <div>
      <Header />
      <motion.div
        className='gray-bg'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
        >
          Empowering gyms to <br /> revolutionise member experience
        </motion.h1>
      </motion.div>
      <motion.div
        className='section'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
        >
          Our Mission
        </motion.h2>
        <motion.p
          variants={itemVariants}
        >
          At The Bounty Register our mission is to tranform fitness with FitMeIn empowering gyms accross the globe to solve issues that every member faces.
        </motion.p>
      </motion.div>
      <motion.div
        className='section'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
        >
          Our Vision
        </motion.h2>
        <motion.p
          variants={itemVariants}
        >
          Our vision is to redifine gym interactions and disrupt the way people use gym now. We see a world where booking machines to workout is as standard as booking movie tickets.
        </motion.p>
      </motion.div>

      <motion.div
        className='section'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
        >
          Our Team
        </motion.h2>
        <motion.p
          variants={itemVariants}
        >
          We are a team of dedicated professionals with diverse backgrounds in software engineering, consultancy and data science.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
