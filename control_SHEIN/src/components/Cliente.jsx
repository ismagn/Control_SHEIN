import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

function Cliente({i,mostrarInfoCliente,eliminarCliente,MetodoEditarCliente}) {
    const leadingActions=()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>MetodoEditarCliente(i)}>
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
            <div className=' mx-auto w-4/5'>
        <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
           
            <h2 className='bg-white hover:bg-pink-300 active:bg-pink-300 text-purple-500 font-bold p-5 text-center text-xl w-full rounded-md my-3 cursor-pointer'
        onClick={()=>mostrarInfoCliente(i.id)}>{i.nombre}</h2>
           
            </SwipeableListItem>
        </SwipeableList>
        </div>
    )
}

export default Cliente
