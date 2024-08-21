import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <Facebook className="icon" />
        <Twitter className="icon" />
        <Instagram className="icon" />
      </div>

      <div className="links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </div>

      <div className="copyrights">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
