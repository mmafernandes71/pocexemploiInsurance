import React from 'react';
import { StatisticsCard } from './StatisticsCard';

export const StatisticsSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatisticsCard 
          label="Cotações" 
          value="25" 
        />
        <StatisticsCard 
          label="Propostas" 
          value="2" 
        />
        <StatisticsCard 
          label="Apólices" 
          value="18" 
          statusColor={{
            primary: 'blue'
          }}
        />
        <StatisticsCard 
          label="Leads" 
          value="12" 
          statusColor={{
            primary: 'green'
          }}
        />
      </div>
    </div>
  );
};