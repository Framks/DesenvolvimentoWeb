import { useContext } from "react";
import { PokemonContexto } from "./PokemonContexto";

const Incrementar = () =>{

    const {proximo} = useContext(PokemonContexto)

    return(
        <div>
            <button onClick={()=> proximo((a) => {return a+1})}>
                Incrementar
            </button>
        </div>
    )
}

export default Incrementar;