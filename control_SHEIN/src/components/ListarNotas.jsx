import React from 'react'
import { useState } from 'react'
import MostrarNota from './MostrarNota'

function ListarNotas({cerrarNotas,accionesModalNewNota,notas,totalNotas,eliminarNota,animarNotas}) {
    

    return (
    <>
        <div className={`Panel_notas ${animarNotas && "animarNotas" } bg-purple-400 rounded-2xl shadow-2xl shadow-black fixed w-5/6 h-4/6 bottom-5 left-5 opacity-95`}>
            <div className='fixed w-5/6  bottom-8 left-5 text-center cursor-pointer lg:text-right lg:right-56 rig'>
                <input className='text-2xl rounded-full w-10 h-10  border-4 text-slate-500 cursor-pointer' type="button" value="+" 
                onClick={accionesModalNewNota}
                />
            </div>
            <div className='text-end m-2 '>
                <input className='cursor-pointer  text-white  text-2xl' type="button" value="X" 
                onClick={cerrarNotas}
                />
            </div>

            <div className='w-full text-center'>
                <h2 className='font-bold text-white'>TOTAL: {totalNotas}</h2>
            </div>
        <div className='h h-72 overflow-y-auto m-2'>
        {notas.map(i=>(
            <MostrarNota
            i={i}
            eliminarNota={eliminarNota}
            />
        ))
        
        }
        </div>

            
        </div>
    </>
    )
}

export default ListarNotas
