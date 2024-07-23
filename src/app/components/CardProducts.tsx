import React from 'react';

const CardProducts = ({ title, description, value, type }) => {
  return (
    <div className="border rounded-md p-4 mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-blue-600 font-bold">{value}</span>
        <span className="text-sm text-gray-500">{type}</span>
      </div>
    </div>
  );
};

const MockData = [
  {
    title: 'Product 1',
    description: 'Description for Product 1',
    value: '$100',
    type: 'Type A',
  },
  {
    title: 'Product 2',
    description: 'Description for Product 2',
    value: '$120',
    type: 'Type B',
  },
  {
    title: 'Product 3',
    description: 'Description for Product 3',
    value: '$80',
    type: 'Type C',
  },
  {
    title: 'Product 4',
    description: 'Description for Product 4',
    value: '$150',
    type: 'Type A',
  },
  {
    title: 'Product 5',
    description: 'Description for Product 5',
    value: '$90',
    type: 'Type B',
  },
  {
    title: 'Product 6',
    description: 'Description for Product 6',
    value: '$110',
    type: 'Type C',
  },
];

const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {MockData.map((product, index) => (
        <CardProducts
          key={index}
          title={product.title}
          description={product.description}
          value={product.value}
          type={product.type}
        />
      ))}
    </div>
  );
};

export default ProductsList;
