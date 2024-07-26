import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const Mynavbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="localhost/#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="www.bootstrap.com">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="www.bootstrap.com">lnk</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="localhost/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="localhost/#">ação 1</a></li>
                                <li><a className="dropdown-item" href="localhost/#">ação 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Mynavbar;