import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/#about', label: 'About' },
    { to: '/#services', label: 'Services' },
    { to: '/#rooms', label: 'Suites' },
    { to: '/#gallery', label: 'Gallery' },
    { to: '/#testimonials', label: 'Reviews' },
    { to: '/#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-display text-navy-900 font-bold text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl font-bold text-white tracking-wide">Mountain Top</span>
                <span className="block text-[10px] text-gold-400 tracking-[0.3em] uppercase -mt-1">Suites and Apartments</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="nav-link text-white/80 hover:text-white text-sm font-medium tracking-wide transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="tel:+2348138519792" 
                className="hidden md:flex items-center gap-2 text-gold-400 hover:text-gold-300 transition"
              >
                <i className="fas fa-phone-alt text-sm"></i>
                <span className="text-sm font-medium">+234 813 851 9792</span>
              </a>
              <Link 
                to="/booking" 
                className="btn-primary bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide"
              >
                Book Now
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden text-white text-2xl hover:text-gold-400 transition"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-80 h-full bg-navy-950 z-50 p-8 shadow-2xl transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl hover:text-gold-400 transition"
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="mt-16 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className="text-white text-lg font-display hover:text-gold-400 transition"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gold-400 text-sm mb-2">Call Us</p>
            <a href="tel:+2348138519792" className="text-white text-xl font-display">+234 813 851 9792</a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
