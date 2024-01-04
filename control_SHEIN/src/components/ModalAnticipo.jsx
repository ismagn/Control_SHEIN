import React from 'react'
import { useState } from 'react'
import reactReveal, { Fade } from 'react-reveal';


function ModalAnticipo({idCliente,setModalAnticipo,anticipos,setAnticipos}) {
    const [cantidad,setCantidad]=useState()
    const [error,setError]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (cantidad===undefined || cantidad==""){
            setError(true)
        }else{
            setError(false)
            setModalAnticipo(false)
            //setAnimarModal(false)

            
           const objetoAnticipo ={
            cantidad,
            id:idCliente
           }
           
                setAnticipos([...anticipos,objetoAnticipo])
                
           }
        }

    return (
        <Fade>
        <div className='bg-black h-full w-full fixed top-0 opacity-95 '>
            
            <form className=' w-3/4 lg:w-2/4 bg-red-50 mx-auto my-10 h-h-3/6  p-5' action=""
            onSubmit={handleSubmit}
            >
                <div className=' h-10'>
                <h2 className='text-pink-500 font-bold text-center text-lg'>NUEVO ANTICIPO</h2>
                </div>
                <div className='h-2 bg-white'></div>
                <div>
                    <label className='text-xl font-bold' htmlFor="cantidad">Cantidad</label>
                    <input className='mb-5 text-center block w-full h-10 border-2' type="number" step="0.1" id='cantidad'
                    value={cantidad}
                    onChange={e=>setCantidad(Number(e.target.value))}
                    />

                    
                    <div className='text-center my-5 cursor-pointer p-5 '>
                    <input className=' bg-pink-500 text-white cursor-pointer rounded-lg p-2 font-bold' type="submit" value="AÑADIR ANTICIPO" />
                    </div>
                    <div>
                    {error &&
                        <p className='text-center text-red-600'>*faltan campos por llenar*</p>
                    }
                </div>
                    
                </div>
            </form>
            <div className='bg-white mt-10 mx-auto rounded-full w-10 h-10 text-center cursor-pointer'
            onClick={()=>setModalAnticipo(false)}
            >
                <input className='cursor-pointer p-1 text-red-600 font-bold text-2xl' type="button" value="X" 
                />
            </div>
        </div>
        </Fade>
    )
}

export default ModalAnticipo
