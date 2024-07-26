import {Link, Outlet} from "react-router-dom"
import Mynavbar from "../14bootstrap/Mynavbar";

const Home =()=>{
    return(
        <>
            <div className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">CRUD</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a  href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Professor</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="professor/listar">Listar Professor</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="professor/criar">Criar Professor</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Aluno</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="professor/listar">Listar Aluno</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="professor/criar">Criar Aluno</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Home;