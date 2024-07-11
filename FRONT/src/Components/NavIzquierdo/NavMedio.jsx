import React from 'react';
function NavMedio(){
    return(
        <div>
            <div className='mt-1.5 flex flex-col flex-wrap itemse-center  justify-center     '>
                <div className=' flex flex-row items-center py-1 px-3 '>
                <h2 className='text-white'>
                    Vistas del espacio de trabajo 
                </h2>
                </div>

                <ul className='flex  text-white text-sm  '>
                    <div className="flex flex-col left-0 w-[260px] max-w-[260px] list-none justify-center items-center">
                        <li className="flex  flex-row  w-[260px] h-[60]  overflow-hidden items-center pl-4">
                            <img className='h-4 w-4' src='/tabla.svg'/>
                            <span className='mx-3'>Tabla</span>
                            <button className="flex items-center text-white  h-4 w-4  border border-transparent rounded-md shadow-sm text-sm font-medium    ml-auto mr-6">
                           <span className="">•</span><span className="">•</span><span className="">•</span> 
                           </button>


                        </li>
                        <li className="flex flex-row left-0 w-[260px] max-w-[260px] list-none pl-4 pt-2">
                            <img  className='h-4 w-4'src='calendario.svg'/>
                            <span className='mx-3'>Calendario</span>
                            <button className="flex items-center text-white  h-4 w-4  border border-transparent rounded-md shadow-sm text-sm font-medium    ml-auto mr-6">
                           <span className="">•</span><span className="">•</span><span className="">•</span> 
                           </button>


                        </li>

                    </div>

                </ul>

            </div>
        </div>
    )
}
export default NavMedio