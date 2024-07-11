import React, { useState } from 'react';
import NavSuperior from './NavSuperior';
import NavMedio from './NavMedio';
import SusTableroNav from './SusTablerosNav';
import NavInferior from './NavInferior';
import InviteMembers from './InviteMember';

function Nav() {
  const [isNav, setIsNav] = useState(true);
  const [showInviteMembers, setShowInviteMembers] = useState(false);

  const changeNav = () => {
    setIsNav(!isNav);
  };

  const toggleInviteMembers = () => {
    setShowInviteMembers(!showInviteMembers);
  };

  return (
    <>
      <nav className={`flex flex-col bg-gradient-to-b from-gray-700 to-gray-800 bg-opacity-90 backdrop-blur-lg w-[260px] min-h-screen transition-transform transform ${isNav ? 'translate-x-0' : '-translate-x-[220px]'}`}>
        <div className='flex items-center min-h-[40px] py-2 px-3 border-b border'>
          <a>
            <div className='h-8 w-8 items-center justify-center overflow-hidden rounded'>
              <div className="bg-gradient-to-r from-pink-700 to-pink-300 flex items-center justify-center h-full w-full text-lg font-bold text-white">
                E
              </div>
            </div>
          </a>
          <div className='flex-1 mr-1 ml-2 text-left'>
            <span className="overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-2">
              <a>
                <p className="inline mb-0 text-ellipsis text-sm font-semibold text-white leading-[1]">
                  Espacio de trabajo de Trello
                </p>
              </a>
            </span>
            <p className="overflow-hidden line-clamp-1 text-ellipsis text-xs break-words text-white">Gratuito</p>
          </div>
          <button onClick={changeNav} className="flex items-center justify-center m-0 p-2 rounded-md bg-transparent cursor-pointer hover:border-white hover:bg-white hover:bg-opacity-50">
            <img className={` text-white inline-block w-3 h-3 transform ${isNav ? 'rotate-90' : '-rotate-90'}`} src="/flecha.png" alt="flecha" />
          </button>
        </div>

        <div className={`flex-1 ${isNav ? 'flex flex-col' : 'hidden'}`}>
          <NavSuperior onToggleInvite={toggleInviteMembers} />
          <NavMedio  />
          <SusTableroNav />
          <div className="mt-auto">
            <NavInferior />
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showInviteMembers && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <InviteMembers onClose={toggleInviteMembers} />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
