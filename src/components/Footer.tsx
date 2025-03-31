
import React from 'react';
import { DumbbellIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fitDark border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-3">
            <DumbbellIcon className="h-8 w-8 text-fitBlue" />
            <span className="font-bold text-xl">FitMeIn</span>
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
