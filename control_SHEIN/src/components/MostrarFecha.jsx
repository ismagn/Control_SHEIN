import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

function MostrarFecha({i,mostrarClienteFecha,eliminarFecha,metodoEditarFecha}) {
  const leadingActions=()=>(
    <LeadingActions>
        <SwipeAction onClick={()=>metodoEditarFecha(i)}>
            EDITAR
        </SwipeAction>
    </LeadingActions>
)
const trailingActions=()=>(
    <TrailingActions>
        <SwipeAction onClick={()=>eliminarFecha(i.id)}>
            ELIMINAR
        </SwipeAction>
    </TrailingActions>
)
  return (
    <div className='w-4/5 mx-auto '>
      <SwipeableList>
          <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
      <h2 className='bg-white animate-pulse hover:bg-pink-300 active:bg-pink-300 text-purple-500 font-bold p-5 text-center text-xl w-full rounded-md my-3 cursor-pointer'
      onClick={()=>mostrarClienteFecha(i.id)}
      >{i.fecha}</h2>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  )
}

export default MostrarFecha
