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
    <>
      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div ref={sectionRef} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative scroll-animate">
              <div className="relative z-10">
                <img 
                  src={Img1}
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
                  <div>
                    <p className="text-white font-bold text-sm">Since 2019</p>
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
              
              <div className="space-y-4 mb-8 font-body text-navy-600 leading-relaxed">
                <p className="text-lg">
                  Mountain Top Suites and Apartments is a World Class Executive Hotel situated at the heart of Lagos but nestled in a serene environment. We offer guests a perfect escape from the hustle and bustle of city life.
                </p>
                <p>
                  This idyllic Hotel combines natural beauty with modern comforts, making it an ideal destination for relaxation, adventure, and rejuvenation. Surrounded by breathtaking landscapes, guests can enjoy stunning views and immerse themselves in nature.
                </p>
                <p>
                  Our facilities offer a blend of comfort, entertainment, and hospitality, tailored to make your stay unforgettable. The Hotel features comfortable accommodations, including well-appointed rooms each designed to provide a peaceful ambiance. Guests can indulge in delicious local and International cuisine at the on-site restaurant, which emphasizes fresh, seasonal ingredients.
                </p>
              </div>

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
                className="btn-primary inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors"
              >
                Discover Our Services<i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-24 sm:py-32 px-4 bg-navy-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-400/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <div className="deco-line mx-auto mb-6"></div>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">Our Purpose</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 leading-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="scroll-animate group bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-navy-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-400/20 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <i className="fas fa-eye text-gold-600 text-2xl"></i>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
                <p className="text-navy-600 leading-relaxed font-body text-lg">
                  To become a preferred Hotel brand to Local and International Customers.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="scroll-animate group bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-navy-100/50 relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-navy-400/20 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <i className="fas fa-bullseye text-navy-600 text-2xl"></i>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
                <p className="text-navy-600 leading-relaxed font-body text-lg">
                  We will offer a sanctuary of luxury and convenience, where guests can enjoy the finest in accommodation and amenities, while providing an exceptional hospitality experience. We will deliver top-notch customer service, ensuring every guest enjoys a seamless experience from the moment they step in until the moment they check out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;