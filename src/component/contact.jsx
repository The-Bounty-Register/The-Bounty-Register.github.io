import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';
import Header from './header';
import Footer from './footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xovalebg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error('Error submitting form');
      }

    } catch (error) {
      console.error('Error submitting form', error);
    }
  };



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
          <form name='contactus-form' onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="full name" />

            <label htmlFor="email">email address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" />

            <label htmlFor="phone">phone number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="phone number" />

            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="company name" />

            <label htmlFor="message">message</label>
            <textarea rows="4" cols="50" name="message" form="contactus-form" value={formData.message} onChange={handleChange} className='message' placeholder='How can we help?'></textarea>

            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </motion.div>

      {submitted && (
        <motion.div
          className="popup"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>We will be in touch soon!</h2>
          <div className="loader"></div>
        </motion.div>
      )}
      <Footer />
    </>
  );
};

export default ContactPage;
