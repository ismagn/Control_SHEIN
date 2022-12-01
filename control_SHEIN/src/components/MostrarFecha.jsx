import React from 'react'

function MostrarFecha({i,mostrarClienteFecha}) {
  return (
    <div className='w-3/4 mx-auto'>
      <h2 className='bg-white p-5 text-center text-2xl w-full rounded-md my-3 hover:scale-110'
      onClick={()=>mostrarClienteFecha(i.id)}
      >{i.fecha}</h2>
    </div>
  )
}

export default MostrarFecha
