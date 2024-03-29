import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

function MostrarArticulo({i,cont,borrarArticulo,metodoEditarArticulo}) {
    const leadingActions=()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>metodoEditarArticulo(i)}>
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
        <div className='w-5/6 lg:w-3/4 mx-auto'>
            <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
            <div className='grid grid-cols-2 px-2 lg:px-10 bg-white hover:bg-purple-300 active:bg-purple-300 rounded-md py-3 shadow-lg w-full mb-3'>
            <h2 className='font-bold text-sm lg:text-xl  text-purple-500'>{cont}.-<span>{i.nombreArticulo.toUpperCase()}</span></h2>
            <h2 className='font-bold text-md lg:text-xl text-end text-purple-500'>${i.precio}</h2>
            </div>
            </SwipeableListItem>
            </SwipeableList>
        </div>
    )
}

export default MostrarArticulo
