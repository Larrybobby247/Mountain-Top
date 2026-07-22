import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      icon: 'fas fa-home',
      title: 'Premium Lodging',
      description: 'Thoughtfully configured rooms ranging from standard budget options to expansive executive suites.',
      category: 'Accommodations'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Gourmet Dining',
      description: 'Savor richly prepared local Nigerian delicacies and continental dishes made fresh daily by our chefs.',
      category: 'Restaurant'
    },
    {
      icon: 'fas fa-cocktail',
      title: 'VIP Bar & Lounge',
      description: 'Unwind after a long day with our curated selection of premium wines, spirits, and refreshing cocktails.',
      category: 'Entertainment'
    },
    {
      icon: 'fas fa-concierge-bell',
      title: '24/7 Concierge',
      description: 'Enjoy round-the-clock room service and dedicated support to attend to your every hospitality need.',
      category: 'Service'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Elite Wellness & Fitness',
      description: 'Exclusive access to our fully equipped fitness center, indoor/outdoor pools, and relaxing spa rooms. Maintain your wellness routine even while traveling with state-of-the-art equipment and professional guidance.',
      category: 'Wellness',
      wide: true
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 px-4 relative">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <div className="deco-line-center mb-6"></div>
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">What We Offer</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">World-Class Services</h2>
          <p className="text-navy-500 max-w-xl mx-auto font-body">Experience unparalleled hospitality with our comprehensive range of premium services designed for your comfort.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card tilt-card bg-white rounded-2xl p-8 shadow-lg border border-navy-100/50 relative overflow-hidden group scroll-animate ${
                service.wide ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="card-shine rounded-inherit"></div>

              {service.wide ? (
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="service-icon w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-gold-200 group-hover:to-gold-300 transition-all">
                    <i className={`${service.icon} text-gold-600 text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed font-body">{service.description}</p>
                    <div className="mt-6 pt-6 border-t border-navy-100">
                      <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase font-accent">{service.category}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="service-icon w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gold-200 group-hover:to-gold-300 transition-all">
                    <i className={`${service.icon} text-gold-600 text-2xl`}></i>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
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
