// src/components/Board.js
import React from 'react';
import Column from './Column';

const Board = () => {
  return (
    <div className="flex space-x-4 p-4 h-full">
      <Column title="To Do" />
      <Column title="In Progress" />
      <Column title="Done" />
    </div>
  );
};

export default Board;
