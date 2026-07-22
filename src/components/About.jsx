import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Img1 from '../assets/front-view.jpg'

const About = () => {
  const sectionRef = useScrollAnimation();

  const features = [
    { icon: 'fas fa-shield-alt', label: 'Uncompromised Security' },
    { icon: 'fas fa-bolt', label: '24/7 Power Reliability' },
    { icon: 'fas fa-heart', label: 'Customer-Centric Care' },
    { icon: 'fas fa-sparkles', label: 'Exemplary Cleanliness' }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative scroll-animate">
            <div className="relative z-10">
              <img 
                  src= {Img1}
                alt="Mountain Top Hotel" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold-400/30 rounded-2xl -z-10"></div>
            </div>
            <div className="absolute -bottom-8 left-8 glass-dark z-10 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-award text-navy-900 text-xl"></i>
                </div>
                <div className=''>
                  <p className="text-white font-bold text-sm">Since 2015</p>
                  <p className="text-white/60 text-xs">Excellence in Hospitality</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-animate">
            <div className="deco-line mb-6"></div>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">About Mountain Top</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Redefining Budget<br/>Luxury in Lagos
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed mb-6 font-body">
              Mountain Top Suites and Apartments is a premier hospitality destination in Ojodu, Lagos, redefining budget luxury through dedicated 24/7 service, spacious lodging, and modern comfort.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8 font-body">
              We do not just offer rooms; we offer a sanctuary. With dual properties catering to both economy travelers and premium apartment seekers, your peace of mind is guaranteed.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                    <i className={`${feature.icon} text-gold-600`}></i>
                  </div>
                  <span className="text-navy-700 text-sm font-medium font-body">{feature.label}</span>
                </div>
              ))}
            </div>

            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide"
            >
              Discover Our Services<i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
