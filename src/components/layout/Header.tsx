import React, { useState } from 'react';
import { Search, Mail, User, Menu, Home } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={20} />
          </button>
          <div className="md:hidden">
            <Logo />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center rounded-lg bg-gray-50 px-4 py-2.5 w-72 border border-gray-100 focus-within:border-orange-200 focus-within:ring-4 focus-within:ring-orange-50 transition-all">
            <Search size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Buscar"
              className="bg-transparent border-none outline-none text-sm flex-1 placeholder:text-gray-400"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              <Mail size={20} />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-50 rounded-lg p-2.5 transition-colors">
              <User size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="p-4">
            <div className="flex items-center rounded-lg bg-gray-50 px-4 py-2.5 border border-gray-100">
              <Search size={18} className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Buscar"
                className="bg-transparent border-none outline-none text-sm flex-1 placeholder:text-gray-400"
              />
            </div>
          </div>
          <nav className="px-2 pb-3">
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg bg-orange-50 text-orange-700 font-medium">
                  <Home size={18} />
                  <span>Início</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}