import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext.jsx';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BookingProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </BookingProvider>
  );
};

export default App;
