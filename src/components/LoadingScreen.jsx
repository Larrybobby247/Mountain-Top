import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-navy-950 flex items-center justify-center transition-opacity duration-800">
      <div className="text-center px-4">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-3 border-gold-400/20 rounded-full"></div>
          <div 
            className="absolute inset-0 border-3 border-gold-400 rounded-full border-t-transparent"
            style={{ 
              transform: `rotate(${progress * 3.6}deg)`,
              transition: 'transform 0.1s linear'
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl text-gold-400 font-bold">M</span>
          </div>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-2">
          Mountain Top
        </h1>
        <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-6">
          Suites and Apartments
        </p>

        <div className="w-64 h-1 bg-navy-800 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-navy-400 text-xs mt-3 tracking-wider">
          {progress < 100 ? 'Preparing your experience...' : 'Welcome!'}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
