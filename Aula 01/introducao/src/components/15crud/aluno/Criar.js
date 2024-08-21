import {useState} from "react";

const Criar = () => {

    const[nome,setNome] = useState("")
    const[ira,setIra] = useState(0)
    const[curso,setCurso] = useState("")

    function handleSubmit(event){
        window.alert("Cadastrando:"+nome+", do curso:"+curso+", com ira:"+ira)
    }

    return(
        <>
        <h1>Criar</h1>
        <form className="form-content" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="inputNome">Nome</label>
                <input className="form-control" type="text" name="nome" id="inputNome" onInput={(event) => setNome(event.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="inputCurso">Curso</label>
                <input className="form-control" type="text" id="inputCurso" name="curso" onInput={(event) => setCurso(event.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="inputIra">Ira</label>
                <input className="form-control" type="number" id="inputIra" onChange={(event) => setIra(event.target.value)}/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary"> 
                    submit
                </button>
            </div>
        </form>
        </>
    )
}

export default Criar;