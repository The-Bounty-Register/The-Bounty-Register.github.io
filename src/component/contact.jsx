import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';
import Header from './header';
import Footer from './footer';
import IPhone from './Iphone';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    ipAddress: '',
    screenResolution: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Get the user's IP address when the component mounts
  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setFormData((prevData) => ({
          ...prevData,
          ipAddress: data.ip
        }));
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    // Get screen resolution
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    setFormData((prevData) => ({
      ...prevData,
      screenResolution: screenResolution
    }));

    fetchIPAddress();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formDataObj,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
        alert('Form submitted successfully!');
      } else {
        console.error('Form submission error:', response);
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('A network error occurred. Please check your connection.');
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
          style={{ position: 'sticky' }}
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
          <form
            action="https://formspree.io/f/mqakzqrl"
            method="POST"
            name="contactus-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required />

            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />

            <label htmlFor="message">Message</label>
            <textarea
              rows="4"
              cols="50"
              id="message"
              name="message"
              form="contactus-form"
              value={formData.message}
              onChange={handleChange}
              className="message"
              placeholder="How can we help?"
              required
            ></textarea>

            {/* Hidden fields for IP Address and Screen Resolution */}
            <input type="hidden" name="ipAddress" value={formData.ipAddress} />
            <input type="hidden" name="screenResolution" value={formData.screenResolution} />

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
