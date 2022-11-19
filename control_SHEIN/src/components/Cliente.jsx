import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

function Cliente({i,mostrarInfoCliente,eliminarCliente}) {
    const leadingActions=()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>""}>
                EDITAR
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions=()=>(
        <TrailingActions>
            <SwipeAction onClick={()=>eliminarCliente(i.id)}>
                ELIMINAR
            </SwipeAction>
        </TrailingActions>
    )

    return (
            <div className=' mx-auto w-full'>
        <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
        <div className='cursor-pointer bg-pink-50 h-14 p-4 w-full grid grid-cols-2 gap-10 rounded-md shadow-lg text-center  text-lg font-bold mb-5'
        onClick={()=>mostrarInfoCliente(i.id)}
        >
            <div>
            <h2 className='text-purple-500'>{i.nombre}</h2>
            </div>
            <div>
            <h2 className='text-slate-500'>{i.fecha}</h2>
            </div>
        </div>
            </SwipeableListItem>
        </SwipeableList>
        </div>
    )
}

export default Cliente
