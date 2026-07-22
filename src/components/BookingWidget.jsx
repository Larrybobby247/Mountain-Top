import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';

const BookingWidget = () => {
  const navigate = useNavigate();
  const { updateBooking } = useBooking();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1 Guest',
    roomType: 'Standard Room'
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate nights
    let nights = 1;
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const diffTime = Math.abs(checkOutDate - checkInDate);
      nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    }

    updateBooking({
      ...formData,
      nights
    });

    navigate('/booking');
  };

  return (
    <section id="booking" className="relative z-20 -mt-20 px-4">
      <div className="max-w-5xl mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="booking-widget glass-dark rounded-2xl p-6 sm:p-8 shadow-2xl gold-glow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-1">
              <label className="block text-gold-400 text-xs tracking-wider uppercase mb-2 font-medium font-accent">Check In</label>
              <div className="relative">
                <i className="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"></i>
                <input 
                  type="date" 
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="input-luxury w-full bg-navy-800/50 text-white rounded-xl py-3 pl-10 pr-4 text-sm"
                  required
                />
              </div>
            </div>
            <div className="lg:col-span-1">
              <label className="block text-gold-400 text-xs tracking-wider uppercase mb-2 font-medium font-accent">Check Out</label>
              <div className="relative">
                <i className="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"></i>
                <input 
                  type="date" 
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="input-luxury w-full bg-navy-800/50 text-white rounded-xl py-3 pl-10 pr-4 text-sm"
                  required
                />
              </div>
            </div>
            <div className="lg:col-span-1">
              <label className="block text-gold-400 text-xs tracking-wider uppercase mb-2 font-medium font-accent">Guests</label>
              <div className="relative">
                <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"></i>
                <select 
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input-luxury w-full bg-navy-800/50 text-white rounded-xl py-3 pl-10 pr-4 text-sm appearance-none cursor-pointer"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 text-xs pointer-events-none"></i>
              </div>
            </div>
            <div className="lg:col-span-1">
              <label className="block text-gold-400 text-xs tracking-wider uppercase mb-2 font-medium font-accent">Room Type</label>
              <div className="relative">
                <i className="fas fa-bed absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"></i>
                <select 
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="input-luxury w-full bg-navy-800/50 text-white rounded-xl py-3 pl-10 pr-4 text-sm appearance-none cursor-pointer"
                >
                  <option>Standard Room</option>
                  <option>Executive Suite</option>
                  <option>Luxury Studio</option>
                  <option>Premium Suite</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 text-xs pointer-events-none"></i>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-end">
              <button 
                type="submit"
                className="btn-primary w-full bg-gold-400 hover:bg-gold-500 text-navy-900 py-3 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2"
              >
                <i className="fas fa-search"></i>Check Availability
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingWidget;
