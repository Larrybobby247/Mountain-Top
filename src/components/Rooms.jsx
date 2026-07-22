import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBooking } from '../context/BookingContext.jsx';

import Room1 from '../assets/standard.jpg'
import Room2 from '../assets/deluxe.jpg'
import Room3 from '../assets/super-deluxe.jpg'
import Room4 from '../assets/twinnie.jpg'
import Room5a from '../assets/executive1.jpg'
import Room5b from '../assets/executive2.jpg'
import Room6a from '../assets/two-bed1.jpg'
import Room6b from '../assets/two-bed2.jpg'
import Room6c from '../assets/two-bed3.jpg'
import Room6d from '../assets/two-bed4.jpg'
import Room7a from '../assets/three-bed1.jpg'
import Room7b from '../assets/three-bed2.jpg'
import Room7c from '../assets/three-bed3.jpg'
import Room7d from '../assets/three-bed4.jpg'
import Room7e from '../assets/three-bed5.jpg'
import Room7f from '../assets/three-bed6.jpg'
import Room8a from '../assets/one-bed1.jpg'
import Room8b from '../assets/one-bed2.jpg'
import Room8c from '../assets/one-bed3.jpg'

const Rooms = () => {
  const sectionRef = useScrollAnimation();
  const { updateBooking } = useBooking();

  const rooms = [
    {
      name: 'Standard',
      subtitle: 'Budget Single Stay',
      price: 40000,
      images: [
        Room1
      ],
      amenities: [
        { icon: 'fas fa-bolt', label: '24/7 Power' },
        { icon: 'fas fa-wifi', label: 'Wi-Fi' },
        { icon: 'fas fa-snowflake', label: 'A/C' }
      ]
    },
    {
      name: 'Deluxe',
      subtitle: 'Comfortable Double Stay',
      price: 40000,
      images: [
        Room2
      ],
      amenities: [
        { icon: 'fas fa-bolt', label: '24/7 Power' },
        { icon: 'fas fa-wifi', label: 'Wi-Fi' },
        { icon: 'fas fa-snowflake', label: 'A/C' }
      ]
    },
    {
      name: 'Super Deluxe',
      subtitle: 'Budget Single Stay',
      price: 50000,
      images: [
        Room3
      ],
      amenities: [
        { icon: 'fas fa-bolt', label: '24/7 Power' },
        { icon: 'fas fa-wifi', label: 'Wi-Fi' },
        { icon: 'fas fa-snowflake', label: 'A/C' }
      ]
    },
    {
      name: 'Twinne Suite',
      subtitle: 'Budget Single Stay',
      price: 65000,
      images: [
        Room4
      ],
      amenities: [
        { icon: 'fas fa-bolt', label: '24/7 Power' },
        { icon: 'fas fa-wifi', label: 'Wi-Fi' },
        { icon: 'fas fa-snowflake', label: 'A/C' }
      ]
    },
    {
      name: 'Executive Suite',
      subtitle: 'Spacious Premium Room',
      price: 70000,
      images: [
        Room5a,
        Room5b,

      ],
      amenities: [
        { icon: 'fas fa-coffee', label: 'Breakfast' },
        { icon: 'fas fa-snowflake', label: 'Fridge' },
        { icon: 'fas fa-bed', label: 'King Bed' }
      ]
    },
    {
      name: 'Two Bedroom Apartment',
      subtitle: 'Serviced 2-Bedroom',
      price: 110000,
      images: [
        Room6a,
        Room6b,
        Room6c,
        Room6d
      ],
      amenities: [
        { icon: 'fas fa-tv', label: 'Smart TV' },
        { icon: 'fas fa-utensils', label: 'Kitchenette' },
        { icon: 'fas fa-paint-brush', label: 'Modern' }
      ]
    },
    {
      name: 'Three Bedroom Apartment',
      subtitle: 'Serviced 3-Bedroom',
      price: 185000,
      images: [
        Room7a,
        Room7b,
        Room7c,
        Room7d,
        Room7e,
        Room7f
      ],
      amenities: [
        { icon: 'fas fa-tv', label: 'Smart TV' },
        { icon: 'fas fa-utensils', label: 'Kitchenette' },
        { icon: 'fas fa-paint-brush', label: 'Modern' }
      ]
    },
    {
      name: '1 Bedroom Apartment',
      subtitle: 'Serviced 1-Bedroom',
      price: 80000,
      images: [
        Room8a,
        Room8b,
        Room8c
      ],
      amenities: [
        { icon: 'fas fa-tv', label: 'Smart TV' },
        { icon: 'fas fa-utensils', label: 'Kitchenette' },
        { icon: 'fas fa-paint-brush', label: 'Modern' }
      ]
    }
  ];

  const RoomCard = ({ room }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(prev => (prev + 1) % room.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [room.images.length]);

    const nextImage = (e) => {
      e.stopPropagation();
      setCurrentImage(prev => (prev + 1) % room.images.length);
    };

    const prevImage = (e) => {
      e.stopPropagation();
      setCurrentImage(prev => (prev - 1 + room.images.length) % room.images.length);
    };

    const handleBookNow = () => {
      updateBooking({ roomType: room.name });
    };

    return (
      <div className="room-card bg-white rounded-2xl overflow-hidden shadow-lg border border-navy-100/50 group scroll-animate">
        <div className="relative h-64 overflow-hidden">
          {room.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={room.name}
              className={`room-img absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                idx === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-navy-900 hover:bg-gold-400 transition z-10 opacity-0 group-hover:opacity-100"
          >
            <i className="fas fa-chevron-left text-xs"></i>
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-navy-900 hover:bg-gold-400 transition z-10 opacity-0 group-hover:opacity-100"
          >
            <i className="fas fa-chevron-right text-xs"></i>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {room.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage ? 'bg-gold-400 w-4' : 'bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Price Badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-sm ${
            room.premium ? 'bg-gold-400' : 'bg-white/90'
          }`}>
            <span className={`font-bold text-sm ${room.premium ? 'text-navy-900' : 'text-navy-900'}`}>
              N{room.price.toLocaleString()}
            </span>
            <span className={`text-xs ${room.premium ? 'text-navy-800' : 'text-navy-500'}`}>/night</span>
          </div>

          {room.premium && (
            <div className="absolute top-4 left-4 bg-navy-900 text-gold-400 px-3 py-1 rounded-full text-xs font-semibold">
              <i className="fas fa-crown mr-1"></i>Premium
            </div>
          )}
        </div>

        <div className="p-6">
          <p className="text-gold-500 text-xs tracking-wider uppercase font-medium mb-1 font-accent">{room.subtitle}</p>
          <h3 className="font-display text-lg font-bold text-navy-900 mb-3">{room.name}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {room.amenities.map((amenity, idx) => (
              <span key={idx} className="bg-navy-50 text-navy-600 text-xs px-3 py-1 rounded-full font-body">
                <i className={`${amenity.icon} mr-1`}></i>{amenity.label}
              </span>
            ))}
          </div>
          <Link 
            to="/booking"
            onClick={handleBookNow}
            className="btn-primary w-full bg-gold-400 hover:bg-gold-500 text-navy-900 py-2.5 rounded-full text-sm font-semibold text-center block"
          >
            Book Now
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section id="rooms" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-3xl"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 scroll-animate">
          <div className="deco-line-center mb-6"></div>
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">Our Accommodations</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Luxury Suites & Rooms</h2>
          <p className="text-navy-500 max-w-xl mx-auto font-body">Choose from our carefully curated selection of rooms and suites, each designed for maximum comfort and style.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
