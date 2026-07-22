import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" 
          alt="Mountain Top Hotel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/50 to-navy-950/90"></div>
      </div>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none"></canvas>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl float-slow z-[1]"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-gold-400/5 rounded-full blur-3xl float-reverse z-[1]"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl float z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <div className="mb-6 inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
          <span className="text-white/80 text-xs tracking-[0.2em] uppercase font-accent">Premium Budget Luxury in Lagos</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 text-shadow-hero">
          <Typewriter
            options={{
              strings: ['Your Elevated Escape in Lagos', 'Luxury Meets Comfort', 'Your Home Away From Home'],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 40,
              wrapperClassName: 'text-white',
              cursorClassName: 'text-gold-400'
            }}
          />
        </h1>

        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          Experience premium budget comfort and hospitality at Ojodu Berger. From cozy standard stays to luxury serviced apartments, discover your perfect home away from home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            to="/booking" 
            className="btn-primary bg-gold-400 hover:bg-gold-500 text-navy-900 px-10 py-4 rounded-full text-base font-semibold tracking-wide inline-flex items-center gap-2"
          >
            <i className="fas fa-calendar-check"></i>Book Your Stay
          </Link>
          <Link 
            to="/#rooms" 
            className="btn-secondary border-2 border-white/30 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide inline-flex items-center gap-2 hover:border-gold-400"
          >
            <i className="fas fa-bed"></i>Explore Suites
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-gold-400 font-bold">4.9</p>
            <p className="text-white/60 text-xs sm:text-sm mt-1 font-accent">Guest Rating</p>
          </div>
          <div className="text-center border-x border-white/10">
            <p className="font-display text-3xl sm:text-4xl text-gold-400 font-bold">24/7</p>
            <p className="text-white/60 text-xs sm:text-sm mt-1 font-accent">Power & Service</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-gold-400 font-bold">5k+</p>
            <p className="text-white/60 text-xs sm:text-sm mt-1 font-accent">Happy Guests</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
