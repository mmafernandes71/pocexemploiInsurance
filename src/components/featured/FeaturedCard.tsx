import React from 'react';
import { useQuoteStore } from '../../store/useQuoteStore';
import { ArrowRight } from 'lucide-react';

interface FeaturedCardProps {
  imageUrl: string;
  title: string;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({ imageUrl, title }) => {
  const toggleModal = useQuoteStore((state) => state.toggleModal);

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-orange-500 text-xl font-bold tracking-tight px-1">{title}</h3>
      
      <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <button
            onClick={toggleModal}
            className="flex items-center gap-2 bg-white hover:bg-orange-50 text-gray-900 px-3 py-2 rounded-lg font-medium transition-colors group/button text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <span>Nova cotação</span>
            <ArrowRight size={16} className="transition-transform group-hover/button:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};