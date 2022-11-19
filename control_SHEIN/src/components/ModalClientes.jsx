import { useState } from 'react'

function ModalClientes({cerrarBotonNuevoCliente,clienteEditar,setClienteEditar,setClientes,clientes,setModalClientes}) {
    const[nombre,setNombre]=useState("");
    const[fecha,setFecha]=useState("");
    const [error,setError]=useState(false);

   
      const generarFecha =(fecha)=>{
        const fechaNueva = new Date(fecha);
            const opciones = {
            day: '2-digit',
            month: 'long',
            year:'numeric'
            }
            return fechaNueva.toLocaleDateString('es-ES',opciones)
      }
        

    const generarId=()=>{
        let rand=Date.now()
        return rand
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (nombre=="" || fecha==""){
            setError(true)
        }else{
            setError(false)
            setModalClientes(false)
            //setAnimarModal(false)

            
           const objetoCliente ={
            nombre,
            fecha:generarFecha(fecha)
           }
           
                objetoCliente.id=generarId()
                //validarFecha(fecha)
                setClientes([...clientes,objetoCliente])
                
           }
        }
    
    

    return (
        <div className='bg-black h-full w-full fixed top-0 opacity-90 cursor-pointer'>
            <div className='bg-white mt-10 mx-auto rounded-full w-7 text-center cursor-pointer'>
                <input className='' type="button" value="X" 
                onClick={cerrarBotonNuevoCliente}
                />
            </div>
            <form className=' w-3/4 bg-red-50 mx-auto my-10 h-2/5  p-5' action=""
            onSubmit={handleSubmit}
            >
                <div className=' h-10'>
                <h2 className='text-black font-bold text-center text-lg'>NUEVO CLIENTE</h2>
                </div>
                <div className='h-2 bg-white'></div>
                <div>
                    <label className='text-xl font-bold' htmlFor="nombre">Nombre</label>
                    <input className='mb-5 block w-full h-10 border-2' type="text" id='nombre'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    />

                    <label className='text-xl font-bold' htmlFor="fecha">Fecha</label>
                    <input className='block w-full h-10 border-2' type="date" id='fecha' 
                    value={fecha}
                    onChange={e=>setFecha(e.target.value)}
                    />
                    <div className='text-center my-5 cursor-pointer'>
                    <input className=' bg-red-300 cursor-pointer rounded-lg p-2 font-bold' type="submit" value="AÑADIR CLIENTE" />
                    </div>
                    <div>
                    {error &&
                        <p className='text-center text-red-600'>*faltan campos por llenar*</p>
                    }
                </div>
                    
                </div>
            </form>
        </div>
    )
}

export default ModalClientes
