import React from 'react'
import { useState } from 'react'
import ModalAnticipo from './ModalAnticipo'

function PanelAnticipos({total,setModalAnticipo,restante,mostrarAnticipo,borrarAnticipo}) {
    

    return (
        <div className='w-full bg-slate-50 shadow-lg'>
        <div className='h-36 mt-2  grid grid-cols-2 text-center '>
            <div className='my-auto'>
                <h2>grafica</h2>
            </div>
            <div className='my-auto '>
                <h2 className='font-bold '>TOTAL: <span className='text-green-600'>$ {total}</span> </h2>
                <h2 className='font-bold '>ANTICIPO: <span className='text-green-600'>$ {mostrarAnticipo}</span> </h2>
                <h2 className='font-bold ' >RESTANTE: <span className='text-red-600'>$ {restante}</span></h2>
            </div>
        </div>
        <div className='w-full text-center'>
            <button className='p-2 bg-pink-500 rounded-xl m-2'
            onClick={()=>setModalAnticipo(true)}
            >Añadir Anticipo</button>
            
            
                <button className='bg-red-600 p-2 rounded-xl'
                onClick={borrarAnticipo}
                >Borrar Anticipo</button>
                
        </div>
        
        </div>
    )
}

export default PanelAnticipos
