import React, { useState } from 'react';

const InviteMembers = ({onClose} ) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInvite = () => {
    
    // Aquí iría la lógica para enviar la invitación
    alert(`Invitación enviada a: ${email}`);
    setEmail('');

  };

  const generateInviteLink = () => {
    // Genera un código aleatorio para el enlace de invitación
    const randomCode = Math.random().toString(36).substring(2, 15); 
    // Genera el enlace de invitación con el código aleatorio
    const inviteLink = `https://miapp.com/invitacion?codigo=${randomCode}`;
    
    // Muestra una alerta con el enlace generado
    alert(`Link de invitación generado: ${inviteLink}`);
  
    // Copia el enlace generado al portapapeles
    navigator.clipboard.writeText(inviteLink).then(() => {
      // Muestra una alerta indicando que el enlace se ha copiado al portapapeles
      alert('Enlace copiado al portapapeles');
    });
  };
  



  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
      <div className='flex flex-row '>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Invitar al espacio de trabajo</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-800 focus:outline-none ml-auto">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-gray-700 mr-2">Miembros</span>
        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 5a1 1 0 00-1 1v3H6a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6a1 1 0 00-1-1z" />
          </svg>
        </button>
      </div>
      <p className="text-gray-600 mb-4">Invita a tu equipo al espacio de trabajo compartiendo el enlace o enviando una invitación por correo electrónico.</p>
      <div className="flex items-center mb-4">
        <button onClick={generateInviteLink} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none">Generar link</button>
      </div>
      <div className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Correo electrónico"
          className="border border-gray-300 p-2 rounded mr-2 flex-grow focus:outline-none focus:border-blue-500"
        />
        <button onClick={handleInvite} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none">
          Enviar invitación
        </button>
      </div>
    </div>
  );
};

export default InviteMembers;
