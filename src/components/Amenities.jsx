import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Amenities = () => {
  const sectionRef = useScrollAnimation();

  const amenities = [
    { icon: 'fas fa-bed', title: '41 Rooms, Suites & Apartments', desc: 'Comfortable accommodations for every need' },
    { icon: 'fas fa-person-booth', title: 'Private Balconies', desc: 'Attached balconies for scenic views' },
    { icon: 'fas fa-utensils', title: 'Restaurant', desc: 'Local & International cuisine' },
    { icon: 'fas fa-water', title: 'Adult Swimming Pool', desc: 'Relax and unwind' },
    { icon: 'fas fa-child', title: 'Children Swimming Pool', desc: 'Safe fun for the little ones' },
    { icon: 'fas fa-taxi', title: 'Taxi on Call', desc: 'Transportation at your fingertips' },
    { icon: 'fas fa-car', title: 'Secured Car Park', desc: 'Monitored parking facility' },
    { icon: 'fas fa-dumbbell', title: 'Fitness Center', desc: 'Fully equipped gym' },
    { icon: 'fas fa-wifi', title: 'Free Wi-Fi', desc: 'High-speed internet access' },
    { icon: 'fas fa-snowflake', title: 'Air Conditioning', desc: 'Climate-controlled comfort' },
    { icon: 'fas fa-users', title: 'Conference Room', desc: 'Professional meeting space' },
    { icon: 'fas fa-glass-cheers', title: 'Event Halls', desc: 'For weddings & celebrations' },
    { icon: 'fas fa-wine-glass-alt', title: 'Bar', desc: 'Premium drinks & cocktails' },
    { icon: 'fas fa-couch', title: 'VIP Lounge', desc: 'Exclusive relaxation area' },
    { icon: 'fas fa-shield-alt', title: 'Security Personnel & NPF', desc: 'Uniformed guards & Police' },
    { icon: 'fas fa-music', title: 'Nite Club', desc: 'Evening entertainment' },
    { icon: 'fas fa-spa', title: 'Spa', desc: 'Rejuvenation & wellness' },
    { icon: 'fas fa-table', title: 'Snooker Game', desc: 'Indoor recreation' }
  ];

  return (
    <section id="amenities" className="py-24 sm:py-32 px-4 relative bg-navy-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="deco-line-center mb-6"></div>
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">Facilities</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">World-Class Amenities</h2>
          <p className="text-navy-500 max-w-xl mx-auto font-body text-lg">
            From comfortable lodging to premium leisure facilities, every detail has been carefully considered to ensure your stay is nothing short of exceptional.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="amenity-item bg-white rounded-2xl p-6 text-center shadow-md border border-navy-100/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/30 scroll-animate group"
              style={{ animationDelay: `${(index % 4) * 0.1}s` }}
            >
              <div className="amenity-icon w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-navy-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-all duration-400">
                <i className={`${amenity.icon} text-xl`}></i>
              </div>
              <h4 className="font-display font-bold text-navy-900 text-sm group-hover:text-gold-600 transition-colors">{amenity.title}</h4>
              <p className="text-navy-400 text-xs mt-1 font-body">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;