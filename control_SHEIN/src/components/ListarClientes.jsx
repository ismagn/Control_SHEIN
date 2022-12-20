import React from 'react'
import Cliente from './Cliente'

function ListarClientes({setModalClientes,clientes,setInfoCliente,setIdCliente,mostrarInfoCliente,eliminarCliente,idFecha,setValidClientes,MetodoEditarCliente}) {

    const ClientesFecha = clientes.filter(i=>i.idFecha == idFecha)
    
    return (
        <div>
            <div className=''>
                <div className='bg-white'>
                <button className='bg-pink-500 rounded-md text-white m-2 p-1'
                onClick={()=>setValidClientes(false)}
                >Atras</button>
                </div>
                <h2 className=' mt-2  text-pink-500 text-center font-bold text-2xl opacity-80'>CLIENTES</h2>
                <p className='text-center text-pink-400 text-sm font-bold opacity-10 animate-pulse'>--Desliza para Editar o Eliminar--</p>
                <div className='h-96 overflow-y-auto'>
                {ClientesFecha.map((i)=>(
                    
                    <Cliente
                    i={i} 
                    key={i.id}
                    setInfoCliente={setInfoCliente}
                    setIdCliente={setIdCliente}
                    mostrarInfoCliente={mostrarInfoCliente}
                    eliminarCliente={eliminarCliente}
                    MetodoEditarCliente={MetodoEditarCliente}
                    />
                    
                ))
                    
                }
                </div>
            </div>

            <div className='bg-pink-500 animate-pulse  cursor-pointer mx-auto p-2 rounded-md mt-2 w-36 text-center'
            onClick={()=>setModalClientes(true)}
            >
                <input className='text-md text-white cursor-pointer font-semibold' type="button" value="Añadir Cliente" />
            </div>
        </div>
    )
}

export default ListarClientes
