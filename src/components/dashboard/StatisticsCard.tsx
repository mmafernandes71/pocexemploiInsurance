import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StatusColorProps {
  primary?: string;
  secondary?: string;
}

interface StatisticsCardProps {
  label: string;
  value: string;
  secondaryValue?: string;
  secondaryLabel?: string;
  statusColor?: StatusColorProps;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ 
  label, 
  value, 
  secondaryValue, 
  secondaryLabel,
  statusColor = { primary: 'blue' }
}) => {
  const getPrimaryColorClass = () => {
    switch (statusColor.primary) {
      case 'green':
        return 'text-green-600';
      case 'red':
        return 'text-red-600';
      case 'yellow':
        return 'text-yellow-600';
      default:
        return 'text-blue-600';
    }
  };
  
  const getSecondaryColorClass = () => {
    switch (statusColor.secondary) {
      case 'green':
        return 'text-green-600';
      case 'red':
        return 'text-red-600';
      case 'yellow':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{label}</h3>
      <div className="flex items-center justify-between">
        <p className={`text-2xl font-bold ${getPrimaryColorClass()}`}>{value}</p>
        <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-full transition-colors">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};