import React from 'react'
import Cliente from './Cliente'

function ListarClientes({setModalClientes,clientes,setInfoCliente,setIdCliente,mostrarInfoCliente,eliminarCliente,idFecha,setValidClientes}) {

    const ClientesFecha = clientes.filter(i=>i.idFecha == idFecha)
    
    return (
        <div>
            <div className='  h-screen'>
                <div className=''>
                <button className='bg-white m-2 p-1'
                onClick={()=>setValidClientes(false)}
                >Atras</button>
                <h2 className=' my-5 text-center font-bold text-2xl opacity-50'>CLIENTES</h2>
                </div>
                {ClientesFecha.map((i)=>(
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
