import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function ModalFecha({setModalFecha,fechas,setFechas,editarFecha,setEditarFecha,animarModal,setAnimarModal,accionesCerrarModalFecha}) {
    const [fecha,setFecha]=useState()
    console.log(fecha);


    const generarId=()=>{
        let rand=Date.now()
        return rand
      }

    const formatearFecha=(fecha)=>{
        const fechaNueva=new Date(fecha)
        const opciones={
            year:'numeric',
            month:'long',
            day:'numeric',
        }
        console.log("hola")
        const w = fechaNueva.getUTCDate()
        const x= fechaNueva.getUTCMonth()+1
        const y= fechaNueva.getUTCFullYear()
        const f=x+"/"+w+"/"+y
        const e=new Date(f)
        return e.toLocaleDateString('es-MX',opciones)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if (fecha==null){
            alert("ingresa una fecha valida");
        }else{
            
            setModalFecha(false)
            setAnimarModal(false)
           const objetoFecha ={
            fecha:formatearFecha(fecha),
            
           }

           if (editarFecha.id) {
            objetoFecha.id=editarFecha.id
           const fechasActualizadas=fechas.map(i=>i.id === editarFecha.id ? objetoFecha : i)
           setFechas(fechasActualizadas)
           setEditarFecha({})
           } else {
            objetoFecha.id=generarId()
            setFechas([...fechas,objetoFecha])
           }
    }
}

    return (
        <div className='bg-black h-screen w-full fixed top-0 opacity-95'>
            
            <form className={`modal ${animarModal ? "animar" : ""} w-5/6 md:w-2/4 bg-white h-2/4 text-center mx-auto my-10 p-10`}action=""
            onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold text-pink-700 shadow-lg'>AGREGA UNA FECHA</h2>
                <input className='mt-20 w-2/3 h-10 border-pink-500 shadow-xl border-4' type="date" name="" id="fecha"
                value={fecha} 
                onChange={e=>setFecha(e.target.value)}
                />
                    <input className='mt-10 bg-pink-500 w-2/3 mx-auto text-white p-1' type="submit" value="Agregar" 
                    />
            </form>
            <div className='bg-white mt-14 mx-auto rounded-full w-10 h-10  text-center cursor-pointer'
            onClick={accionesCerrarModalFecha}
            >
                <input className='cursor-pointer p-1 text-red-600 font-bold text-2xl' type="button" value="X" />
            </div>
        </div>
    )
}

export default ModalFecha
