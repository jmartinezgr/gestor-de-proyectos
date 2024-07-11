import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              {/* Icon when menu is closed */}
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              {/* Logo */}
              <img className="block lg:hidden h-8 w-auto" src="/logo.svg" alt="Workflow logo" />
              <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Workflow logo" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                {/* Navbar links */}
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out">Inicio</a>
                <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out">Tableros</a>
                <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out">Plantillas</a>
                <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out">Más</a>
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

