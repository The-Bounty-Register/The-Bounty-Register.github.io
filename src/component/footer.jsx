import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import "./footer.css"
import { Link, useLocation } from 'react-router-dom';


const Footer = () => {

  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="footer">
      <div className="icons">
        <Facebook className="icon" />
        <Twitter className="icon" />
        <Instagram className="icon" />
      </div>

      <div className="links">
        <ul>
          <li><Link to="/" className={getLinkClass('/')}>FitMeIn</Link></li>
          <li><Link to="/about" className={getLinkClass('/about')}>About Us</Link></li>
          <li><Link to="/aaa" className={getLinkClass('/aaa')}>AAA</Link></li>
          <li><Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link></li>
        </ul>
      </div>

      <div className="copyrights">
        © {new Date().getFullYear()} The Bounty Register. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
