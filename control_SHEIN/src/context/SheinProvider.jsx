import { createContext, useEffect, useState } from "react"

const SheinContext = createContext();

// eslint-disable-next-line react/prop-types
const SheinProvider = ({children}) => {

    const [idFecha,setIdFecha]=useState()
    const [total1,setTotal1]=useState(JSON.parse(localStorage.getItem('total1')) ?? [])
    const [restante1,setRestante1]=useState(JSON.parse(localStorage.getItem('restante1')) ?? [])
    const [restanteGlobal,setRestanteGlobal] = useState()
    const [totalGlobal,setTotalGlobal] = useState()

    const restantesFecha = restante1.filter(i=>i.idFecha == idFecha)
    const TGlobalFecha = total1.filter(i=>i.idFecha == idFecha)

    useEffect(()=>{
        const resTotal = restantesFecha.map(i=>i.restante)
        const sumaRestanteGlobal=resTotal.reduce((acc,des)=>{
        return acc+des;
        },0)
        setRestanteGlobal(sumaRestanteGlobal)

        const totalG = TGlobalFecha.map(i=>i.total)
        const sumaTotalGlobal=totalG.reduce((acc,des)=>{
        return acc+des;
        },0)
        setTotalGlobal(sumaTotalGlobal)
    })


    return (
        <SheinContext.Provider
            value={{
                total1,
                setTotal1,
                restante1,
                setRestante1,
                restanteGlobal,
                totalGlobal,
                idFecha,
                setIdFecha
            }}
        >{children}</SheinContext.Provider>
    )
}

export {
    SheinProvider
}
export default SheinContext