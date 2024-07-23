'use client'

import React from 'react';
import CadastroSeguroForm from '../components/CadastroSeguroForm';

const CadastroSeguroPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Título centralizado */}
      <h1 className="text-xl text-center mb-8">Cadastro de Seguro</h1>

      {/* Formulário com ajuste responsivo dos campos */}
      <div className="max-w-md w-full">
        <CadastroSeguroForm />
      </div>
    </div>
  );
};

export default CadastroSeguroPage;
