import React, { useState } from 'react';
import logo from '../imgs/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="header">
      <a href="/" className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </a>

      <nav className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
        <ul>
          <li><Link to="/" className={getLinkClass('/')}>FitMeIn</Link></li>
          <li><Link to="/about" className={getLinkClass('/about')}>About Us</Link></li>
          <li><Link to="/aaa" className={getLinkClass('/aaa')}>AAA</Link></li>
          <li><Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link></li>
        </ul>
      </nav>

      <div style={{ zIndex: "1999", display: "flex" }}>
        <div className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default Header;
