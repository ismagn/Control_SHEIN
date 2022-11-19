import React from 'react'
import MostrarArticulo from './MostrarArticulo'

function ListarArticulos({articulos,setModalArticulos,idCliente}) {

    const articuloSeleccionado = articulos.filter(i=>i.id==idCliente); 
    return (
        <div>
            <div className='  h-screen'>
                <h2 className='m-5 text-center font-bold text-2xl opacity-50'>Articulos</h2>
                {
                articuloSeleccionado.map((i)=>(
                    <MostrarArticulo
                    i={i} 
                    key={i.id}
                    
                    />
                ))
                    
                }
                
            </div>

            <div className='bg-pink-500 fixed cursor-pointer bottom-10 right-10 rounded-full w-10 text-center'>
                <input className='text-4xl text-white cursor-pointer' type="button" value="+" 
                onClick={()=>setModalArticulos(true)}
                />
            </div>
        </div>
    )
}

export default ListarArticulos
