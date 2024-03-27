import {useState} from "react"
import Pokemon from "./Pokemon";

const Estado = () => {
    let [contador, setContador] = useState(0)

    return(
        <div>
            <h2>contador: {contador}</h2>
            <hr/>
            <button onClick={() => setContador(++contador)}>
                Incrementar Contador!
            </button>
            <Pokemon/>
        </div>
    )
}

export default Estado;