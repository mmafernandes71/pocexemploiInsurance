import React from 'react';
import { 
  Home, 
  FileText, 
  LayoutDashboard, 
  BarChart2, 
  FolderOpen, 
  MessageSquare, 
  Bot,
  Target
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useChatStore } from '../../store/useChatStore';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  isChat?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick, isChat = false }) => {
  if (isChat) {
    return (
      <li>
        <button 
          onClick={onClick}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="text-orange-600">
              <Bot size={24} strokeWidth={2} />
            </div>
            <span className="text-sm font-medium text-orange-700">{label}</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Online</span>
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
          </div>
        </button>
      </li>
    );
  }

  return (
    <li>
      <button 
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-colors ${
          active 
            ? 'bg-orange-50 text-orange-700 font-medium' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span>{label}</span>
      </button>
    </li>
  );
};

export const Sidebar: React.FC = () => {
  const toggleChat = useChatStore((state) => state.toggleChat);

  return (
    <aside className="w-64 border-r border-gray-200 bg-white hidden md:flex flex-col h-full">
      <div className="p-6">
        <Logo />
      </div>
      
      <nav className="flex-1 px-3 overflow-y-auto">
        <div className="h-px bg-gray-100 mx-3 mb-6"></div>
        
        <div className="mb-6 px-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">NC</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">Nome do Corretor</p>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-gray-100 mx-3 mb-6"></div>
        
        <ul className="space-y-1.5">
          <NavItem 
            icon={<Home size={18} />} 
            label="Início" 
            active 
          />
          <NavItem 
            icon={<FileText size={18} />} 
            label="Meus negócios" 
          />
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
          />
          <NavItem 
            icon={<BarChart2 size={18} />} 
            label="Minhas comissões" 
          />
          <NavItem 
            icon={<FolderOpen size={18} />} 
            label="Biblioteca virtual" 
          />
          <NavItem 
            icon={<MessageSquare size={18} />} 
            label="Agendamentos" 
          />
          <NavItem 
            icon={<Target size={18} />} 
            label="Meus Leads" 
          />
        </ul>
      </nav>
      
      <div className="p-4 mt-auto">
        <NavItem 
          icon={<Bot size={18} />} 
          label="Atendimento"
          onClick={toggleChat}
          isChat={true}
        />
      </div>
    </aside>
  );
};