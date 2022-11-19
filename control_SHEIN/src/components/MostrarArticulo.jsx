import React from 'react'

function MostrarArticulo({i}) {
    return (
        <div>
            <div className='flex justify-around bg-white rounded-lg p-5 shadow-lg w-full'>
            <h2 className='font-bold text-xl'>1.-<span>{i.nombreArticulo.toUpperCase()}</span></h2>
            <h2 className='font-bold text-xl'>${i.precio}</h2>
            </div>
            
        </div>
    )
}

export default MostrarArticulo
