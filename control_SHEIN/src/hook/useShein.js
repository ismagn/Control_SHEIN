import { useContext } from "react";
import SheinContext from "../context/SheinProvider";

//se crea un hook perzonalizado para poder utilizar lo valores del prop global que se creo
const useShein = () => {
    return useContext(SheinContext)
}

export default useShein