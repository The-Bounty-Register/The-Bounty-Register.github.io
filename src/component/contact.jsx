import React from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';
import Header from './header';

const ContactPage = () => {
  return (
    <>
      <Header />
      <motion.div
        className="page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1>Contact Us</h1>
          <p>
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
          <p>
            Please fill out the form below to get in touch with us. Include as much detail as possible to help us assist you better.
          </p>
          <p>
            Our team will get back to you as soon as possible. Thank you for reaching out to us!
          </p>
        </motion.div>

        <motion.div
          className="form-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Full name" />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email" />

            <label htmlFor="who">Who Are You?</label>
            <select id="who" name="who">
              <option value="gym_member">Gym Member</option>
              <option value="gym_owner">Gym Owner</option>
            </select>

            <label htmlFor="help">How Can We Help?</label>
            <textarea id="help" name="help" placeholder="How can we help?" rows="5"></textarea>

            <label htmlFor="file" className="file-label">
              Attach or Submit Relevant Files
            </label>
            <input type="file" id="file" name="file" className="file-input" />

            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactPage;
