import { useEffect } from 'react'
import { useState } from 'react'
import InfoCliente from './InfoCliente'
import ListarClientes from './ListarClientes'
import ModalClientes from './ModalClientes'

function Clientes() {
  const [clientes,setClientes]=useState(JSON.parse(localStorage.getItem('clientes')) ?? []);
  const [clienteEditar,setClienteEditar]=useState({});
  const [modalClientes,setModalClientes]=useState(false);
  const [infoCliente,setInfoCliente]=useState(false);
  const [idCliente,setIdCliente]=useState();


  useEffect(()=>{
    localStorage.setItem('clientes',JSON.stringify(clientes));
  },[clientes])

  const eliminarCliente=(id)=>{
    const res=confirm("¿seguro que deseas eliminar este elemento?")
    if (res) {
      const actualizarClientes = clientes.filter(i=>i.id!==id)
    setClientes(actualizarClientes)
    }
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
        setInfoCliente={setInfoCliente}
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
      />
        </>
      }
      
    </div>

    {modalClientes &&
      <ModalClientes
      cerrarBotonNuevoCliente={cerrarBotonNuevoCliente}
      clienteEditar={clienteEditar}
      setClienteEditar={setClienteEditar}
      clientes={clientes}
      setClientes={setClientes}
      setModalClientes={setModalClientes}
      
      />
    }
    
    </>
  )
}

export default Clientes