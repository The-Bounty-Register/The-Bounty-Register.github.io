
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, BookOpen, Users, Lightbulb, CalendarDays, Award, University } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-fitDark overflow-x-hidden">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="blur-dot bg-fitBlue/30 top-20 -left-10"></div>
            <div className="blur-dot bg-purple-500/20 bottom-10 right-10"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-gradient mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Founded by university graduates in 2021, FitMeIn is revolutionizing how fitness enthusiasts manage their gym experience.
            </p>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="section">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <CalendarDays className="h-8 w-8 text-fitBlue mr-3" />
                  <h3 className="text-2xl font-semibold">Founded in 2021</h3>
                </div>
                <p className="mb-4">
                  FitMeIn was officially registered in 2021, born from the collective frustration of its founders with the inefficiencies in gym scheduling systems.
                </p>
                <p>
                  What began as a university project quickly evolved into a full-fledged solution for gym-goers worldwide, addressing a problem that affects millions of fitness enthusiasts daily.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center h-full">
                <University className="h-16 w-16 text-fitBlue mb-6" />
                <h3 className="text-xl font-medium mb-4 text-center">Academic Foundation</h3>
                <p className="text-center">
                  Leveraging research resources and mentorship from one of the UK's leading universities, we combined academic rigor with practical problem-solving to create FitMeIn.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research & Development */}
        <section className="bg-fitDark-light py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="chip mb-4">Our Process</div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Built from Ground Up</h2>
              <p className="max-w-3xl mx-auto">
                FitMeIn was developed using extensive research and user-centered design principles.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="neo-card p-8 flex flex-col items-center text-center">
                <BookOpen className="h-10 w-10 text-fitBlue mb-4" />
                <h3 className="text-xl font-medium mb-3">Extensive Research</h3>
                <p>
                  Conducted comprehensive surveys with over 500 gym members to understand pain points and priorities.
                </p>
              </div>
              
              <div className="neo-card p-8 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-fitBlue mb-4" />
                <h3 className="text-xl font-medium mb-3">User-Centric Design</h3>
                <p>
                  Every feature has been developed with direct input from real gym users and fitness professionals.
                </p>
              </div>
              
              <div className="neo-card p-8 flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-fitBlue mb-4" />
                <h3 className="text-xl font-medium mb-3">Quality First</h3>
                <p>
                  Built from scratch using cutting-edge technology to ensure reliability, security, and seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Founders Section */}
        <section className="section">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="chip mb-4">Meet the Team</div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Founders</h2>
              <p className="max-w-3xl mx-auto">
                A team of passionate computer science graduates with a drive to solve real-world problems.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
              <div className="flex-1 glass-card p-8 rounded-2xl flex flex-col">
                <GraduationCap className="h-10 w-10 text-fitBlue mb-6" />
                <h3 className="text-xl font-medium mb-4">Computer Science Excellence</h3>
                <p className="mb-4">
                  Our founding team consists of computer science graduates from top UK universities, bringing diverse technical expertise in software development, UI/UX design, and system architecture.
                </p>
                <p className="mt-auto">
                  This solid academic foundation enables us to approach complex problems with both theoretical knowledge and practical skills.
                </p>
              </div>
              
              <div className="flex-1 glass-card p-8 rounded-2xl flex flex-col">
                <Lightbulb className="h-10 w-10 text-fitBlue mb-6" />
                <h3 className="text-xl font-medium mb-4">Passion for Innovation</h3>
                <p className="mb-4">
                  What unites our team is a shared passion for solving real-world problems through technology. We see FitMeIn not just as a business, but as a revolution in gym technology.
                </p>
                <p className="mt-auto">
                  Each founder brings their unique perspective and expertise, creating a dynamic team committed to continuous improvement and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision Section */}
        <section className="bg-gradient-to-r from-fitDark-medium to-fitDark py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-gradient text-3xl md:text-4xl font-semibold mb-6">Our Vision</h2>
            <p className="text-xl md:text-2xl mb-10">
              "We see FitMeIn as a revolution in gym technology, transforming frustration into fitness by creating more time for what matters most - your workout."
            </p>
            <div className="inline-flex items-center">
              <span className="h-1 w-20 bg-fitBlue rounded-full"></span>
              <span className="mx-4 text-muted-foreground">The Founding Team</span>
              <span className="h-1 w-20 bg-fitBlue rounded-full"></span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
