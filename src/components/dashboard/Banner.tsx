import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
  {
    url: "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg",
    alt: "Família feliz em casa",
  },
  {
    url: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg",
    alt: "Casal viajando",
  },
  {
    url: "https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg",
    alt: "Família aproveitando momento ao ar livre",
  },
  {
    url: "https://images.pexels.com/photos/3943883/pexels-photo-3943883.jpeg",
    alt: "Casa segura e protegida",
  }
];

export const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-xl h-56">
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
      ))}
      
      <div className="relative z-10 p-6 flex flex-col h-full justify-center text-white">
        <h2 className="text-3xl font-bold mb-2">Corretor</h2>
        <p className="text-xl max-w-md">
          Mais clientes, menos burocracia — tudo para o corretor vender mais e melhor
        </p>
        <button className="inline-flex items-center text-sm font-medium bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20 transition-colors max-w-fit mt-4">
          Saiba mais
        </button>
      </div>
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button 
          onClick={prevSlide}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};