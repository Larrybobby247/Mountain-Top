import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Amenities = () => {
  const sectionRef = useScrollAnimation();

  const amenities = [
    { icon: 'fas fa-wifi', title: 'Free Wi-Fi', desc: 'High-speed internet' },
    { icon: 'fas fa-swimming-pool', title: 'Swimming Pool', desc: 'Indoor & outdoor' },
    { icon: 'fas fa-dumbbell', title: 'Fitness Center', desc: 'Fully equipped gym' },
    { icon: 'fas fa-utensils', title: 'Restaurant & Bar', desc: 'Gourmet dining' },
    { icon: 'fas fa-users', title: 'Event Hall', desc: 'For special occasions' },
    { icon: 'fas fa-concierge-bell', title: '24/7 Concierge', desc: 'Always at your service' },
    { icon: 'fas fa-tshirt', title: 'Laundry Service', desc: 'Same-day service' },
    { icon: 'fas fa-shield-alt', title: 'Secure Parking', desc: 'Monitored 24/7' }
  ];

  return (
    <section id="amenities" className="py-24 sm:py-32 px-4 relative">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <div className="deco-line-center mb-6"></div>
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">Facilities</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Premium Amenities</h2>
          <p className="text-navy-500 max-w-xl mx-auto font-body">Every detail has been carefully considered to ensure your stay is nothing short of exceptional.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="amenity-item bg-white rounded-2xl p-6 text-center shadow-md border border-navy-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 scroll-animate"
            >
              <div className="amenity-icon w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-navy-400 transition-all duration-400">
                <i className={`${amenity.icon} text-xl`}></i>
              </div>
              <h4 className="font-display font-bold text-navy-900 text-sm">{amenity.title}</h4>
              <p className="text-navy-400 text-xs mt-1 font-body">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
