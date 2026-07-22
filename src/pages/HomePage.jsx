import React from 'react';
import Hero from '../components/Hero';
import BookingWidget from '../components/BookingWidget';
import About from '../components/About';
import Services from '../components/Services';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <BookingWidget />

      <div className="section-divider max-w-4xl mx-auto"></div>
      <About />

      <div className="section-divider max-w-4xl mx-auto"></div>
      <Services />

      <div className="section-divider max-w-4xl mx-auto"></div>
      <Rooms />

      <div className="section-divider max-w-4xl mx-auto"></div>
      <Amenities />

      <div className="section-divider max-w-4xl mx-auto"></div>
      <Experience />

      <div className="section-divider max-w-4xl mx-auto"></div>
      <Gallery />

      <div className="section-divider max-w-4xl mx-auto"></div>
      <Testimonials />

      <div className="section-divider max-w-4xl mx-auto"></div>
      <Contact />
    </main>
  );
};

export default HomePage;
