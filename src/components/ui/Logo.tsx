import React from 'react';
import { Atom } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white">
        <Atom className="w-5 h-5" strokeWidth={2.5} />
      </div>
      <div className="font-semibold text-lg">POC - Exemplo</div>
    </div>
  );
};