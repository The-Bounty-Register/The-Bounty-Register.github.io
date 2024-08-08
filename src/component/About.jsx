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
          learning human actions <br /> on computer applications
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
          Our mission is to bridge the gap between human actions and computer applications by creating intuitive and accessible technology solutions. We aim to improve user experience through innovative design and functionality.
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
          We are a team of dedicated professionals with diverse backgrounds and expertise. Our team works collaboratively to bring the best solutions to life. Meet the passionate individuals behind our success.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
