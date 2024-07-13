// src/components/Column.js
import React from 'react';
import Card from './Card';

const Column = ({ title }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg w-60 h-full">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Column;
