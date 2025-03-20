
import React, { useRef, useEffect } from 'react';
import { Users, Clock, XCircle } from 'lucide-react';

const ProblemSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup intersection observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statsElements = statsRef.current?.querySelectorAll('.stat-item');
            statsElements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('fade-in-visible');
              }, i * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="section">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="chip mb-3">The Problem</div>
          <h2 className="font-bold mb-6">Tired of Overcrowded Gyms?</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We surveyed gym-goers and guess what? They hate waiting for machines! 
            Overcrowding leads to wasted time, frustration, and even gym cancellations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass-card p-8 flex flex-col items-center text-center fade-in-hidden">
            <div className="w-16 h-16 rounded-full bg-fitBlue/10 flex items-center justify-center mb-5">
              <Users className="h-8 w-8 text-fitBlue" />
            </div>
            <h3 className="text-xl font-medium mb-3">Overcrowding</h3>
            <p>
              Peak hours become a battle for equipment, leading to frustration and wasted gym time.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center fade-in-hidden">
            <div className="w-16 h-16 rounded-full bg-fitBlue/10 flex items-center justify-center mb-5">
              <Clock className="h-8 w-8 text-fitBlue" />
            </div>
            <h3 className="text-xl font-medium mb-3">Wasted Time</h3>
            <p>
              Members spend more time waiting than actually working out, reducing the effectiveness of their visits.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center fade-in-hidden">
            <div className="w-16 h-16 rounded-full bg-fitBlue/10 flex items-center justify-center mb-5">
              <XCircle className="h-8 w-8 text-fitBlue" />
            </div>
            <h3 className="text-xl font-medium mb-3">Cancellations</h3>
            <p>
              Repeated poor experiences lead to membership cancellations and negative reviews.
            </p>
          </div>
        </div>

        <div ref={statsRef} className="neo-card p-8 md:p-12">
          <h3 className="text-2xl font-medium mb-8 text-center">Key Survey Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-item fade-in-hidden flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-fitBlue mb-2">78%</div>
              <p className="text-lg">of gym members leave early due to long wait times</p>
            </div>
            <div className="stat-item fade-in-hidden flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-fitBlue mb-2">65%</div>
              <p className="text-lg">avoid peak hours because of machine unavailability</p>
            </div>
            <div className="stat-item fade-in-hidden flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-fitBlue mb-2">40%</div>
              <p className="text-lg">said they would pay extra for a booking system!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
