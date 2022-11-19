import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ListarArticulos from './ListarArticulos';
import ModalArticulos from './ModalArticulos';
import PanelAnticipos from './PanelAnticipos';

function InfoCliente({idCliente,clientes,setInfoCliente}) {

    const [articulos,setArticulos]=useState(JSON.parse(localStorage.getItem('articulos')) ?? []);
    const [modalArticulos,setModalArticulos]=useState(false);
    const [total,setTotal]=useState();

    useEffect(()=>{
        localStorage.setItem('articulos',JSON.stringify(articulos));
      },[articulos])
    
    const clienteSeleccionado = clientes.filter(i=>i.id==idCliente);        

    const cerrarBotonNuevoArticulo=()=>{
        setModalArticulos(false)
      }

    return (
        <div>
            {clienteSeleccionado.map(i=>(
                <>
                <div className='w-full flex justify-around items-center bg-white'>
                <div className='h-full '>
                    <button className='bg-pink-500 rounded-lg p-2'
                    onClick={()=>setInfoCliente(false)}
                    >INICIO</button>
                </div>
                <div className='text-start'>
                <h2 className='text-md opacity-60 font-bold'>Resgistrado: {i.fecha}</h2>
                <h2 className='text-xl font-bold opacity-60 '>{i.nombre}</h2>
                </div>
                </div>
                </>
            ))
            }
            <div>
                <PanelAnticipos
                
                />
            </div>

            <div>
                <ListarArticulos
                articulos={articulos}
                setArticulos={setArticulos}
                setModalArticulos={setModalArticulos}
                idCliente={idCliente}
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
        </div>
    )
}

export default InfoCliente
