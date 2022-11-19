import React from 'react'

function PanelAnticipos() {
    return (
        <div className='w-full bg-slate-50 shadow-lg'>
        <div className='h-36 mt-2  grid grid-cols-2 text-center '>
            <div className='my-auto'>
                <h2>grafica</h2>
            </div>
            <div className='my-auto'>
                <h2>total</h2>
                <h2>restante</h2>
                <h2>anticipo</h2>
            </div>
        </div>
        <div className='w-full text-center'>
            <button className='p-3 bg-pink-500 rounded-xl m-2'>Añadir Anticipo</button>
        </div>
        </div>
    )
}

export default PanelAnticipos
