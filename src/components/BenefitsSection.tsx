
import React, { useRef, useEffect, useState } from 'react';
import { UserPlus, DollarSign, BarChart3, Heart, Star } from 'lucide-react';

// Updated testimonial data with real-world gym complaints
const testimonials = [
  {
    id: 1,
    quote: "The gym is extremely unorganized and crowded...",
    name: "Kalli Mikkonen",
    rating: 2,
    time: "3 months ago"
  },
  {
    id: 2,
    quote: "...very busy so no chance to use all the equipment you need...",
    name: "AJ",
    rating: 2,
    time: "3 weeks ago"
  },
  {
    id: 3,
    quote: "Overcrowded even during off peak times, not enough equipment, you end up standing around waiting...",
    name: "Jola",
    rating: 1,
    time: "a year ago"
  },
  {
    id: 4,
    quote: "This is the most crowded and untidy gyms I have ever been to.",
    name: "M.R",
    rating: 1,
    time: "6 months ago"
  },
  {
    id: 5,
    quote: "Wait times for popular machines are ridiculous. Sometimes I leave without completing my workout because I can't access what I need.",
    name: "T.K",
    rating: 2,
    time: "2 months ago"
  },
  {
    id: 6,
    quote: "Peak hours are a nightmare. I pay a premium membership fee but can't even use the equipment I want when I actually have time to go.",
    name: "B.L",
    rating: 1,
    time: "5 weeks ago"
  },
  {
    id: 7,
    quote: "Too many people hogging machines while scrolling on their phones. Management does nothing about it.",
    name: "K.S",
    rating: 2,
    time: "4 months ago"
  },
  {
    id: 8,
    quote: "Impossible to maintain a proper workout routine because you never know if equipment will be available. Incredibly frustrating experience.",
    name: "D.P",
    rating: 1,
    time: "2 weeks ago"
  },
  {
    id: 9,
    quote: "I've had to completely rearrange my workout split because certain areas are always packed. Not what I signed up for.",
    name: "J.M",
    rating: 2,
    time: "7 months ago"
  }
];

const BenefitsSection = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Setup intersection observer for benefits animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const benefits = entry.target.querySelectorAll('.benefit-item');
            benefits.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('fade-in-visible');
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    // Setup intersection observer for testimonial animation
    const testimonialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            testimonialObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (testimonialRef.current) {
      testimonialObserver.observe(testimonialRef.current);
    }

    // Auto-slide functionality for testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 15000); // 15 seconds

    return () => {
      observer.disconnect();
      testimonialObserver.disconnect();
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="benefits" className="section">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="chip mb-3">For Gym Owners</div>
          <h2 className="font-bold mb-6">More Revenue. Happier Members.</h2>
          <p className="text-xl max-w-3xl mx-auto">
            FitMeIn isn't just for gym-goers – it's a game-changer for gym owners too!
          </p>
        </div>

        <div 
          ref={benefitsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <div className="benefit-item fade-in-hidden glass-card p-8 transition-all duration-300 hover:translate-y-[-4px]">
            <div className="flex items-start">
              <div className="w-14 h-14 rounded-full bg-fitBlue/10 flex items-center justify-center mr-5 flex-shrink-0">
                <UserPlus className="h-7 w-7 text-fitBlue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Increase Memberships</h3>
                <p>
                  Eliminate the #1 complaint about gyms - overcrowding and waiting for equipment. More capacity means more satisfied members and fewer dropouts.
                </p>
              </div>
            </div>
          </div>

          <div className="benefit-item fade-in-hidden glass-card p-8 transition-all duration-300 hover:translate-y-[-4px]">
            <div className="flex items-start">
              <div className="w-14 h-14 rounded-full bg-fitBlue/10 flex items-center justify-center mr-5 flex-shrink-0">
                <DollarSign className="h-7 w-7 text-fitBlue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Boost Revenue</h3>
                <p>
                  Offer premium 'skip-the-wait' memberships or tiered scheduling options for additional revenue streams beyond standard memberships.
                </p>
              </div>
            </div>
          </div>

          <div className="benefit-item fade-in-hidden glass-card p-8 transition-all duration-300 hover:translate-y-[-4px]">
            <div className="flex items-start">
              <div className="w-14 h-14 rounded-full bg-fitBlue/10 flex items-center justify-center mr-5 flex-shrink-0">
                <BarChart3 className="h-7 w-7 text-fitBlue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Better Data</h3>
                <p>
                  Gain valuable insights into peak hours, machine demand, and member preferences to optimize your gym layout and equipment purchases.
                </p>
              </div>
            </div>
          </div>

          <div className="benefit-item fade-in-hidden glass-card p-8 transition-all duration-300 hover:translate-y-[-4px]">
            <div className="flex items-start">
              <div className="w-14 h-14 rounded-full bg-fitBlue/10 flex items-center justify-center mr-5 flex-shrink-0">
                <Heart className="h-7 w-7 text-fitBlue" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Member Satisfaction</h3>
                <p>
                  Create a premium experience that members rave about. Satisfied customers become your best marketers, bringing in more referrals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={testimonialRef}
          className="fade-in-hidden neo-card p-10 relative overflow-hidden mb-12"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 bg-fitBlue pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-medium mb-8 text-center">What Gym-Goers Say</h3>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="w-full flex-shrink-0 flex flex-col items-center text-center p-4"
                    >
                      <div className="w-20 h-20 rounded-full bg-fitDark-medium border-2 border-fitBlue mb-6 flex items-center justify-center">
                        <span className="text-2xl font-bold text-fitBlue">
                          {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ').length > 1 ? testimonial.name.split(' ')[1][0] : ''}
                        </span>
                      </div>
                      
                      {renderStars(testimonial.rating)}
                      
                      <p className="text-sm text-muted-foreground mb-2">{testimonial.time}</p>
                      
                      <blockquote className="text-xl italic mb-6 max-w-2xl">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <p className="font-medium text-white">{testimonial.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={goToPrevSlide}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              
              <button 
                onClick={goToNextSlide}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeIndex === i ? 'bg-fitBlue' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
