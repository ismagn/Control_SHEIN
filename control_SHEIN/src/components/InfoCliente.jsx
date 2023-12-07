import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ListarArticulos from './ListarArticulos';
import ModalAnticipo from './ModalAnticipo';
import ModalArticulos from './ModalArticulos';
import PanelAnticipos from './PanelAnticipos';
import useShein from '../hook/useShein';

function InfoCliente({idCliente,idFecha,clientes,setInfoCliente,fechas}) {

    const {total1,setTotal1,restante1,setRestante1} = useShein()

    const [articulos,setArticulos]=useState(JSON.parse(localStorage.getItem('articulos')) ?? []);
    const [editarArticulo,setEditarArticulo]=useState({})
    const [modalArticulos,setModalArticulos]=useState(false);
    const [modalAnticipo,setModalAnticipo]=useState(false)
    const [total,setTotal]=useState()
    const [restante,setRestante]=useState()
    const [anticipos,setAnticipos]=useState(JSON.parse(localStorage.getItem('anticipos')) ?? [])
    const [mostrarAnticipo,setMostrarAnticipo]=useState()
    const [porcentaje,setPorcentaje]=useState()


    useEffect(()=>{
        const nuevoPorcentaje = (((total-restante)/total)*100).toFixed(2)
        setPorcentaje(nuevoPorcentaje)
      },[restante])

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
        const objetoRes ={
            restante,
            id:idCliente,
            idFecha:idFecha
           }
        const resNew=restante1.filter(i=>i.id!==objetoRes.id)
        setRestante1(resNew)

        setRestante1([...resNew,objetoRes])
    },[restante])

    

    useEffect(()=>{
        localStorage.setItem('anticipos',JSON.stringify(anticipos));
    },[anticipos])

    useEffect(()=>{
        localStorage.setItem('articulos',JSON.stringify(articulos));
    },[articulos])

    useEffect(()=>{
        localStorage.setItem('restante1',JSON.stringify(restante1));
    },[restante1])

    useEffect(()=>{
        localStorage.setItem('total1',JSON.stringify(total1));
    },[total1])


    const contarArticulos =()=>{
        const newArticulos = articulos.filter(i=>i.idCliente === idCliente)
        return newArticulos.length
      }

    const metodoEditarArticulo=(i)=>{
        setEditarArticulo(i)
        setModalArticulos(true)
    }

    const borrarArticulo=(id)=>{
        const res=confirm("¿segura que deseas borrar este articulo?")
        if (res) {
            const articulosActualizados=articulos.filter(i=>i.id !== id)
            setArticulos(articulosActualizados)
        }
        
    }

    const borrarAnticipo=()=>{  
        const res=confirm("¿segura que deseas borrar el anticipo?")
        if (res) {
            const nuevosAnticipos = anticipos.filter(i=>i.id !== idCliente)
            setAnticipos(nuevosAnticipos)
            
        }
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
        setEditarArticulo({})
      }

    return (
        <div>
            {seleccionCliente().map(i=>(
                <>
                <div className=' flex items-center justify-between px-5 bg-white'>
                    <div className='mr-12'>
                        <button className='bg-pink-500 rounded-lg p-2 text-white'
                        onClick={()=>setInfoCliente(false)}
                        >Atras</button>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-md opacity-60 font-bold'>Fecha: {seleccionFecha()}</h2>
                        <h2 className='text-md font-bold opacity-60 '>Nombre: {i.nombre}</h2>
                        <h2 className='text-md font-bold opacity-60 '>Articulos: {contarArticulos()}</h2>
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
                porcentaje={porcentaje}
                />
            </div>

            <div>
                <ListarArticulos
                articulos={articulos}
                setArticulos={setArticulos}
                setModalArticulos={setModalArticulos}
                idCliente={idCliente}
                total={total}
                total1={total1}
                setTotal={setTotal}
                setTotal1={setTotal1}
                borrarArticulo={borrarArticulo}
                metodoEditarArticulo={metodoEditarArticulo}
                idFecha={idFecha}
                />
            </div>

        {modalArticulos &&
        <ModalArticulos
        cerrarBotonNuevoArticulo={cerrarBotonNuevoArticulo}
        articulos={articulos}
        setArticulos={setArticulos}
        setModalArticulos={setModalArticulos}
        idCliente={idCliente}
        editarArticulo={editarArticulo}
        setEditarArticulo={setEditarArticulo}
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
