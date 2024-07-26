import "../css/professores.css";
import professores from "../data/db_professor.js";

const Listar = () => {

    const corpotable = () => {
        const nwArray = professores.map(
            (professore) => {
                return(
                    <tr>
                        <th scope="row">{professore.id}</th>
                        <th>{professore.nome}</th>
                        <th>{professore.curso}</th>
                        <th>{professore.titulacao}</th>
                    </tr>
                )
            }
        )
        return nwArray;
    }

    return (
        <div className="page-contant">
            <h1>Lista de professores</h1>
            <table className="table table-striped table-content">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">titulacao</th>
                    </tr>
                </thead>
                <tbody>{corpotable()}</tbody>
            </table>
        </div>
    )
}

export default Listar;