import React from 'react';
function SusTableroNav(){
    return(
        <div className='m-1.5'>
            <div className='flex flex-row items-center py-1 pl-3'>
                <h2 className="mt-4 text-[var(--dynamic-text)] text-sm 
                tracking-tighter 
                
                leading-6 font-semibold flex-1 
                m-0 overflow-hidden text-ellipsis whitespace-nowrap text-white">
                    Sus tableros
                </h2>
                <div className='flex pr-0.5'>
                    <button className="inline-block w-0 h-6 mx-1.5 py-[3px] px-1 pb-[2px] bg-transparent">
                        <img src='/TresPuntos'/>


                    </button>
                    <button className='  pr-1.5 bg-transparent ml-auto'>
                        <img className= 'mt-4 w-4 h-4' src='/mas.svg'/>

                    </button>

                </div>
                

            </div>
            <ul className='block py-0.5 '>
                <div>
                    <li className='flex fle-row relative h-12 p-4'>
                        <div className='flex relative flex-row items-center aling-center w-6 h-5 pr-2 '></div>
                        <a>text</a>

                    </li>
                </div>

            </ul>

        </div>
    )
}
export default SusTableroNav