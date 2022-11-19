import { useEffect } from 'react'
import { useState } from 'react'
import "tailwindcss/tailwind.css"
import './App.css'
import Clientes from './components/Clientes'
import Header from './components/Header'
import ModalFecha from './components/ModalFecha'
import ListarFechas from './ListarFechas'



function App() {
  const [validClientes,setValidClientes]=useState(false)
  const [fechas,setFechas]=useState([])
  const [modalFecha,setModalFecha]=useState(false)

  return (
    <>
    <div>
      <Header/>
    </div>
    
    {validClientes ? (
      <Clientes/>
    ) : (
        <ListarFechas
        fechas={fechas}
        setValidClientes={setValidClientes}
        />
    )}

    {modalFecha && (
      <ModalFecha
      setModalFecha={setModalFecha}
      fechas={fechas}
      setFechas={setFechas}
      />
    )}
    
    <div className='bg-pink-500 fixed cursor-pointer bottom-10 right-10 rounded-full w-10 text-center'>
            <input className='text-4xl text-white cursor-pointer' type="button" value="+" 
            onClick={()=>setModalFecha(true)}
            />
        </div>
    </>
  )
}

export default App
