import { useEffect } from 'react'
import { useState } from 'react'
import "tailwindcss/tailwind.css"
import './App.css'
import Clientes from './components/Clientes'
import Header from './components/Header'
import ModalFecha from './components/ModalFecha'
import ListarFechas from './components/ListarFechas'
import Footer from './components/Footer'



function App() {
  const [validClientes,setValidClientes]=useState(false)
  const [fechas,setFechas]=useState(JSON.parse(localStorage.getItem('fechas')) ?? [])
  const [modalFecha,setModalFecha]=useState(false)
  const [animarModal,setAnimarModal]=useState(false)
  const [idFecha,setIdFecha]=useState()
  const [editarFecha,setEditarFecha]=useState({})


  useEffect(()=>{
    localStorage.setItem('fechas',JSON.stringify(fechas));
  },[fechas])

  const accionesCerrarModalFecha=()=>{
    setModalFecha(false)
    setAnimarModal(false)
  }

  const accionesModalFecha=()=>{
    setModalFecha(true)

    setTimeout(()=>{
      setAnimarModal(true)
    },0)
  }

  const mostrarClienteFecha =(id)=>{
    setIdFecha(id)
    setValidClientes(true)
  }

  const eliminarFecha=(id)=>{
    const res=confirm("¿Segura que quieres borrar esta fecha y todos sus datos?")
    if (res) {
      const fechasActualizadas = fechas.filter(i=>i.id !== id)
      setFechas(fechasActualizadas)
    }
  }

  const metodoEditarFecha=(objetoFecha)=>{
    setEditarFecha(objetoFecha)
    setModalFecha(true)
    setAnimarModal(true)
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
      fechas={fechas}
      />
    ) : (
        <ListarFechas
        fechas={fechas}
        mostrarClienteFecha={mostrarClienteFecha}
        setModalFecha={setModalFecha}
        accionesModalFecha={accionesModalFecha}
        eliminarFecha={eliminarFecha}
        metodoEditarFecha={metodoEditarFecha}
        />
    )}

    {modalFecha && (
      <ModalFecha
      setModalFecha={setModalFecha}
      fechas={fechas}
      setFechas={setFechas}
      editarFecha={editarFecha} 
      setEditarFecha={setEditarFecha}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      accionesCerrarModalFecha={accionesCerrarModalFecha}
      />
    )}
    
    
    <Footer/>

    
    </>
  )
}

export default App
