import React from 'react';

const BoardInfoPanel = () => {
  return (
    <div className="bg-white bg-opacity-50 border mx-auto rounded-md p-4 shadow-md">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Nombre del Tablero</h2>
        <button className="ml-auto text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <svg className="h-5 w-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM6 0a4 4 0 00-4 4v12a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H6z" clipRule="evenodd"></path>
        </svg>
        3 listas • Actualizado hace 2 horas
      </div>
      <div className="mt-4 text-sm text-gray-700">
        Descripción del tablero o información adicional aquí. Puedes colocar cualquier texto que desees mostrar sobre el tablero.
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">Ver Tablero</button>
      </div>
    </div>
  );
};

export default BoardInfoPanel;
