import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot } from 'lucide-react';
import { useChatStore } from '../../store/useChatStore';

export const ChatWindow: React.FC = () => {
  const { isOpen, messages, toggleChat, addMessage } = useChatStore();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    addMessage(input, 'user');
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      addMessage('Olá! Sou a IA de atendimento da POC Seguros. Como posso ajudar você hoje?', 'assistant');
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-orange-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-col">
            <Bot size={18} />
            <span className="text-[8px] font-medium -mt-1">IA</span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Atendimento</h3>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
        <button
          onClick={toggleChat}
          className="text-gray-500 hover:text-gray-700 p-2 hover:bg-orange-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};