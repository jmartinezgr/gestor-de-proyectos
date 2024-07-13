import React from 'react';

const MenuDesplegable = () => {
  return (
    <div className=' relative 2xl:hidden '>
      <div className='absolute top-0 left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-10'>
        <button className='block 2xl:hidden w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left'>
          Plantilla
        </button>
        <button className='block lg:hidden w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left'>
          Marcado
        </button>
        <button className='block md:hidden w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left'>
          Reciente
        </button>
        <button className='block ss:hidden w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left'>
          Espacios de trabajo
        </button>
      </div>
    </div>
  );
};

export default MenuDesplegable;
