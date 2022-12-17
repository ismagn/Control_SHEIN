import React from 'react'
import MostrarFecha from './MostrarFecha'

function ListarFechas({fechas,mostrarClienteFecha,eliminarFecha,metodoEditarFecha,accionesModalFecha}) {
    return (
        <div>
            <h2 className='text-center m-4 font-bold text-pink-500 text-3xl'>FECHAS</h2>
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
            <div className='bg-pink-500 fixed animate-bounce  cursor-pointer bottom-10 right-10 rounded-full w-10 text-center'>
            <input className='text-4xl text-white cursor-pointer' type="button" value="+" 
            onClick={accionesModalFecha}
            />
        </div>
        </div>
    )
}

export default ListarFechas
