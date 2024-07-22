import {useState} from "react";

const SaveLoadData = () => {

    const aluno = {nome:"Fulano", curso:"Si", IRA: 7.5}

    const [alunoStorage, setAlunoStorage] = useState({})

    function saveData(){
        localStorage.setItem("aluno",JSON.stringify(aluno))
        alert("dados salvos com sucesso!")
    }

    function loadData(){
        const alunoCarregado = localStorage.getItem("aluno")
        setAlunoStorage(JSON.parse(alunoCarregado))
    }

    return (
        <div>
            <h1>Save Load Data</h1>
            <h3>{JSON.stringify(alunoStorage)}</h3>
            <button onClick={saveData}>Save data</button>
            <button onClick={loadData}>Load Data</button>
        </div>
    )
}

export default SaveLoadData