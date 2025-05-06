import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg hover:shadow-md border border-gray-100 p-5 transition-all hover:border-orange-200 group">
      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};