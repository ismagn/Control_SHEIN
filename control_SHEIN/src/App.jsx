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
  const [fechas,setFechas]=useState(JSON.parse(localStorage.getItem('fechas')) ?? [])
  const [modalFecha,setModalFecha]=useState(false)
  const [idFecha,setIdFecha]=useState()

  useEffect(()=>{
    localStorage.setItem('fechas',JSON.stringify(fechas));
  },[fechas])


  const mostrarClienteFecha =(id)=>{
    setIdFecha(id)
    setValidClientes(true)
  }

  return (
    <>
    <div>
      <Header/>
    </div>
    
    {validClientes ? (
      <Clientes
      setValidClientes={setValidClientes}
      idFecha={idFecha}
      />
    ) : (
        <ListarFechas
        fechas={fechas}
        setValidClientes={setValidClientes}
        mostrarClienteFecha={mostrarClienteFecha}
        setModalFecha={setModalFecha}
        />
    )}

    {modalFecha && (
      <ModalFecha
      setModalFecha={setModalFecha}
      fechas={fechas}
      setFechas={setFechas} 
      />
    )}
    
    
    </>
  )
}

export default App
