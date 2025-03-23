
import React from 'react';
import { DumbbellIcon, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fitDark border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <DumbbellIcon className="h-8 w-8 text-fitBlue" />
            <span className="font-bold text-xl">FitMeIn</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-fitDark-medium flex items-center justify-center transition-all hover:bg-fitBlue/20"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-fitDark-medium flex items-center justify-center transition-all hover:bg-fitBlue/20"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-fitDark-medium flex items-center justify-center transition-all hover:bg-fitBlue/20"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-fitDark-medium flex items-center justify-center transition-all hover:bg-fitBlue/20"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">About</Link>
            <a href="/#benefits" className="text-sm text-muted-foreground hover:text-white transition-colors">Benefits</a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</a>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms of Service</Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} The Bounty Register LTD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
