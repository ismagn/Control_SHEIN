import React from 'react'
import { useState } from 'react';
import MostrarArticulo from './MostrarArticulo'

function ListarArticulos({articulos,setModalArticulos,idCliente,setTotal,borrarArticulo,metodoEditarArticulo}) {


    const articuloSeleccionado = articulos.filter(i=>i.idCliente==idCliente); 

    const SumaPrecioArticulos=()=>{
        const res = articuloSeleccionado.map(i=>i.precio)
        const totalSuma=res.reduce((acc,des)=>{
            return acc+des;
        },0)
        return totalSuma
}
    
    setTotal(SumaPrecioArticulos())

    var cont=1
    return (
        <div>
            <div className=''>
                <h2 className='m-2 text-center font-bold text-2xl text-pink-500 opacity-80'>Articulos</h2>
                
                <div className='h-60  overflow-y-auto'>
                {
                articuloSeleccionado.map((i)=>(
                    <>
                    
                    <MostrarArticulo
                    i={i} 
                    key={i.id}
                    cont={cont++}
                    borrarArticulo={borrarArticulo}
                    metodoEditarArticulo={metodoEditarArticulo}
                    />
                    </>
                ))
                    
                }
                </div>
            </div>
            
            <div className=' fixed  animate-bounce bottom-10 w-full text-center cursor-pointer lg:text-right lg:right-56 rig'>
                <input className='text-4xl rounded-full w-10 h-10 bg-pink-500 text-white cursor-pointer' type="button" value="+" 
                onClick={()=>setModalArticulos(true)}
                />
            </div>
        </div>
    )
}

export default ListarArticulos
