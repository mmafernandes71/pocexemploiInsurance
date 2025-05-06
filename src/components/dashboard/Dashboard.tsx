import React from 'react';
import { Atom } from 'lucide-react';
import { StatisticsSection } from './StatisticsSection';
import { useQuoteStore } from '../../store/useQuoteStore';
import { QuoteModal } from '../quote/QuoteModal';

export const Dashboard: React.FC = () => {
  const toggleModal = useQuoteStore((state) => state.toggleModal);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white">
            <Atom className="w-7 h-7" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-semibold text-2xl">POC - Exemplo</div>
            <div className="text-orange-500 text-sm font-medium">Portal do Corretor</div>
          </div>
        </div>
      </div>
      
      <StatisticsSection />
      <QuoteModal />
    </div>
  );
};