import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1 Guest',
    roomType: 'Standard Room',
    nights: 0,
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    totalAmount: 0,
    bookingRef: ''
  });

  const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;

  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const diff = end - start;

  if (diff <= 0) return 0;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const updateBooking = (data) => {
  setBookingData(prev => {
    const updated = { ...prev, ...data };

    updated.nights = calculateNights(
      updated.checkIn,
      updated.checkOut
    );

    return updated;
  });
};

  const generateBookingRef = () => {
    const prefix = 'MTH';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  };

  const roomPrices = {
    'Standard Room': 56925,
    'Executive Suite': 65000,
    'Luxury Studio': 68417,
    'Premium Suite': 120000
  };

  const calculateTotal = () => {
    const price = roomPrices[bookingData.roomType] || 56925;
    return price * (bookingData.nights || 1);
  };

  return (
    <BookingContext.Provider value={{ 
      bookingData, 
      updateBooking, 
      generateBookingRef, 
      roomPrices,
      calculateTotal 
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
