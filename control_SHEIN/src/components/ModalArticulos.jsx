import React, { useEffect } from 'react'
import { useState } from 'react';

function ModalArticulos({articulos,setArticulos,setModalArticulos,cerrarBotonNuevoArticulo,idCliente,editarArticulo,setEditarArticulo}) {
    const [nombreArticulo,setNombreArticulo]=useState("")
    const [precio,setPrecio]=useState("")
    const [error2,setError2]=useState(false)

    useEffect(()=>{
        if (Object.keys(editarArticulo).length>0) {
            setNombreArticulo(editarArticulo.nombreArticulo)
            setPrecio(editarArticulo.precio)
        }
    },[])
    
    const generarId=()=>{
        let rand=Date.now()
        return rand
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (nombreArticulo=="" || precio<=0){
            setError2(true)
        }else{
            setError2(false)
            setModalArticulos(false)
            //setAnimarModal(false)
           const objetoArticulo ={
            nombreArticulo,
            precio,
            idCliente:idCliente
           }
           
           if (editarArticulo.id) {
                objetoArticulo.id=editarArticulo.id
                objetoArticulo.idCliente=editarArticulo.idCliente
                const articulosActualizados = articulos.map(i=>i.id === editarArticulo.id ? objetoArticulo : i )
            setArticulos(articulosActualizados)
            setEditarArticulo({})

           } else {
               objetoArticulo.id=generarId()
               setArticulos([...articulos,objetoArticulo])
               setEditarArticulo({})
           }
           
                
           }
        }
    
    

    return (
        <div className='bg-black h-full w-full fixed top-0 opacity-95 '>
            <div className='bg-white mt-10 mx-auto rounded-full w-7 text-center cursor-pointer'>
                <input className='cursor-pointer' type="button" value="X" 
                onClick={cerrarBotonNuevoArticulo}
                />
            </div>
            <form className=' w-3/4 lg:w-2/4 bg-red-50 mx-auto my-10 h-2/5  p-5' action=""
            onSubmit={handleSubmit}
            >
                <div className=' h-10'>
                <h2 className='text-black font-bold text-center text-lg'>NUEVO Articulo</h2>
                </div>
                <div className='h-2 bg-white'></div>
                <div>
                    <label className='text-xl font-bold' htmlFor="nombreArticulo">Nombre Articulo</label>
                    <input className='mb-5 block w-full h-10 border-2 text-center' type="text" id='nombreArticulo'
                    value={nombreArticulo}
                    onChange={e=>setNombreArticulo(e.target.value)}
                    />

                    <label className='text-xl font-bold' htmlFor="precio">Precio</label>
                    <input className='block w-full h-10 border-2 text-center' type="number" id='precio' 
                    value={precio}
                    onChange={e=>setPrecio(Number(e.target.value))}
                    />
                    <div className='text-center my-5 cursor-pointer'>
                    <input className=' bg-red-300 cursor-pointer rounded-lg p-2 font-bold' type="submit" value="AÑADIR ARTICULO" />
                    </div>
                    <div>
                    {error2 &&
                        <p className='text-center text-red-600'>*faltan campos por llenar*</p>
                    }
                </div>
                    
                </div>
            </form>
        </div>
    ) 
}

export default ModalArticulos
