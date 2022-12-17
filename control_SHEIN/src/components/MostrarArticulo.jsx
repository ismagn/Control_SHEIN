import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

function MostrarArticulo({i,cont,borrarArticulo}) {
    const leadingActions=()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>""}>
                EDITAR
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions=()=>(
        <TrailingActions>
            <SwipeAction onClick={()=>borrarArticulo(i.id)}>
                ELIMINAR
            </SwipeAction>
        </TrailingActions>
    )
    return (
        <div className='w-4/5 mx-auto'>
            <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
            <div className='grid grid-cols-2 px-2 bg-white rounded-md py-3 shadow-lg w-full mb-3'>
            <h2 className='font-bold text-xl  text-purple-500'>{cont}.-<span>{i.nombreArticulo.toUpperCase()}</span></h2>
            <h2 className='font-bold text-xl text-center text-pink-600'>${i.precio}</h2>
            </div>
            </SwipeableListItem>
            </SwipeableList>
        </div>
    )
}

export default MostrarArticulo
