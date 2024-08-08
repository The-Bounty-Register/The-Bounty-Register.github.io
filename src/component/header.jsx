import React, { useState } from 'react';
import logo from '../imgs/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <a href="#home" className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </a>

      <nav className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
        <ul>
          <li><Link to={"/"}>FitMeIn</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/aaa"}>AAA</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
        </ul>
      </nav>


      <div style={{zIndex: "1999", display: "flex"}}>
      <ShoppingCartIcon style={{color: "#fff"}}/>
      <div className="menu-btn" onClick={toggleMenu}>
      {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      </div>
      


    </div>
  );
}

export default Header;
