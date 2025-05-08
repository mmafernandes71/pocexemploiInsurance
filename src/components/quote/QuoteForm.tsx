import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useQuoteStore } from '../../store/useQuoteStore';
import { Atom } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const { formData, updateFormData, resetForm, toggleModal } = useQuoteStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    resetForm();
    toggleModal();
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .slice(0, 14);
  };

  const formatCurrency = (value: string) => {
    let numbers = value.replace(/\D/g, '');
    numbers = (parseInt(numbers) / 100).toFixed(2);
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(parseFloat(numbers));
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    updateFormData({ cpf: formatted });
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value.replace(/\D/g, '');
    const numberValue = parseInt(value) / 100;
    updateFormData({ [field]: numberValue });
  };

  const formatDecimal = (value: number | undefined, decimals: number = 2) => {
    if (!value) return '';
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };

  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value.replace(',', '.');
    updateFormData({ [field]: parseFloat(value) || 0 });
  };

  const getCurrencyValue = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const calculateIMC = () => {
    if (formData.peso && formData.altura) {
      return (formData.peso / (formData.altura * formData.altura)).toFixed(1);
    }
    return '';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white">
            <Atom className="w-7 h-7" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-semibold text-2xl">Nova Cotação</div>
            <div className="text-orange-500 text-sm font-medium">Portal do Corretor</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.cpf}
                onChange={handleCPFChange}
                maxLength={14}
                placeholder="000.000.000-00"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Proponente</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.proponente}
                onChange={(e) => updateFormData({ proponente: e.target.value.slice(0, 60) })}
                maxLength={60}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estado Civil</label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.estadoCivil}
                onChange={(e) => updateFormData({ estadoCivil: e.target.value })}
                required
              >
                <option value="">Selecione</option>
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="divorciado">Divorciado(a)</option>
                <option value="viuvo">Viúvo(a)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Profissão</label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.profissao}
                onChange={(e) => updateFormData({ profissao: e.target.value })}
                required
              >
                <option value="">Selecione</option>
                <option value="MEDICO">Médico</option>
                <option value="PROFESSOR">Professor</option>
                <option value="ADVOGADO">Advogado</option>
                <option value="MOTOBOY">Motoboy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">UF</label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.uf}
                onChange={(e) => updateFormData({ uf: e.target.value })}
                required
              >
                <option value="">Selecione</option>
                {[
                  ["AC", "Acre"], ["AL", "Alagoas"], ["AP", "Amapá"], ["AM", "Amazonas"],
                  ["BA", "Bahia"], ["CE", "Ceará"], ["DF", "Distrito Federal"],
                  ["ES", "Espírito Santo"], ["GO", "Goiás"], ["MA", "Maranhão"],
                  ["MT", "Mato Grosso"], ["MS", "Mato Grosso do Sul"], ["MG", "Minas Gerais"],
                  ["PA", "Pará"], ["PB", "Paraíba"], ["PR", "Paraná"], ["PE", "Pernambuco"],
                  ["PI", "Piauí"], ["RJ", "Rio de Janeiro"], ["RN", "Rio Grande do Norte"],
                  ["RS", "Rio Grande do Sul"], ["RO", "Rondônia"], ["RR", "Roraima"],
                  ["SC", "Santa Catarina"], ["SP", "São Paulo"], ["SE", "Sergipe"],
                  ["TO", "Tocantins"]
                ].map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Número de Filhos</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.numeroFilhos || ''}
                onChange={(e) => updateFormData({ numeroFilhos: parseInt(e.target.value) })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
              <input
                type="text"
                inputMode="decimal"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formatDecimal(formData.peso, 1)}
                onChange={(e) => handleDecimalChange(e, 'peso')}
                placeholder="70,5"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Altura (m)</label>
              <input
                type="text"
                inputMode="decimal"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formatDecimal(formData.altura, 2)}
                onChange={(e) => handleDecimalChange(e, 'altura')}
                placeholder="1,75"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">IMC</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-50"
                value={calculateIMC()}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sexo</label>
              <div className="flex gap-4 border border-gray-300 rounded-lg p-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sexo"
                    value="M"
                    checked={formData.sexo === 'M'}
                    onChange={(e) => updateFormData({ sexo: e.target.value })}
                    className="form-radio text-orange-500 focus:ring-orange-500 h-4 w-4"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700">Masculino</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sexo"
                    value="F"
                    checked={formData.sexo === 'F'}
                    onChange={(e) => updateFormData({ sexo: e.target.value })}
                    className="form-radio text-orange-500 focus:ring-orange-500 h-4 w-4"
                  />
                  <span className="ml-2 text-sm text-gray-700">Feminino</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fumante</label>
              <div className="flex gap-4 border border-gray-300 rounded-lg p-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="fumante"
                    value="false"
                    checked={!formData.fumante}
                    onChange={(e) => updateFormData({ fumante: e.target.value === 'true' })}
                    className="form-radio text-orange-500 focus:ring-orange-500 h-4 w-4"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700">Não</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="fumante"
                    value="true"
                    checked={formData.fumante}
                    onChange={(e) => updateFormData({ fumante: e.target.value === 'true' })}
                    className="form-radio text-orange-500 focus:ring-orange-500 h-4 w-4"
                  />
                  <span className="ml-2 text-sm text-gray-700">Sim</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Renda</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={getCurrencyValue(formData.renda)}
                onChange={(e) => handleCurrencyChange(e, 'renda')}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cobertura Básica</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={getCurrencyValue(formData.obrigatorioVlrCobBasica)}
                onChange={(e) => handleCurrencyChange(e, 'obrigatorioVlrCobBasica')}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cobertura Funeral</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={getCurrencyValue(formData.opcionalVlrCobFuneral)}
                onChange={(e) => handleCurrencyChange(e, 'opcionalVlrCobFuneral')}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cobertura Morte</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={getCurrencyValue(formData.opcionalVlrCobMorte)}
                onChange={(e) => handleCurrencyChange(e, 'opcionalVlrCobMorte')}
                required
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={toggleModal}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Voltar
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
            >
              Calcular
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};