
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { DumbbellIcon, MenuIcon, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Helper function to handle section navigation
  const handleSectionNavigation = (sectionId: string) => {
    if (isHomePage) {
      // If already on homepage, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to homepage with the section hash
      navigate(`/#${sectionId}`);
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300",
        isScrolled 
          ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/10" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <DumbbellIcon className="h-8 w-8 text-fitBlue" />
          <span className="font-bold text-xl">FitMeIn</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleSectionNavigation("problem")} 
            className="text-sm font-medium hover:text-fitBlue transition-colors"
          >
            The Problem
          </button>
          <button 
            onClick={() => handleSectionNavigation("solution")} 
            className="text-sm font-medium hover:text-fitBlue transition-colors"
          >
            Our Solution
          </button>
          <button 
            onClick={() => handleSectionNavigation("benefits")} 
            className="text-sm font-medium hover:text-fitBlue transition-colors"
          >
            Benefits
          </button>
          <Link to="/about" className="text-sm font-medium hover:text-fitBlue transition-colors">
            About Us
          </Link>
          <button 
            onClick={() => handleSectionNavigation("contact")} 
            className="px-5 py-2 bg-fitBlue rounded-full text-white text-sm font-medium hover:bg-fitBlue/90 transition-all button-shine"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-300 flex flex-col pt-24 px-6",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          <button 
            onClick={() => handleSectionNavigation("problem")}
            className="text-xl font-medium"
          >
            The Problem
          </button>
          <button 
            onClick={() => handleSectionNavigation("solution")}
            className="text-xl font-medium"
          >
            Our Solution
          </button>
          <button 
            onClick={() => handleSectionNavigation("benefits")}
            className="text-xl font-medium"
          >
            Benefits
          </button>
          <Link 
            to="/about" 
            className="text-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <button 
            onClick={() => handleSectionNavigation("contact")}
            className="px-8 py-3 mt-4 bg-fitBlue rounded-full text-white text-lg font-medium button-shine"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
