// src/app/components/CadastroSeguroForm.tsx

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Definição do esquema de validação usando Zod
const schema = z.object({
  competencia: z.string().refine(value => /^\d{2}\/\d{4}$/.test(value), {
    message: 'Formato inválido. Use MM/AAAA',
  }),
  tipoSegurado: z.string().min(1, { message: 'Campo obrigatório' }),
  statusSegurado: z.string().min(1, { message: 'Campo obrigatório' }),
  nomeCompleto: z.string().min(1, { message: 'Campo obrigatório' }),
  dataNascimento: z.string().refine(value => /^\d{2}\/\d{2}\/\d{4}$/.test(value), {
    message: 'Formato inválido. Use DD/MM/AAAA',
  }),
  dataAdesao: z.string().refine(value => /^\d{2}\/\d{2}\/\d{4}$/.test(value), {
    message: 'Formato inválido. Use DD/MM/AAAA',
  }),
  planoContratado: z.string().min(1, { message: 'Campo obrigatório' }),
  capitalSegurado: z.string().min(1, { message: 'Campo obrigatório' }),
  premioTotal: z.string().min(1, { message: 'Campo obrigatório' }),
  sexo: z.string().min(1, { message: 'Campo obrigatório' }),
  estadoCivil: z.string().min(1, { message: 'Campo obrigatório' }),
  cpf: z.string().min(1, { message: 'Campo obrigatório' }),
  endereco: z.string().min(1, { message: 'Campo obrigatório' }),
  inicioVigencia: z.string().refine(value => /^\d{2}\/\d{2}\/\d{4}$/.test(value), {
    message: 'Formato inválido. Use DD/MM/AAAA',
  }),
  fimVigencia: z.string().refine(value => /^\d{2}\/\d{2}\/\d{4}$/.test(value), {
    message: 'Formato inválido. Use DD/MM/AAAA',
  }),
});

type CadastroSeguroFormInputs = {
  competencia: string;
  tipoSegurado: string;
  statusSegurado: string;
  nomeCompleto: string;
  dataNascimento: string;
  dataAdesao: string;
  planoContratado: string;
  capitalSegurado: string;
  premioTotal: string;
  sexo: string;
  estadoCivil: string;
  cpf: string;
  endereco: string;
  inicioVigencia: string;
  fimVigencia: string;
};

const CadastroSeguroForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroSeguroFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<CadastroSeguroFormInputs> = async (data) => {
    try {
    const response = await fetch('/api/seguros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar os dados.');
    }

    console.log('Dados enviados com sucesso.');
    // Limpar formulário ou exibir mensagem de sucesso, se necessário
  } catch (error) {
    console.error('Erro ao enviar os dados:', error.message);
    // Tratar erros de forma apropriada (exibir mensagem de erro, etc.)
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {/* Campo Competência (MM/AAAA) */}
      <div className="">
        <label htmlFor="competencia" className="block text-gray-700 text-sm font-bold mb-2">
          Competência (MM/AAAA)
        </label>
        <input
          {...register('competencia')}
          type="text"
          id="competencia"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.competencia ? 'border-red-500' : ''
          }`}
        />
        {errors.competencia && (
          <p className="text-red-500 text-xs italic">{errors.competencia.message}</p>
        )}
      </div>

      {/* Campo Tipo do Segurado */}
      <div className="mb-4">
        <label htmlFor="tipoSegurado" className="block text-gray-700 text-sm font-bold mb-2">
          Tipo do Segurado
        </label>
        <input
          {...register('tipoSegurado')}
          type="text"
          id="tipoSegurado"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.tipoSegurado ? 'border-red-500' : ''
          }`}
        />
        {errors.tipoSegurado && (
          <p className="text-red-500 text-xs italic">{errors.tipoSegurado.message}</p>
        )}
      </div>

      {/* Campo Status do Segurado */}
      <div className="mb-4">
        <label htmlFor="statusSegurado" className="block text-gray-700 text-sm font-bold mb-2">
          Status do Segurado
        </label>
        <input
          {...register('statusSegurado')}
          type="text"
          id="statusSegurado"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.statusSegurado ? 'border-red-500' : ''
          }`}
        />
        {errors.statusSegurado && (
          <p className="text-red-500 text-xs italic">{errors.statusSegurado.message}</p>
        )}
      </div>

      {/* Campo Nome Completo do Segurado */}
      <div className="mb-4">
        <label htmlFor="nomeCompleto" className="block text-gray-700 text-sm font-bold mb-2">
          Nome Completo do Segurado
        </label>
        <input
          {...register('nomeCompleto')}
          type="text"
          id="nomeCompleto"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.nomeCompleto ? 'border-red-500' : ''
          }`}
        />
        {errors.nomeCompleto && (
          <p className="text-red-500 text-xs italic">{errors.nomeCompleto.message}</p>
        )}
      </div>

      {/* Campo Data de Nascimento */}
      <div className="mb-4">
        <label htmlFor="dataNascimento" className="block text-gray-700 text-sm font-bold mb-2">
          Data de Nascimento (DD/MM/AAAA)
        </label>
        <input
          {...register('dataNascimento')}
          type="text"
          id="dataNascimento"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.dataNascimento ? 'border-red-500' : ''
          }`}
        />
        {errors.dataNascimento && (
          <p className="text-red-500 text-xs italic">{errors.dataNascimento.message}</p>
        )}
      </div>

      {/* Campo Data de Adesão */}
      <div className="mb-4">
        <label htmlFor="dataAdesao" className="block text-gray-700 text-sm font-bold mb-2">
          Data de Adesão (DD/MM/AAAA)
        </label>
        <input
          {...register('dataAdesao')}
          type="text"
          id="dataAdesao"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.dataAdesao ? 'border-red-500' : ''
          }`}
        />
        {errors.dataAdesao && (
          <p className="text-red-500 text-xs italic">{errors.dataAdesao.message}</p>
        )}
      </div>

      {/* Campo Plano Contratado */}
      <div className="mb-4">
        <label htmlFor="planoContratado" className="block text-gray-700 text-sm font-bold mb-2">
          Plano Contratado
        </label>
        <input
          {...register('planoContratado')}
          type="text"
          id="planoContratado"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.planoContratado ? 'border-red-500' : ''
          }`}
        />
        {errors.planoContratado && (
          <p className="text-red-500 text-xs italic">{errors.planoContratado.message}</p>
        )}
      </div>

      {/* Campo Capital Segurado */}
      <div className="mb-4">
        <label htmlFor="capitalSegurado" className="block text-gray-700 text-sm font-bold mb-2">
          Capital Segurado
        </label>
        <input
          {...register('capitalSegurado')}
          type="text"
          id="capitalSegurado"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.capitalSegurado ? 'border-red-500' : ''
          }`}
        />
        {errors.capitalSegurado && (
          <p className="text-red-500 text-xs italic">{errors.capitalSegurado.message}</p>
        )}
      </div>

      {/* Campo Prêmio Total */}
      <div className="mb-4">
        <label htmlFor="premioTotal" className="block text-gray-700 text-sm font-bold mb-2">
          Prêmio Total
        </label>
        <input
          {...register('premioTotal')}
          type="text"
          id="premioTotal"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.premioTotal ? 'border-red-500' : ''
          }`}
        />
        {errors.premioTotal && (
          <p className="text-red-500 text-xs italic">{errors.premioTotal.message}</p>
        )}
      </div>

      {/* Campo Sexo */}
      <div className="mb-4">
        <label htmlFor="sexo" className="block text-gray-700 text-sm font-bold mb-2">
          Sexo
        </label>
        <input
          {...register('sexo')}
          type="text"
          id="sexo"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.sexo ? 'border-red-500' : ''
          }`}
        />
        {errors.sexo && (
          <p className="text-red-500 text-xs italic">{errors.sexo.message}</p>
        )}
      </div>

      {/* Campo Estado Civil */}
      <div className="mb-4">
        <label htmlFor="estadoCivil" className="block text-gray-700 text-sm font-bold mb-2">
          Estado Civil
        </label>
        <input
          {...register('estadoCivil')}
          type="text"
          id="estadoCivil"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.estadoCivil ? 'border-red-500' : ''
          }`}
        />
        {errors.estadoCivil && (
          <p className="text-red-500 text-xs italic">{errors.estadoCivil.message}</p>
        )}
      </div>

      {/* Campo CPF */}
      <div className="mb-4">
        <label htmlFor="cpf" className="block text-gray-700 text-sm font-bold mb-2">
          CPF
        </label>
        <input
          {...register('cpf')}
          type="text"
          id="cpf"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.cpf ? 'border-red-500' : ''
          }`}
        />
        {errors.cpf && (
          <p className="text-red-500 text-xs italic">{errors.cpf.message}</p>
        )}
      </div>

      {/* Campo Endereço */}
      <div className="mb-4">
        <label htmlFor="endereco" className="block text-gray-700 text-sm font-bold mb-2">
          Endereço
        </label>
        <input
          {...register('endereco')}
          type="text"
          id="endereco"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.endereco ? 'border-red-500' : ''
          }`}
        />
        {errors.endereco && (
          <p className="text-red-500 text-xs italic">{errors.endereco.message}</p>
        )}
      </div>

      {/* Campo Início da Vigência */}
      <div className="mb-4">
        <label htmlFor="inicioVigencia" className="block text-gray-700 text-sm font-bold mb-2">
          Início da Vigência (DD/MM/AAAA)
        </label>
        <input
          {...register('inicioVigencia')}
          type="text"
          id="inicioVigencia"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.inicioVigencia ? 'border-red-500' : ''
          }`}
        />
        {errors.inicioVigencia && (
          <p className="text-red-500 text-xs italic">{errors.inicioVigencia.message}</p>
        )}
      </div>

      {/* Campo Fim da Vigência */}
      <div className="mb-4">
        <label htmlFor="fimVigencia" className="block text-gray-700 text-sm font-bold mb-2">
          Fim da Vigência (DD/MM/AAAA)
        </label>
        <input
          {...register('fimVigencia')}
          type="text"
          id="fimVigencia"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.fimVigencia ? 'border-red-500' : ''
          }`}
        />
        {errors.fimVigencia && (
          <p className="text-red-500 text-xs italic">{errors.fimVigencia.message}</p>
        )}
      </div>

      {/* Botão de Envio */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
      </div>
    </form>
  );
};

export default CadastroSeguroForm;
