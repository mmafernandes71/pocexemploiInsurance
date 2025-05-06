import React from 'react';
import { FeaturedCard } from './FeaturedCard';

export const FeaturedSection: React.FC = () => {
  const featuredItems = [
    {
      id: 1,
      imageUrl: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      title: "Seguro de Vida"
    },
    {
      id: 2,
      imageUrl: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg",
      title: "Seguro Residencial"
    },
    {
      id: 3,
      imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg",
      title: "Seguro Saúde"
    },
    {
      id: 4,
      imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      title: "Seguro Auto"
    }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Produtos</h2>
          <p className="mt-1 text-gray-500">Selecione um produto para iniciar uma nova cotação</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
        {featuredItems.map(item => (
          <FeaturedCard 
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};