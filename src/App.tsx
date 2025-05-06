import React from 'react';
import { Bot } from 'lucide-react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MainContent } from './components/layout/MainContent';
import { ChatWindow } from './components/chat/ChatWindow';
import { useChatStore } from './store/useChatStore';

function App() {
  const { toggleChat, isOpen } = useChatStore();

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <MainContent />
      </div>
      <ChatWindow />
      
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 group"
        >
          <div className="flex flex-col items-center">
            <Bot size={24} className="transition-transform group-hover:scale-110" />
            <span className="text-[8px] font-medium -mt-1">IA</span>
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}
    </div>
  );
}

export default App;