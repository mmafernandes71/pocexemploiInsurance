import React from 'react';
import { Dashboard } from '../dashboard/Dashboard';
import { ServicesSection } from '../services/ServicesSection';
import { FeaturedSection } from '../featured/FeaturedSection';
import { QuoteForm } from '../quote/QuoteForm';
import { useQuoteStore } from '../../store/useQuoteStore';

export const MainContent: React.FC = () => {
  const isOpen = useQuoteStore((state) => state.isOpen);

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="max-w-7xl mx-auto h-[calc(100vh-7rem)] flex flex-col">
        {isOpen ? (
          <QuoteForm />
        ) : (
          <div className="grid grid-rows-[auto_auto_1fr] h-full gap-4">
            <Dashboard />
            <ServicesSection />
            <FeaturedSection />
          </div>
        )}
      </div>
    </main>
  );
};