
import React, { useRef, useEffect, useState } from 'react';
import { Send, Mail, Phone } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Textarea } from './ui/textarea';

const CTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Setup intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch('https://formspree.io/f/mblgdkvo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        form.reset();
      } else {
        const data = await response.json();
        toast.error(`Failed to send message: ${data.error || 'Please try again later'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-fitDark-light to-fitDark">
      <div 
        ref={ctaRef}
        className="w-full max-w-5xl mx-auto fade-in-hidden"
      >
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-fitBlue to-blue-400 rounded-3xl blur-xl opacity-70"></div>
          
          <div className="relative bg-fitDark-medium p-10 md:p-16 rounded-3xl border border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-fitBlue opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="chip mb-3">Get Started</div>
                <h2 className="font-bold mb-6">Upgrade Your Gym Today!</h2>
                <p className="text-xl max-w-2xl mx-auto">
                  Don't let long wait times ruin workouts. Bring FitMeIn to your gym and give your members the experience they deserve!
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium mb-6">Contact Us</h3>
                  
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-fitBlue/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-fitBlue" />
                      </div>
                      <a href="mailto:mo@thebountyregister.com" className="text-lg hover:text-fitBlue transition-colors">
                        mo@thebountyregister.com
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-fitBlue/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-fitBlue" />
                      </div>
                      <a href="tel:+447955170009" className="text-lg hover:text-fitBlue transition-colors">
                        (+44) (0)7 955 170009
                      </a>
                    </div>
                  </div>
                  
                  <form 
                    className="space-y-4 text-left" 
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/mblgdkvo"
                    method="POST"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input 
                          id="name"
                          name="name"
                          type="text" 
                          placeholder="Your name"
                          required
                          className="w-full px-4 py-3 bg-fitDark border border-white/10 rounded-lg focus:border-fitBlue focus:ring-2 focus:ring-fitBlue/20 focus:outline-none transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company Name
                        </label>
                        <Input 
                          id="company"
                          name="company"
                          type="text" 
                          placeholder="Your gym or company"
                          required
                          className="w-full px-4 py-3 bg-fitDark border border-white/10 rounded-lg focus:border-fitBlue focus:ring-2 focus:ring-fitBlue/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="Your email"
                        required
                        className="w-full px-4 py-3 bg-fitDark border border-white/10 rounded-lg focus:border-fitBlue focus:ring-2 focus:ring-fitBlue/20 focus:outline-none transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel" 
                        placeholder="Your phone number"
                        required
                        className="w-full px-4 py-3 bg-fitDark border border-white/10 rounded-lg focus:border-fitBlue focus:ring-2 focus:ring-fitBlue/20 focus:outline-none transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        required
                        className="w-full px-4 py-3 bg-fitDark border border-white/10 rounded-lg focus:border-fitBlue focus:ring-2 focus:ring-fitBlue/20 focus:outline-none transition-all"
                        rows={4}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-fitBlue rounded-lg text-white font-medium hover:bg-fitBlue/90 transition-all flex items-center justify-center button-shine"
                    >
                      {isSubmitting ? 'Sending...' : 'Request Info'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
