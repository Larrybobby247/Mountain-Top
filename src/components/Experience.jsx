import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({ guests: 0, rating: 0, rooms: 0 });
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const targets = { guests: 5000, rating: 4.9, rooms: 150 };
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        guests: Math.floor(targets.guests * easeOut),
        rating: (targets.rating * easeOut).toFixed(1),
        rooms: Math.floor(targets.rooms * easeOut)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView]);

  const stats = [
    { icon: 'fas fa-smile', value: counts.guests.toLocaleString(), label: 'Happy Guests', suffix: '+' },
    { icon: 'fas fa-star', value: counts.rating, label: 'Guest Rating', suffix: '' },
    { icon: 'fas fa-bed', value: counts.rooms, label: 'Luxury Rooms', suffix: '+' },
    { icon: 'fas fa-clock', value: '24/7', label: 'Service Available', suffix: '' }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80" 
          alt="Hotel Experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="deco-line-center mb-6 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">Our Track Record</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">The Mountain Top Experience</h2>
          <p className="text-white/60 max-w-xl mx-auto font-body">Numbers that reflect our commitment to excellence and guest satisfaction.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold-400/20">
                <i className={`${stat.icon} text-gold-400 text-3xl`}></i>
              </div>
              <p className="font-display text-4xl sm:text-5xl text-gold-400 font-bold tabular-nums">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-white/60 text-sm mt-2 font-body">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services Available */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass-gold rounded-full px-6 py-3">
            <i className="fas fa-concierge-bell text-gold-400"></i>
            <span className="text-white font-accent text-sm tracking-wide">
              <span className="text-gold-400 font-bold text-lg">5+</span> Services Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
