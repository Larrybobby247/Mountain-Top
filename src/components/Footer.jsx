import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '/#about' },
    { label: 'Our Services', href: '/#services' },
    { label: 'Rooms & Suites', href: '/#rooms' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Contact', href: '/#contact' }
  ];

  const services = [
    'Premium Lodging',
    'Gourmet Dining',
    'VIP Bar & Lounge',
    'Event Hall',
    'Fitness Center'
  ];

  return (
    <footer className="bg-navy-950 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <span className="font-display text-navy-900 font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white">Mountain Top</span>
                <span className="block text-[10px] text-gold-400 tracking-[0.3em] uppercase -mt-1">Hotel & Suites</span>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed font-body">
              Elevating budget luxury and hospitality in Lagos through intentional care and continuous comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wider uppercase font-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('/#')) {
                        e.preventDefault();
                        const id = link.href.replace('/#', '');
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-navy-300 text-sm hover:text-gold-400 transition font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wider uppercase font-accent">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-navy-300 text-sm font-body">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wider uppercase font-accent">Newsletter</h4>
            <p className="text-navy-300 text-sm mb-4 font-body">Subscribe for exclusive offers and updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="input-luxury flex-1 bg-navy-800 text-white rounded-xl py-2.5 px-4 text-sm font-body"
              />
              <button type="submit" className="btn-primary bg-gold-400 hover:bg-gold-500 text-navy-900 px-4 rounded-xl">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm font-body">2025 Mountain Top Suites and Apartments. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-navy-400 text-sm hover:text-gold-400 transition cursor-pointer font-body">Privacy Policy</span>
            <span className="text-navy-400 text-sm hover:text-gold-400 transition cursor-pointer font-body">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
