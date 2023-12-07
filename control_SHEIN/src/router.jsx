import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Clientes from "./components/Clientes";


const router = createBrowserRouter([
    {
        path: '/', //enlace donde se mostrara la vista
        element: <App/>, //componente que se mostrara
        
    },
])

export default router