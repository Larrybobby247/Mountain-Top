import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      icon: 'fas fa-bed',
      title: 'Accommodation',
      description: '41 well-appointed rooms, suites, and apartments designed for comfort. Each space features modern furnishings, air conditioning, and attached balconies for a serene stay.',
      category: 'Stay'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Food & Beverage',
      description: 'Savor delicious local Nigerian delicacies and International cuisine at our on-site restaurant and bar, prepared fresh daily by our expert chefs.',
      category: 'Dining'
    },
    {
      icon: 'fas fa-coffee',
      title: 'Free Breakfast',
      description: 'Start your day right with a complimentary breakfast featuring a variety of fresh, seasonal options to energize your morning.',
      category: 'Dining'
    },
    {
      icon: 'fas fa-glass-cheers',
      title: 'Banquet Service & Catering',
      description: 'Full-service event catering for weddings, conferences, and special occasions. Our event halls and professional team ensure memorable gatherings.',
      category: 'Events'
    },
    {
      icon: 'fas fa-broom',
      title: 'Housekeeping',
      description: 'Impeccable daily housekeeping services maintaining the highest standards of cleanliness and comfort throughout your stay.',
      category: 'Service'
    },
    {
      icon: 'fas fa-tshirt',
      title: 'Laundry',
      description: 'Professional laundry and dry-cleaning services available to keep your wardrobe fresh and ready for any occasion.',
      category: 'Service'
    },
    {
      icon: 'fas fa-concierge-bell',
      title: 'Concierge',
      description: 'Dedicated 24/7 concierge support to assist with reservations, transportation, local recommendations, and every hospitality need.',
      category: 'Service',
      wide: true
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 px-4 relative bg-navy-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="deco-line-center mb-6"></div>
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">What We Offer</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-navy-500 max-w-xl mx-auto font-body text-lg">
            Comprehensive hospitality services designed to make every aspect of your stay seamless and memorable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card tilt-card bg-white rounded-2xl p-8 shadow-lg border border-navy-100/50 relative overflow-hidden group scroll-animate hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                service.wide ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="card-shine rounded-inherit"></div>

              {service.wide ? (
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="service-icon w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
                    <i className={`${service.icon} text-gold-600 text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{service.title}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed font-body">{service.description}</p>
                    <div className="mt-6 pt-6 border-t border-navy-100">
                      <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase font-accent">{service.category}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="service-icon w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300">
                    <i className={`${service.icon} text-gold-600 text-2xl`}></i>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{service.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed font-body">{service.description}</p>
                  <div className="mt-6 pt-6 border-t border-navy-100">
                    <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase font-accent">{service.category}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;