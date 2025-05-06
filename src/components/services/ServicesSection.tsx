import React from 'react';
import { ServiceCard } from './ServiceCard';
import { 
  FileText, 
  BarChart2, 
  MessageSquare, 
  FolderOpen, 
  Target 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      <ServiceCard
        icon={<FileText size={22} />}
        title="Meus negócios"
        description="Confira suas cotações, propostas e apólices"
      />
      <ServiceCard
        icon={<BarChart2 size={22} />}
        title="Minhas comissões"
        description="Confira suas comissões e detalhe de pagamentos"
      />
      <ServiceCard
        icon={<MessageSquare size={22} />}
        title="Agendamentos"
        description="Gerenciar serviços agendados do segurado"
      />
      <ServiceCard
        icon={<FolderOpen size={22} />}
        title="Biblioteca virtual"
        description="Acesse os materiais e documentos Online"
      />
      <ServiceCard
        icon={<Target size={22} />}
        title="Meus Leads"
        description="Gerenciar a eficiência do ciclo de vendas"
      />
    </div>
  );
};