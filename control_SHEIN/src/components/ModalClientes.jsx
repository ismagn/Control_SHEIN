import { useEffect } from 'react';
import { useState } from 'react'
import {Fade} from 'react-reveal';

function ModalClientes({cerrarBotonNuevoCliente,editarCliente,setEditarCliente,setClientes,clientes,setModalClientes,idFecha}) {
    const[nombre,setNombre]=useState("");
    const [error,setError]=useState(false);

    useEffect(()=>{
        if (Object.keys(editarCliente).length>0) {
            setNombre(editarCliente.nombre)
        }
    },[])

    const generarId=()=>{
        let rand=Date.now()
        return rand
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (nombre==""){
            setError(true)
        }else{
            setError(false)
            setModalClientes(false)
            //setAnimarModal(false)

            
           const objetoCliente ={
            nombre,
           }

           if (editarCliente.id) {
            objetoCliente.id=editarCliente.id
            objetoCliente.idFecha=editarCliente.idFecha
            const clientesActualizados = clientes.map(i=>i.id === editarCliente.id ? objetoCliente : i )
            setClientes(clientesActualizados)
            setEditarCliente({})
           } else {
            objetoCliente.id=generarId()
            objetoCliente.idFecha=idFecha
            setClientes([...clientes,objetoCliente])
           }
           
        
           }
        }
    
    

    return (
        <Fade >
        <div className='bg-black h-full w-full fixed top-0 opacity-95 '>
            
            <form className=' w-3/4 lg:w-2/4 bg-red-50 mx-auto my-10 h-3/6  p-5' action=""
            onSubmit={handleSubmit}
            >
                <div className=' h-10'>
                <h2 className='text-pink-500 font-bold text-center text-lg'>NUEVO CLIENTE</h2>
                </div>
                <div className='h-2 bg-white'></div>
                <div>
                    <label className='text-xl font-bold' htmlFor="nombre">Nombre</label>
                    <input className='mb-5 text-center block w-full h-10 border-2' type="text" id='nombre'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    />

                    
                    <div className='text-center my-5 p-5 cursor-pointer'>
                    <input className=' bg-pink-500 text-white cursor-pointer rounded-lg p-2 font-bold' type="submit" value="AÑADIR CLIENTE" />
                    </div>
                    <div>
                    {error &&
                        <p className='text-center text-red-600'>*faltan campos por llenar*</p>
                    }
                </div>
                    
                </div>
            </form>
            <div className='bg-white mt-10 mx-auto rounded-full w-10 h-10 text-center cursor-pointer'
            onClick={cerrarBotonNuevoCliente}
            >
                <input className='cursor-pointer p-1 text-red-600 font-bold text-2xl' type="button" value="X" />
            </div>
        </div>
        </Fade>
    )
}

export default ModalClientes
