import React, { useState } from 'react'


function ModalNotas({cerrarModalNewNota,setModalNewNota,setNotas,notas,animarModal,setAnimarModal}) {
    const [nombreNota,setNombreNota]=useState("")
    const [precioNota,setPrecioNota]=useState("")
    const [error3,setError3]=useState(false)

    const generarId=()=>{
        let rand=Date.now()
        return rand
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (nombreNota=="" || precioNota<=0){
            setError3(true)
        }else{
            setError3(false)
            setModalNewNota(false)
            setAnimarModal(false)
           const objetoNota ={
            nombreNota,
            precioNota,
            id:generarId()
           }
               setNotas([...notas,objetoNota])
           }
           
                
           }
        

    return (
        <div className='bg-black h-full w-full fixed top-0 opacity-95 '>
            
            <form className={`modal ${animarModal && "animar"} rounded-md w-3/4 lg:w-2/4 bg-red-50 mx-auto my-10 h-3/6  p-5`} action=""
            onSubmit={handleSubmit}
            >
                <div className=' h-10'>
                <h2 className='text-purple-500 font-bold text-center text-lg'>NUEVA NOTA</h2>
                </div>
                <div className='h-2 bg-white'></div>
                <div>
                    <label className='text-xl font-bold ' htmlFor="nombreNota">Nombre Articulo</label>
                    <input className='mb-5 block w-full h-10 border-2 text-center' type="text" id='nombreNota'
                    value={nombreNota}
                    onChange={e=>setNombreNota(e.target.value)}
                    />

                    <label className='text-xl font-bold' htmlFor="precioNota">Precio</label>
                    <input className='block w-full h-10 border-2 text-center' type="number" id='precioNota' 
                    value={precioNota}
                    onChange={e=>setPrecioNota(Number(e.target.value))}
                    />
                    <div className='text-center my-5 cursor-pointer'>
                    <input className=' bg-purple-500 text-white cursor-pointer rounded-lg p-2 font-bold' type="submit" value="AÑADIR" />
                    </div>
                    <div>
                    {error3 &&
                        <p className='text-center text-red-600'>*faltan campos por llenar*</p>
                    }
                </div>
                </div>
            </form>
            <div className='bg-white mt-10 mx-auto rounded-full w-10 h-10 text-center cursor-pointer'
            onClick={cerrarModalNewNota}
            >
                <input className='cursor-pointer p-1 text-red-600 font-bold text-2xl' type="button" value="X" />
            </div>
        </div>
    )
}

export default ModalNotas
