import React, { useState } from 'react';
import MenuDesplegable from '../SubComponent/MenuDesplegable';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex-shrink-0 mr-auto">
              {/* Logo */}
              <img className="block lg:hidden h-8 w-auto" src="/logo.svg" alt="Workflow logo" />
              <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Workflow logo" />
            </div>
            <div className="block">
              <div className="flex">
                {/* Navbar links */}
                <button className='hidden ss:flex flex-row items-center text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out'>
                  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium leading-5">
                    Espacios de trabajo
                  </a>
                  <img src='flechaAbajo.svg' className='w-4 h-4' />
                </button>
                <button className='hidden md:flex flex-row items-center text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out'>
                  <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5">
                    Reciente
                  </a>
                  <img src='flechaAbajo.svg' className='w-4 h-4' />
                </button>
                <button className='hidden lg:flex flex-row items-center text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out'>
                  <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5">
                    Marcado
                  </a>
                  <img src='flechaAbajo.svg' className='w-4 h-4' />
                </button>
                <button className='hidden 2xl:flex flex-row items-center text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out'>
                  <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5">
                    Plantilla
                  </a>
                  <img src='flechaAbajo.svg' className='w-4 h-4' />
                </button>
                <div className='relative'>
                <button onClick={toggleDropdown} className='flex flex-row 2xl:hidden items-center text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out'>
                  <span className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5'>
                    Menu
                  </span>
                  <img src='flechaAbajo.svg' className={`h-4 w-4 ${isOpen ? 'rotate-0' : 'rotate-0'}`} />
                </button>
                {isOpen &&(
                    
                    <MenuDesplegable/>

                )}
                

                </div>
                <button className='flex flex-row items-center text-white bg-gray-700 focus:outline-none focus:bg-gray-700 ml-3 rounded-md'>
                  <a href="#" className="px-3 rounded-md text-sm font-medium leading-5">
                    Crear
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                className="bg-gray-700 text-white border-2 border-gray-700 rounded-full px-4 py-2 pl-10 focus:outline-none focus:bg-gray-800 focus:border-white transition duration-150 ease-in-out"
                placeholder="Buscar"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-4.835-4.835M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                  <img className="h-8 w-8 rounded-full" src="/profile.jpg" alt="Profile" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
