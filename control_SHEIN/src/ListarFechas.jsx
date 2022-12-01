import React from 'react'
import MostrarFecha from './components/MostrarFecha'

function ListarFechas({fechas,setValidClientes,mostrarClienteFecha,setModalFecha}) {
    return (
        <div>
            <h2 className='text-center m-4 font-bold text-pink-500 text-3xl'>FECHAS</h2>
            {fechas.map((i)=>(
                    <MostrarFecha 
                    i={i} 
                    key={i.id}
                    mostrarClienteFecha={mostrarClienteFecha}
                    />
                ))
                    
                }
            <div className='bg-pink-500 fixed cursor-pointer bottom-10 right-10 rounded-full w-10 text-center'>
            <input className='text-4xl text-white cursor-pointer' type="button" value="+" 
            onClick={()=>setModalFecha(true)}
            />
        </div>
        </div>
    )
}

export default ListarFechas
