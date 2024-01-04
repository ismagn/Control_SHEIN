import { useEffect } from 'react'
import { useState } from 'react'
import InfoCliente from './InfoCliente'
import ListarClientes from './ListarClientes'
import ModalClientes from './ModalClientes'


function Clientes({idFecha,setValidClientes,fechas}) {
  const [clientes,setClientes]=useState(JSON.parse(localStorage.getItem('clientes')) ?? []);
  const [modalClientes,setModalClientes]=useState(false);
  const [infoCliente,setInfoCliente]=useState(false);
  const [idCliente,setIdCliente]=useState();
  const [editarCliente,setEditarCliente]=useState({});


  useEffect(()=>{
    localStorage.setItem('clientes',JSON.stringify(clientes));
  },[clientes])

  const contarClientes =()=>{
    const newClientes = clientes.filter(i=>i.idFecha === idFecha)
    return newClientes.length
  }

  const eliminarCliente=(id)=>{
    const res=confirm("¿seguro que deseas eliminar este cliente y sus datos?")
    if (res) {
      const actualizarClientes = clientes.filter(i=>i.id!==id)
    setClientes(actualizarClientes)
    }
  }
  
  const MetodoEditarCliente=(i)=>{
    setEditarCliente(i)
    setModalClientes(true)
  }

  const mostrarInfoCliente =(id)=>{
    setIdCliente(id)
    setInfoCliente(true)
  }

  const cerrarBotonNuevoCliente=()=>{
    setModalClientes(false)
  }

  return (
    <>
    
    <div>
      {infoCliente ? (
        <>
        
        <InfoCliente
        clientes={clientes}
        idCliente={idCliente}
        idFecha={idFecha}
        setInfoCliente={setInfoCliente}
        fechas={fechas}
        />

        </>
      ):
        <>
        <ListarClientes
      clientes={clientes}
      setModalClientes={setModalClientes}
      setInfoCliente={setInfoCliente}
      setIdCliente={setIdCliente}
      mostrarInfoCliente={mostrarInfoCliente}
      eliminarCliente={eliminarCliente}
      idFecha={idFecha}
      setValidClientes={setValidClientes}
      MetodoEditarCliente={MetodoEditarCliente}
      contarClientes={contarClientes}
      fechas={fechas}
      />
        </>
      }
      
    </div>

    {modalClientes && 
      <ModalClientes
      cerrarBotonNuevoCliente={cerrarBotonNuevoCliente}
      editarCliente={editarCliente}
      setEditarCliente={setEditarCliente}
      clientes={clientes}
      setClientes={setClientes}
      setModalClientes={setModalClientes}
      idFecha={idFecha}
      />
    }
    
    </>
  )
}

export default Clientes