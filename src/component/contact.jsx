import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';
import Header from './header';
import Footer from './footer';
import IPhone from './Iphone';
// import IPhone from './iphone14Demo/IPhone';

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
          style={{position: 'sticky'}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <IPhone />
        </motion.div>

        <motion.div
          className="form-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <form name='contactus-form'>
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
