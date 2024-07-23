import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md p-4 mb-4">
      <button
        className="flex justify-between items-center w-full mb-2 focus:outline-none"
        onClick={toggleOpen}
      >
        <h2 className="text-lg font-bold">{question}</h2>
        <svg
          className={`w-4 h-4 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">{answer}</div>
      )}
    </div>
  );
};

export default FaqItem;
