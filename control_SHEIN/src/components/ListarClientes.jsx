import React from 'react'
import Cliente from './Cliente'

function ListarClientes({setModalClientes,clientes,setInfoCliente,setIdCliente,mostrarInfoCliente,eliminarCliente}) {
    return (
        <div>
            <div className='  h-screen'>
                <h2 className='m-5 text-center font-bold text-2xl opacity-50'>CLIENTES</h2>
                {clientes.map((i)=>(
                    <Cliente
                    i={i} 
                    key={i.id}
                    setInfoCliente={setInfoCliente}
                    setIdCliente={setIdCliente}
                    mostrarInfoCliente={mostrarInfoCliente}
                    eliminarCliente={eliminarCliente}
                    />
                ))
                    
                }
                
            </div>

            <div className='bg-pink-500 fixed cursor-pointer bottom-10 right-10 rounded-full w-10 text-center'>
                <input className='text-4xl text-white cursor-pointer' type="button" value="+" 
                onClick={()=>setModalClientes(true)}
                />
            </div>
        </div>
    )
}

export default ListarClientes