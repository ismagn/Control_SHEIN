import React, { useEffect } from 'react'
import Cliente from './Cliente'
import useShein from '../hook/useShein'

function ListarClientes({contarClientes,setModalClientes,clientes,setInfoCliente,setIdCliente,mostrarInfoCliente,eliminarCliente,idFecha,setValidClientes,MetodoEditarCliente,fechas}) {

    const {restanteGlobal,totalGlobal} = useShein()

    const ClientesFecha = clientes.filter(i=>i.idFecha == idFecha)
    const fechaPedidoActual = fechas.filter(i=>i.id == idFecha)
    console.log(fechaPedidoActual[0].fecha);
    
    return (
        <div >
            <div className=''>
                <div className='bg-white flex items-center justify-between' >
                    <button className='bg-pink-500 rounded-md text-white m-2 p-1'
                    onClick={()=>setValidClientes(false)}
                    >Atras</button>
                    <p className='font-bold mx-4 text-lg text-slate-400'>Pedido del <span className=''>{fechaPedidoActual[0].fecha}</span> </p>
                </div>
                <div className='flex justify-center items-center p-4 gap-4'>
                    <h2 className='w-full p-1 border border-opacity-50 border-pink-500 text-pink-500 text-center font-bold text-sm opacity-80'>Total Pedido: <span className='text-pink-700 '>{totalGlobal} MXN</span></h2>
                    <h2 className='w-full p-1 border border-opacity-50 border-pink-500 text-pink-500 text-center font-bold text-md opacity-80'>CLIENTES: <span className='text-pink-700 '>{contarClientes()}</span></h2>
                    <h2 className='w-full p-1 border border-opacity-50 border-pink-500 text-pink-500 text-center font-bold text-sm opacity-80'>Restante Total: <span className='text-pink-700 '>{restanteGlobal} MXN</span></h2>
                </div>
                <p className='text-center text-pink-400 text-sm font-bold opacity-10 animate-pulse'>--Desliza para Editar o Eliminar--</p>
                
                <div className='bg-pink-500 animate-pulse  cursor-pointer mx-auto p-2 rounded-md my-4 w-36 text-center'
                onClick={()=>setModalClientes(true)}>
                    <input className='text-md text-white cursor-pointer font-semibold' type="button" value="Añadir Cliente" />
                </div>

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

            
        </div>
    )
}

export default ListarClientes
