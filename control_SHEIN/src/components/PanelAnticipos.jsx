import React from 'react'
import { useState } from 'react'
import ModalAnticipo from './ModalAnticipo'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function PanelAnticipos({total,setModalAnticipo,restante,mostrarAnticipo,borrarAnticipo,porcentaje}) {
    

    return (
        <div className='mx-2 lg:w-2/5 lg:mx-auto bg-slate-50 shadow-lg rounded-xl'>
        <div className='h-30 lg:h-56 mt-2 mx-5  grid grid-cols-2 text-center'>
        <div className='grafica my-auto py-1 w-3/5 md:w-2/6 lg:w-3/5 mx-auto font-bold '>
            <CircularProgressbar
                value={porcentaje}
                text={`${porcentaje >= 100 ? "liquidado" : "Abonado:  %"+porcentaje} `}
                counterClockwise={true}
                circleRatio={1}
                styles={{
                    path:{
                        stroke: porcentaje > 100 ? 'rgb(235, 0, 0)' :'rgb(241, 114, 233)',
                       
                    },
                    text:{
                        fill: porcentaje > 100 ? 'rgb(235, 0, 0)' :'rgb(241, 114, 233)',
                        fontSize: '8px'
                    },

                }}
            />
        </div>
            <div className='my-auto lg:bg-pink-100 p-2 lg:mr-10 rounded-xl text-start'>
                <h2 className='font-bold text-sm '>TOTAL: <span className='text-green-600'>$ {total}</span> </h2>
                <h2 className='font-bold text-sm'>ANTICIPO: <span className='text-green-600'>$ {mostrarAnticipo}</span> </h2>
                <h2 className='font-bold text-sm' >RESTANTE: <span className='text-red-600'>$ {restante}</span></h2>
            </div>
        </div>
        <div className='w-full text-center'>
            <button className='p-2 bg-purple-500 rounded-xl m-1 text-white'
            onClick={()=>setModalAnticipo(true)}
            >Añadir Anticipo</button>
            
            
                <button className='bg-red-600 text-white p-2 rounded-xl'
                onClick={borrarAnticipo}
                >Borrar Anticipo</button>
                
        </div>
        
        </div>
    )
}

export default PanelAnticipos
