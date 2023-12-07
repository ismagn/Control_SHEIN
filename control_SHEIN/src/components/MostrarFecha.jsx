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
      <h2 className={`bg-white ${i.color==0 && "border-yellow-500 border-4"} ${i.color==1  && " border-lime-500 border-4"} ${i.color==2  && " border-blue-500 border-4"} ${i.color==3  && " border-cyan-400 border-4"} ${i.color==4  && " border-black border-4"} ${i.color==5 && "  border-violet-500 border-4"} ${i.color==6 && " border-red-500 border-4"} ${i.color==7 && " border-green-500 border-4"} ${i.color==8 && " border-orange-400 border-4"} ${i.color==9 && "border-slate-400 border-4"} hover:bg-purple-500 active:bg-purple-500 text-purple-500 font-bold p-3 text-center text-xl w-full rounded-md my-3 cursor-pointer shadow-lg`}
      onClick={()=>mostrarClienteFecha(i.id)}
      >{i.fecha}</h2>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  )
}

export default MostrarFecha
