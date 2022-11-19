import React from 'react'
import { useState } from 'react'

function ModalFecha({setModalFecha,fechas,setFechas}) {
    const [fecha,setFecha]=useState()

    const generarId=()=>{
        let rand=Date.now()
        return rand
      }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if (fecha==""){
            alert("no ingresaste una fecha valida");
        }else{
            
            setModalFecha(false)
            //setAnimarModal(false)
           const objetoFecha ={
            fecha,
            id:generarId()
           }
           setFechas(...fechas,objetoFecha)
    }
}

    return (
        <div className='bg-black h-screen w-full fixed top-0 opacity-90'>
            <form className='w-5/6 bg-white h-2/4 text-center mx-auto my-10 p-10'action=""
            onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold text-pink-700 shadow-lg'>AGREGA UNA FECHA</h2>
                <input className='mt-20 w-2/3 h-10 border-pink-500 shadow-xl border-4' type="date" name="" id="fecha"
                value={fecha} 
                onChange={e=>setFecha(e.target.value)}
                />
                <div className='mt-10 bg-pink-500 w-2/3 mx-auto text-white p-1'>
                    <input type="submit" value="Agregar" 
                    />
                </div>
            </form>
        </div>
    )
}

export default ModalFecha
