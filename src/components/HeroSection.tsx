
import React, { useEffect, useRef } from 'react';
import AppMockup from '@/assets/mockup';

const HeroSection = () => {
  const mockupRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Ensure elements become visible with animation
    const animateMockup = () => {
      if (mockupRef.current) {
        mockupRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    };

    const animateTitle = () => {
      if (titleRef.current) {
        titleRef.current.classList.add('opacity-100');
      }
    };

    const animateSubtitle = () => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('opacity-100');
      }
    };

    const animateButton = () => {
      if (buttonRef.current) {
        buttonRef.current.classList.add('opacity-100', 'translate-y-0');
      }
    };

    // Stagger animations slightly
    setTimeout(animateTitle, 300);
    setTimeout(animateSubtitle, 600);
    setTimeout(animateButton, 900);
    setTimeout(animateMockup, 500);

    // Setup intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-hidden').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="blur-dot bg-fitBlue/50 top-1/4 -left-10"></div>
      <div className="blur-dot bg-blue-500/30 bottom-1/3 right-10"></div>

      <div 
        className="absolute inset-0 bg-gradient-to-b from-fitDark/50 to-fitDark"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.1) 0%, transparent 40%)' 
        }}
      ></div>

      <div className="container mx-auto px-6 pt-20 pb-12 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16 relative z-10">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="chip">Smart Gym Scheduling Platform</div>
            <h1 
              ref={titleRef} 
              className="opacity-0 font-bold leading-tight transition-opacity duration-700"
            >
              <span className="block">No More Waiting.</span>
              <span className="text-gradient">Just Training.</span>
            </h1>
            <p 
              ref={subtitleRef}
              className="opacity-0 text-xl md:text-2xl mt-4 transition-opacity duration-700"
            >
              Your gym. Your schedule. No hassle.
            </p>
          </div>
          
          <p className="text-lg">
            FitMeIn empowers gyms to eliminate overcrowding by letting members book workouts in advance, ensuring a seamless exercise experience.
          </p>
          
          <a 
            href="#solution" 
            ref={buttonRef}
            className="opacity-0 transform translate-y-4 inline-block px-8 py-4 bg-fitBlue rounded-full text-white font-medium text-lg transition-all duration-700 hover:translate-y-[-2px] hover:shadow-glow button-shine"
          >
            Discover How
          </a>
        </div>

        <div 
          ref={mockupRef}
          className="opacity-0 transform translate-y-8 transition-all duration-700 w-full relative"
        >
          {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-fitBlue/50 to-blue-400/50 rounded-10xl blur-xl opacity-10 group-hover:opacity-100 transition"></div> */}
          <div className="relative flex w-full">
            <AppMockup />
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
      </div>
    </section>
  );
};

export default HeroSection;
