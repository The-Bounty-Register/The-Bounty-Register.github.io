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
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" placeholder="full name" />

            <label htmlFor="email">email address</label>
            <input type="email" id="email" name="email" placeholder="email" />

            <label htmlFor="reason">how can we help?</label>
            <select id="reason" name="reason">
              <option value="">select a reason</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="inquiry">General Inquiry</option>
            </select>

            <input type="file" id="file" name="file" className="file-input" />
            <label htmlFor="file" className="file-label">
              attach or submit relevant files
            </label>

            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactPage;
