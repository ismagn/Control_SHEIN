import { useEffect } from 'react'
import { useState } from 'react'
import "tailwindcss/tailwind.css"
import './App.css'
import Clientes from './components/Clientes'
import Header from './components/Header'
import ModalFecha from './components/ModalFecha'
import ListarFechas from './components/ListarFechas'
import Footer from './components/Footer'
import ListarNotas from './components/ListarNotas'
import ModalNotas from './components/ModalNotas'



function App() {
  const [validClientes,setValidClientes]=useState(false)
  const [fechas,setFechas]=useState(JSON.parse(localStorage.getItem('fechas')) ?? [])
  const [modalFecha,setModalFecha]=useState(false)
  const [animarModal,setAnimarModal]=useState(false)
  const [idFecha,setIdFecha]=useState()
  const [editarFecha,setEditarFecha]=useState({})
  const [contador,setContador]=useState(JSON.parse(localStorage.getItem('contador')) ?? 0)
  const [modalListarNotas,setModalListarNotas]=useState(false)
  const [modalNewNota,setModalNewNota]=useState(false)
  const [notas,setNotas]=useState(JSON.parse(localStorage.getItem('notas')) ?? [])
  const [animarNotas,setAnimarNotas]=useState(false)
  const [totalNotas,setTotalNotas]=useState()

  useEffect(()=>{
    localStorage.setItem('notas',JSON.stringify(notas));
    const res = notas.map(i=>i.precioNota)
    const sum=res.reduce((acc,des)=>{
      return acc+des;
  },0)
    setTotalNotas(sum)
  },[notas])

  useEffect(()=>{
    localStorage.setItem('fechas',JSON.stringify(fechas));
    localStorage.setItem('contador',JSON.stringify(contador));
    if (contador>9) {
      setContador(0)
    }
  },[fechas])

  const cerrarModalNewNota =()=>{
    setModalNewNota(false)
    setAnimarModal(false)
}

const accionesModalNewNota=()=>{
    setModalNewNota(true)
    setTimeout(()=>{
      setAnimarModal(true)
    },0)
}

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

  const accionesModalNotas=()=>{
  setModalListarNotas(true)

    setTimeout(()=>{
      setAnimarNotas(true)
    },0)
  }

  const cerrarNotas=()=>{
    setModalListarNotas(false)
    setTimeout(()=>{
      setAnimarNotas(false)
    },0)
    
  }

  const eliminarNota=(id)=>{
    const res=confirm("¿Deseas eliminar este articulo?")
    if (res) {
      const notasActualizadas=notas.filter(i=>i.id!==id )
      setNotas(notasActualizadas)
    }
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
        accionesModalNotas={accionesModalNotas}
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
      setContador={setContador}
      contador={contador}
      />
    )}

    {modalListarNotas && (
      <ListarNotas
      cerrarNotas={cerrarNotas}
      accionesModalNewNota={accionesModalNewNota}
      notas={notas}
      totalNotas={totalNotas}
      eliminarNota={eliminarNota}
      animarNotas={animarNotas}
      />
    )}

    {modalNewNota && 
        <ModalNotas
        setModalNewNota={setModalNewNota}
        cerrarModalNewNota={cerrarModalNewNota}
        setNotas={setNotas}
        notas={notas}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        />
        }
    
    
    
    <Footer/>

    
    </>
  )
}

export default App
