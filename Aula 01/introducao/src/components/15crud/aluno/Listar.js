import {useState, useEffect} from "react"

const Listar = () => {

    const[alunos, setAlunos] = useState([])

    useEffect(
        () => {
            getAlunosFetchAsyncAwait();
        }, []
    );

    const getAlunosFetchAsyncAwait = async () =>{
        try{
            const response = await fetch("http://172.25.225.41:3000/alunos");
            const json = await response.json();
            setAlunos(json);
        }catch(error){
            console.log(error);
        }
    };

    const corporable =() =>{
        const arrayAluno = alunos.map(
            (aluno) => {
                return(
                    <tr>
                        <th scope="row">{aluno.nome}</th>
                        <th>{aluno.curso}</th>
                        <th>{aluno.ira}</th>
                        <th>
                            <button className="btn btn-primary">Editar</button>
                            <button className="btn btn-danger">Excluir</button>
                        </th>
                    </tr>
                )
            }
        )
        return arrayAluno;
    }
    
    return(
        <div className="page-contant">
            <h1>Lista de Alunos</h1>
            <table className="table table-striped table-content">
                <thead>
                    <tr>
                        <th scope="col">nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">IRA</th>
                        <th scope="col">Edições</th>
                    </tr>
                </thead>
                <tbody>
                    {corporable()}
                </tbody>
            </table>
        </div>
    )
}

export default Listar;