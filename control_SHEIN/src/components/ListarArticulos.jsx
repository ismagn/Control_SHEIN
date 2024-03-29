import React from 'react'
import { useState, useEffect } from 'react';
import MostrarArticulo from './MostrarArticulo'
import {Fade,Zoom} from 'react-reveal';


function ListarArticulos({idFecha,setTotal1,total,total1,articulos,setModalArticulos,idCliente,setTotal,borrarArticulo,metodoEditarArticulo}) {


    const articuloSeleccionado = articulos.filter(i=>i.idCliente==idCliente); 

    const SumaPrecioArticulos=()=>{
        const res = articuloSeleccionado.map(i=>i.precio)
        const totalSuma=res.reduce((acc,des)=>{
            return acc+des;
        },0)
        return totalSuma
}
    
    setTotal(SumaPrecioArticulos())

    useEffect(()=>{
        const objetoTot ={
            total,
            id:idCliente,
            idFecha:idFecha
           }
        const totNew=total1.filter(i=>i.id!==objetoTot.id)
        setTotal1(totNew)

        setTotal1([...totNew,objetoTot])
    },[total])

    var cont=1
    return (
        <div>
            <div className='lg:bg-purple-200 lg:py-6 lg:mt-2 lg:border lg:border-rose-300 lg:shadow-lg rounded-md'>
                <h2 className='m-2 lg:m-0 text-center font-bold text-2xl text-pink-500 opacity-80'>Articulos</h2>

                <div className='animate-bounce w-full text-center cursor-pointer my-2'>
                <input className='text-4xl rounded-full w-10 h-10 bg-pink-500 text-white cursor-pointer' type="button" value="+" 
                onClick={()=>setModalArticulos(true)}
                />
                </div>
                
                <div className='h-60 lg:h-72  overflow-y-auto'>
                {
                articuloSeleccionado.map((i)=>(
                    <>
                    <Fade left>
                    <MostrarArticulo
                    i={i} 
                    key={i.id}
                    cont={cont++}
                    borrarArticulo={borrarArticulo}
                    metodoEditarArticulo={metodoEditarArticulo}
                    />
                    </Fade>
                    </>
                ))
                    
                }
                </div>
            </div>
            
        </div>
    )
}

export default ListarArticulos
