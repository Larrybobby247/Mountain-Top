import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const sectionRef = useScrollAnimation();

  const testimonials = [
    {
      text: "The customer service here is unmatched. The room was exceptionally clean, and having stable 24/7 electricity made my work trip stress-free.",
      initials: 'OA',
      name: 'Oluwaseun A.',
      role: 'Business Traveler',
      color: 'from-gold-300 to-gold-500'
    },
    {
      text: "I loved the local dishes at the restaurant. Staying at the Suites property gave me access to a great pool and gym. Highly recommended!",
      initials: 'CE',
      name: 'Chidi Emma',
      role: 'Weekend Guest',
      color: 'from-navy-400 to-navy-600'
    },
    {
      text: "Mountain Top is my go-to anytime I am in Ojodu Berger. It is highly secure, very affordable, and situated close to the main transit points.",
      initials: 'AK',
      name: 'Amara K.',
      role: 'Frequent Visitor',
      color: 'from-gold-300 to-gold-500'
    },
    {
      text: "Very spacious rooms for the price point. The professional staff made me feel welcome from the moment I checked in until I left.",
      initials: 'AI',
      name: 'Alhaji Ibrahim',
      role: 'Staycationer',
      color: 'from-navy-400 to-navy-600'
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-navy-100/50 min-w-[350px] flex-shrink-0 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star text-gold-400 text-sm"></i>
        ))}
      </div>
      <p className="text-navy-600 text-sm leading-relaxed mb-6 font-body">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="text-navy-900 font-semibold text-sm font-body">{testimonial.name}</p>
          <p className="text-navy-400 text-xs font-body">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <div className="deco-line-center mb-6"></div>
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">Guest Reviews</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">What Our Guests Say</h2>
          <p className="text-navy-500 max-w-xl mx-auto font-body">Real experiences from real guests who have stayed at Mountain Top Hotel & Suites.</p>
        </div>

        <div className="overflow-hidden">
          <div className="testimonial-track">
            {/* First set */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`first-${i}`} testimonial={t} />
            ))}
            {/* Duplicate for seamless scroll */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`second-${i}`} testimonial={t} />
            ))}
            {/* Third set for smoother loop */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`third-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
