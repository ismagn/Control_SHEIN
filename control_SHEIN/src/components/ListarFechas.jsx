import React from 'react'
import MostrarFecha from './MostrarFecha'

function ListarFechas({fechas,mostrarClienteFecha,eliminarFecha,metodoEditarFecha,accionesModalFecha}) {
    return (
        <div>
            <h2 className='text-center m-4 font-bold text-pink-500 text-3xl'>FECHAS</h2>
            <p className='text-center my-1 text-pink-400 text-md font-bold opacity-10 animate-pulse'>--Desliza para Editar o Eliminar--</p>
            {fechas.map((i)=>(
                <MostrarFecha 
                i={i} 
                key={i.id}
                mostrarClienteFecha={mostrarClienteFecha}
                eliminarFecha={eliminarFecha}
                metodoEditarFecha={metodoEditarFecha}
                />
                ))   
            }
            
            <div className='fixed animate-bounce  bottom-20 w-full  text-center'>
            <input className='bg-pink-500 text-4xl rounded-full w-12 h-12 text-white cursor-pointer' type="button" value="+" 
            onClick={accionesModalFecha}
            />
        </div>
        </div>
    )
}

export default ListarFechas
