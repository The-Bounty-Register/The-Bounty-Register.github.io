
import React, { useRef, useEffect } from 'react';
import { BrainCircuit, CalendarClock, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const SolutionSection = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup intersection observer for steps animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = stepsRef.current?.querySelectorAll('.step-item');
            steps?.forEach((el, i) => {
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

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    // Setup intersection observer for image animation
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  return (
    <section id="solution" className="section bg-fitDark-light">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="chip mb-3">The Solution</div>
          <h2 className="font-bold mb-6">The Smarter Way to Gym</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Imagine walking into the gym knowing exactly which machines are free. No guesswork. No waiting. 
            FitMeIn lets members pre-book workout slots, reducing congestion and improving workouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className="order-2 lg:order-1 relative fade-in-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-fitBlue/30 to-blue-400/30 rounded-3xl blur-xl opacity-70"></div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="relative pb-[177.78%]">
                <div className="absolute inset-0 bg-fitDark-medium">
                  <div className="absolute top-0 left-0 w-full h-10 bg-fitDark-light flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="absolute top-10 inset-x-0 bottom-0 bg-fitDark flex flex-col p-4">
                    <div className="h-12 mb-4 rounded-lg bg-fitBlue/10 flex items-center px-4">
                      <div className="w-8 h-8 rounded-full bg-fitBlue/20 mr-3"></div>
                      <div className="h-4 w-3/4 bg-fitBlue/20 rounded"></div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 gap-4">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div 
                          key={item} 
                          className={cn(
                            "rounded-lg p-4 flex items-center",
                            item % 2 === 0 ? "bg-fitDark-card" : "bg-fitBlue/10"
                          )}
                        >
                          <div className="w-12 h-12 rounded-lg bg-fitBlue/20 mr-4 flex-shrink-0"></div>
                          <div className="space-y-2 flex-1">
                            <div className="h-3 bg-white/20 rounded w-1/2"></div>
                            <div className="h-3 bg-white/10 rounded w-3/4"></div>
                          </div>
                          <div className={cn(
                            "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ml-2",
                            item % 2 === 0 ? "bg-fitBlue text-white" : "bg-white/10"
                          )}>
                            {item % 2 === 0 && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-10">
              <h3 className="text-2xl font-medium mb-4">How it works</h3>
              <p className="text-lg">
                FitMeIn makes scheduling your gym time effortless, ensuring you get the most out of every workout.
              </p>
            </div>
            
            <div ref={stepsRef} className="space-y-8">
              <div className="step-item fade-in-hidden neo-card p-6 transition-all hover:translate-y-[-2px]">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-fitBlue/10 flex items-center justify-center mr-5 flex-shrink-0">
                    <BrainCircuit className="h-6 w-6 text-fitBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Smart Booking</h4>
                    <p>AI auto-schedules your perfect session based on your preferences and gym capacity.</p>
                  </div>
                </div>
              </div>
              
              <div className="step-item fade-in-hidden neo-card p-6 transition-all hover:translate-y-[-2px]">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-fitBlue/10 flex items-center justify-center mr-5 flex-shrink-0">
                    <CalendarClock className="h-6 w-6 text-fitBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Manual Booking</h4>
                    <p>Choose your machines & time slots with a simple, intuitive interface.</p>
                  </div>
                </div>
              </div>
              
              <div className="step-item fade-in-hidden neo-card p-6 transition-all hover:translate-y-[-2px]">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-fitBlue/10 flex items-center justify-center mr-5 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-fitBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Seamless Workout</h4>
                    <p>Arrive. Train. No delays. Follow your perfect workout path without interruptions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
