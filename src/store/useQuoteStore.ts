import { create } from 'zustand';

interface QuoteFormData {
  cpf: string;
  proponente: string;
  estadoCivil: string;
  fumante: boolean;
  numeroFilhos: number;
  obrigatorioVlrCobBasica: number;
  opcionalVlrCobFuneral: number;
  opcionalVlrCobMorte: number;
  profissao: string;
  renda: number;
  sexo: string;
  uf: string;
  peso: number;
  altura: number;
}

interface QuoteState {
  isOpen: boolean;
  formData: QuoteFormData;
  toggleModal: () => void;
  updateFormData: (data: Partial<QuoteFormData>) => void;
  resetForm: () => void;
}

const initialFormData: QuoteFormData = {
  cpf: '',
  proponente: '',
  estadoCivil: '',
  fumante: false,
  numeroFilhos: 0,
  obrigatorioVlrCobBasica: 0,
  opcionalVlrCobFuneral: 0,
  opcionalVlrCobMorte: 0,
  profissao: '',
  renda: 0,
  sexo: '',
  uf: '',
  peso: 0,
  altura: 0
};

export const useQuoteStore = create<QuoteState>((set) => ({
  isOpen: false,
  formData: initialFormData,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),
  resetForm: () => set({ formData: initialFormData })
}));