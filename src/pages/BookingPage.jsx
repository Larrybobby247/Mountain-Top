import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';

const BookingPage = () => {
  const navigate = useNavigate();
  const { bookingData, updateBooking, generateBookingRef, roomPrices, calculateTotal } = useBooking();
  const [step, setStep] = useState(1);
  const [customerData, setCustomerData] = useState({
    fullName: bookingData.fullName || '',
    email: bookingData.email || '',
    phone: bookingData.phone || '',
    specialRequests: bookingData.specialRequests || ''
  });

  const accountDetails = {
    bankName: 'First Bank of Nigeria',
    accountName: 'Mountain Top Suites and Apartments Ltd',
    accountNumber: '0123456789',
    sortCode: 'FBNINGLA'
  };

  const handleCustomerChange = (e) => {
    setCustomerData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    if (step === 3) {
      updateBooking({ ...customerData });
    }
    if (step === 4) {
      const ref = generateBookingRef();
      updateBooking({ bookingRef: ref });
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const sendToWhatsApp = () => {
    const total = calculateTotal();
    const message = `*Mountain Top Suites and Apartments - Booking Inquiry*%0A%0A` +
      `*Booking Reference:* ${bookingData.bookingRef}%0A` +
      `*Guest Name:* ${customerData.fullName}%0A` +
      `*Email:* ${customerData.email}%0A` +
      `*Phone:* ${customerData.phone}%0A%0A` +
      `*Booking Details:*%0A` +
      `• Check-in: ${bookingData.checkIn}%0A` +
      `• Check-out: ${bookingData.checkOut}%0A` +
      `• Nights: ${bookingData.nights}%0A` +
      `• Guests: ${bookingData.guests}%0A` +
      `• Room Type: ${bookingData.roomType}%0A` +
      `• Total Amount: N${total.toLocaleString()}%0A%0A` +
      `*Special Requests:* ${customerData.specialRequests || 'None'}%0A%0A` +
      `I have made payment and am sending my receipt. Please confirm my booking.`;

    window.open(`https://wa.me/2348138519792?text=${message}`, '_blank');
  };

  const ProgressBar = () => (
    <div className="flex items-center justify-center gap-1 mb-8 flex-wrap">
      {[1, 2, 3, 4, 5].map((s) => (
        <div key={s} className="flex items-center gap-1">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
            s < step ? 'bg-gold-400 text-navy-900' : 
            s === step ? 'bg-navy-900 text-gold-400 ring-2 ring-gold-400' : 
            'bg-navy-200 text-navy-500'
          }`}>
            {s < step ? <i className="fas fa-check text-xs"></i> : s}
          </div>
          {s < 5 && <div className={`w-6 sm:w-8 h-0.5 ${s < step ? 'bg-gold-400' : 'bg-navy-200'}`}></div>}
        </div>
      ))}
    </div>
  );

  const Step1Dates = () => (
    <div className="space-y-6">
      <h3 className="font-display text-2xl font-bold text-navy-900 text-center">Select Your Dates</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Check In Date</label>
          <input 
            type="date" 
            value={bookingData.checkIn}
            onChange={(e) => updateBooking({ checkIn: e.target.value })}
            className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm font-body"
          />
        </div>
        <div>
          <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Check Out Date</label>
          <input
  type="date"
  value={bookingData.checkOut}
  min={bookingData.checkIn}
  onChange={(e) => updateBooking({ checkOut: e.target.value })}
  className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm font-body"
/>
        </div>
      </div>

      {bookingData.checkIn && bookingData.checkOut && (
        <div className="bg-gold-50 rounded-xl p-4 text-center border border-gold-200">
          <p className="text-gold-600 font-semibold font-body">
            <i className="fas fa-moon mr-2"></i>
            Total Nights: {bookingData.nights}
          </p>
        </div>
      )}
    </div>
  );

  const Step2Room = () => (
    <div className="space-y-6">
      <h3 className="font-display text-2xl font-bold text-navy-900 text-center">Choose Your Room</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(roomPrices).map(([room, price]) => (
          <div 
            key={room}
            onClick={() => updateBooking({ roomType: room })}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
              bookingData.roomType === room 
                ? 'border-gold-400 bg-gold-50 shadow-lg' 
                : 'border-navy-100 bg-white hover:border-gold-200'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-display font-bold text-navy-900">{room}</h4>
              {bookingData.roomType === room && <i className="fas fa-check-circle text-gold-400 text-xl"></i>}
            </div>
            <p className="text-gold-500 font-bold text-lg">N{price.toLocaleString()}<span className="text-navy-400 text-sm font-normal">/night</span></p>
          </div>
        ))}
      </div>
    </div>
  );

  const Step3Customer = () => (
    <div className="space-y-6">
      <h3 className="font-display text-2xl font-bold text-navy-900 text-center">Your Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={customerData.fullName}
            onChange={handleCustomerChange}
            placeholder="John Doe"
            className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm font-body"
            required
          />
        </div>
        <div>
          <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={customerData.email}
            onChange={handleCustomerChange}
            placeholder="john@example.com"
            className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm font-body"
            required
          />
        </div>
        <div>
          <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            value={customerData.phone}
            onChange={handleCustomerChange}
            placeholder="+234 800 000 0000"
            className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm font-body"
            required
          />
        </div>
        <div>
          <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Special Requests (Optional)</label>
          <textarea 
            name="specialRequests"
            value={customerData.specialRequests}
            onChange={handleCustomerChange}
            rows="3"
            placeholder="Any special requirements..."
            className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm resize-none font-body"
          ></textarea>
        </div>
      </div>
    </div>
  );

  const Step4Payment = () => (
    <div className="space-y-6">
      <h3 className="font-display text-2xl font-bold text-navy-900 text-center">Payment Details</h3>
      <div className="bg-navy-900 rounded-2xl p-8 text-white">
        <div className="text-center mb-6">
          <i className="fas fa-university text-gold-400 text-4xl mb-4"></i>
          <h4 className="font-display text-xl font-bold mb-2">Bank Transfer</h4>
          <p className="text-white/60 text-sm font-body">Please make payment to the account below to confirm your booking</p>
        </div>

        <div className="space-y-4 bg-white/5 rounded-xl p-6">
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm font-body">Bank Name</span>
            <span className="font-semibold font-body">{accountDetails.bankName}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm font-body">Account Name</span>
            <span className="font-semibold font-body">{accountDetails.accountName}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm font-body">Account Number</span>
            <span className="font-semibold font-mono text-gold-400">{accountDetails.accountNumber}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-white/60 text-sm font-body">Sort Code</span>
            <span className="font-semibold font-body">{accountDetails.sortCode}</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gold-400/10 rounded-xl border border-gold-400/20">
          <p className="text-gold-400 text-sm text-center font-body">
            <i className="fas fa-info-circle mr-2"></i>
            Total Amount to Pay: <span className="font-bold text-lg">N{calculateTotal().toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
  );

  const Step5Summary = () => (
    <div className="space-y-6">
      <h3 className="font-display text-2xl font-bold text-navy-900 text-center">Booking Summary</h3>

      <div className="bg-white rounded-2xl shadow-lg border border-navy-100/50 p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-receipt text-gold-600 text-2xl"></i>
          </div>
          <p className="text-navy-400 text-sm font-body">Booking Reference</p>
          <p className="font-display text-2xl font-bold text-navy-900">{bookingData.bookingRef}</p>
        </div>

        <div className="space-y-3 border-t border-navy-100 pt-6">
          <div className="flex justify-between py-2">
            <span className="text-navy-500 text-sm font-body">Guest Name</span>
            <span className="font-semibold text-navy-900 font-body">{customerData.fullName}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-navy-500 text-sm font-body">Email</span>
            <span className="font-semibold text-navy-900 font-body">{customerData.email}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-navy-500 text-sm font-body">Phone</span>
            <span className="font-semibold text-navy-900 font-body">{customerData.phone}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-navy-500 text-sm font-body">Check In</span>
            <span className="font-semibold text-navy-900 font-body">{bookingData.checkIn || 'Not selected'}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-navy-500 text-sm font-body">Check Out</span>
            <span className="font-semibold text-navy-900 font-body">{bookingData.checkOut || 'Not selected'}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-navy-500 text-sm font-body">Nights</span>
            <span className="font-semibold text-navy-900 font-body">{bookingData.nights}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-navy-500 text-sm font-body">Room Type</span>
            <span className="font-semibold text-navy-900 font-body">{bookingData.roomType}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-navy-500 text-sm font-body">Guests</span>
            <span className="font-semibold text-navy-900 font-body">{bookingData.guests}</span>
          </div>
        </div>

        <div className="border-t-2 border-gold-400 mt-6 pt-6">
          <div className="flex justify-between items-center">
            <span className="font-display text-lg font-bold text-navy-900">Total Amount</span>
            <span className="font-display text-2xl font-bold text-gold-500">N{calculateTotal().toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
          <p className="text-green-700 text-sm text-center font-body">
            <i className="fas fa-check-circle mr-2"></i>
            Please send your payment receipt via WhatsApp to complete your booking
          </p>
        </div>

        <button 
          onClick={sendToWhatsApp}
          className="btn-primary w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-base tracking-wide flex items-center justify-center gap-2"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          Send Booking Details & Receipt via WhatsApp
        </button>

        <button 
          onClick={() => navigate('/')}
          className="w-full bg-navy-100 hover:bg-navy-200 text-navy-700 py-3 rounded-xl font-semibold text-sm transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  const steps = [Step1Dates, Step2Room, Step3Customer, Step4Payment, Step5Summary];
  const CurrentStep = steps[step - 1];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-2">Book Your Stay</h1>
          <p className="text-navy-500 font-body">Complete the steps below to reserve your room</p>
        </div>

        <ProgressBar />

        <div className="bg-white rounded-2xl shadow-lg border border-navy-100/50 p-6 sm:p-8">
          <CurrentStep />

          {step < 5 && (
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button 
                  onClick={handleBack}
                  className="flex-1 bg-navy-100 hover:bg-navy-200 text-navy-700 py-3 rounded-xl font-semibold text-sm transition"
                >
                  <i className="fas fa-arrow-left mr-2"></i>Back
                </button>
              )}
              <button 
                onClick={handleNext}
                className="btn-primary flex-1 bg-gold-400 hover:bg-gold-500 text-navy-900 py-3 rounded-xl font-semibold text-sm"
              >
                {step === 4 ? 'Confirm & Review' : 'Continue'}<i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
