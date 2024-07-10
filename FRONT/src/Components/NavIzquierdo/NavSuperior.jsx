import React from 'react';
function NavSuperior(  ){
    
    
    
    return (
        
            
                <div className='pt-3 flex flex-col text-white'>
                    <a className=' flex flex-row items-center h-8 pl-4'>
                        <span>

                            <img  className='h-4 w-4  'src='/tablero.svg'/>
                        </span>    
                        <p className="mx-3  text-ellipsis text-sm overflow-hidden whitespace-nowrap ">
                            Tableros

                        </p>
                        
                    </a>
                    <a className=' flex flex-row items-center text-sm h-8 pl-4'>
                        <span>

                            <img  className='w-4 h-4 ' src='/Miembros.svg'/>
                        </span>    
                        <p className="mx-3 text-ellipsis overflow-hidden whitespace-nowrap ">
                            Miembros

                        </p>
                        <button className=' bg-transparent p-4 ml-auto text-white '>
                            <img className='w-4 h-4  ' src='/mas.svg'/>

                        </button>
                        
                    </a>
                    <button className ="flex flex-row p-1.5 px-2.5 items-center">
                        <img src='/ajustes.svg'/>

                        <span  className=' flex-1 ml-1 text-sm'>
                            Ajustes del espacio de trabajo
                         </span>
                        <span>

                            <img className='h-4 w-4' src='/flechaAbajo.svg'/>
                        </span> 

                    </button>

                </div>
            

        


    )
}
export default NavSuperior