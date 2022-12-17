import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ListarArticulos from './ListarArticulos';
import ModalAnticipo from './ModalAnticipo';
import ModalArticulos from './ModalArticulos';
import PanelAnticipos from './PanelAnticipos';

function InfoCliente({idCliente,idFecha,clientes,setInfoCliente,fechas}) {

    const [articulos,setArticulos]=useState(JSON.parse(localStorage.getItem('articulos')) ?? []);
    const [modalArticulos,setModalArticulos]=useState(false);
    const [modalAnticipo,setModalAnticipo]=useState(false)
    const [total,setTotal]=useState()
    const [restante,setRestante]=useState()
    const [anticipos,setAnticipos]=useState(JSON.parse(localStorage.getItem('anticipos')) ?? [])
    const [mostrarAnticipo,setMostrarAnticipo]=useState()

    useEffect(()=>{
        const res=anticipos.filter(i=>i.id==idCliente)
        const newRes=res.map(i=>i.cantidad)
        const sumAn=newRes.reduce((acc,des)=>{
            return acc+des;
        },0)
        const restant=total-sumAn
        setMostrarAnticipo(sumAn)
        setRestante(restant)
        
    })

    useEffect(()=>{
        localStorage.setItem('anticipos',JSON.stringify(anticipos));
    },[anticipos])

    useEffect(()=>{
        localStorage.setItem('articulos',JSON.stringify(articulos));
    },[articulos])

    const borrarArticulo=(id)=>{
        const res=confirm("¿segura que deseas borrar este articulo?")
        if (res) {
            const articulosActualizados=articulos.filter(i=>i.id !== id)
            setArticulos(articulosActualizados)
        }
        
    }

    const borrarAnticipo=()=>{  
        const nuevosAnticipos = anticipos.filter(i=>i.id !== idCliente)
        setAnticipos(nuevosAnticipos)
    }
    
    const seleccionCliente=()=>{
        const clienteSeleccionado = clientes.filter(i=>i.id==idCliente);        
        return clienteSeleccionado;
    }

    const seleccionFecha=()=>{
        const fechaSeleccionada = fechas.filter(i=>i.id==idFecha);        
        const res=fechaSeleccionada.map(i=>i.fecha)
        return res;
    }

    const cerrarBotonNuevoArticulo=()=>{
        setModalArticulos(false)
      }

    return (
        <div>
            {seleccionCliente().map(i=>(
                <>
                <div className=' flex items-center justify-between px-5 bg-white'>
                    <div className='mr-20'>
                        <button className='bg-pink-500 rounded-lg p-2 text-white'
                        onClick={()=>setInfoCliente(false)}
                        >Atras</button>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-md opacity-60 font-bold'>Fecha: {seleccionFecha()}</h2>
                        <h2 className='text-xl font-bold opacity-60 '>{i.nombre}</h2>
                    </div>
                </div>
                </>
            ))
            }
            <div>
                
                <PanelAnticipos
                total={total}
                idCliente={idCliente}
                setModalAnticipo={setModalAnticipo}
                restante={restante}
                mostrarAnticipo={mostrarAnticipo}
                borrarAnticipo={borrarAnticipo}
                />
            </div>

            <div>
                <ListarArticulos
                articulos={articulos}
                setArticulos={setArticulos}
                setModalArticulos={setModalArticulos}
                idCliente={idCliente}
                setTotal={setTotal}
                borrarArticulo={borrarArticulo}
                />
            </div>

        {modalArticulos &&
        <ModalArticulos
        cerrarBotonNuevoArticulo={cerrarBotonNuevoArticulo}
        articulos={articulos}
        setArticulos={setArticulos}
        setModalArticulos={setModalArticulos}
        idCliente={idCliente}
        />
        }
        {modalAnticipo &&
            <ModalAnticipo
            idCliente={idCliente}
            setModalAnticipo={setModalAnticipo}
            setAnticipos={setAnticipos}
            anticipos={anticipos}
            />
        }
        </div>
    )
}

export default InfoCliente
