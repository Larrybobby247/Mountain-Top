import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import Img1 from '../assets/front-view.jpg'
import Img2 from '../assets/gallary1.jpg'
import Img3 from '../assets/gallary2.jpg'
import Img4 from '../assets/swimming-pool.jpg'
import Img5 from '../assets/gallary3.jpg'
import Img6 from '../assets/gallary5.jpg'
import Img7 from '../assets/gallary6.jpg'
import Img8 from '../assets/reception.jpg'

const Gallery = () => {
  const sectionRef = useScrollAnimation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: Img1, caption: 'Elegant Main Hotel Exterior' },
    { src: Img2, caption: 'Modern Suite Interior Layout' },
    { src: Img3, caption: 'Modern Suite Interior Layout' },
    { src: Img4, caption: 'Sparkling Outdoor Swimming Pool' },
    { src: Img5, caption: 'Fully Equipped Fitness Gym' },
    { src: Img6, caption: 'Cosy In-House Bar & Lounge' },
    { src: Img7, caption: 'Freshly Curated Restaurant Dishes' },
    { src: Img8, caption: 'Luxurious Hotel Reception Area' }
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section id="gallery" className="py-24 sm:py-32 px-4">
        <div ref={sectionRef} className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <div className="deco-line-center mb-6"></div>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">Visual Tour</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Our Gallery</h2>
            <p className="text-navy-500 max-w-xl mx-auto font-body">Take a visual journey through our world-class facilities and stunning spaces.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`gallery-item rounded-2xl cursor-pointer group relative overflow-hidden scroll-animate ${
                  index === 1 ? 'row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className={`w-full object-cover rounded-2xl transition-transform duration-800 ${
                    index === 1 ? 'h-full min-h-[264px]' : 'h-64'
                  }`}
                />
                <div className="gallery-overlay absolute inset-0 bg-navy-900/60 rounded-2xl flex items-center justify-center opacity-0 transition-opacity duration-400">
                  <i className="fas fa-expand text-white text-2xl"></i>
                </div>
                <div className="gallery-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900 to-transparent p-4 rounded-b-2xl transform translate-y-full transition-transform duration-500">
                  <p className="text-white font-display text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-xl flex flex-col"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-4xl hover:text-gold-400 transition z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            onClick={closeLightbox}
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
            <button 
              className="absolute left-4 sm:left-8 text-white text-3xl hover:text-gold-400 transition w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <img 
              src={images[currentImage].src} 
              alt={images[currentImage].caption}
              className="max-w-[85vw] max-h-[70vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-4 sm:right-8 text-white text-3xl hover:text-gold-400 transition w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Caption */}
          <div className="text-center pb-4">
            <p className="text-white font-display text-lg">{images[currentImage].caption}</p>
            <p className="text-white/50 text-sm mt-1">{currentImage + 1} / {images.length}</p>
          </div>

          {/* Thumbnails */}
          <div className="pb-6 px-4">
            <div className="flex gap-3 justify-center overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(index); }}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition ${
                    index === currentImage ? 'border-gold-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={image.src} alt={image.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
