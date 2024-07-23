import React from 'react';
import FaqItem from './FaqItem'; // Importe o componente FAQItem

const Faq = () => {
  const faqData = [
    {
      question: 'Como faço para abrir uma conta?',
      answer: 'Para abrir uma conta, você precisa seguir os seguintes passos...',
    },
    {
      question: 'Quais são os métodos de pagamento aceitos?',
      answer: 'Aceitamos os seguintes métodos de pagamento: Cartão de crédito, transferência bancária...',
    },
    {
      question: 'Qual é o prazo de entrega dos produtos?',
      answer: 'O prazo de entrega varia conforme a sua localização e o método de envio selecionado...',
    },
  ];

  return (
    <div>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;
