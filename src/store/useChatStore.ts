import { create } from 'zustand';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  toggleChat: () => void;
  addMessage: (content: string, sender: 'user' | 'assistant') => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [],
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  addMessage: (content, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substring(7),
          content,
          sender,
          timestamp: new Date(),
        },
      ],
    })),
}));