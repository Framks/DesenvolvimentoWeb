import Home from "./Home";
import Criar from "./professor/Criar";
import Listar from "./professor/Listar";
import Editar from "./professor/Editar";
import ListarAluno from "./aluno/Listar";
import CriarALuno from "./aluno/Criar";
import NotFound from "./exception/NotFound";
import Index from "./index";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
    [
        { 
            path: "/", element:<Home/>,
            children:[
                {index: true, element:<Index/>},
                {path:"professor/listar", element:<Listar/>},
                {path:"professor/criar", element:<Criar/>},
                {path:"professor/editar/:id", element:<Editar/>},
                {path:"aluno/listar", element:<ListarAluno/>},
                {path:"aluno/criar", element:<CriarALuno/>},
                {path:"notfound", element:<NotFound/>}
            ]
        }
    ]
)
const Main=()=>{
    return(
        <RouterProvider router={router}>
        </RouterProvider>
    )
}

export default Main;