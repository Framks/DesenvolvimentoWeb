import { useContext } from "react";
import { PokemonContexto } from "./PokemonContexto";

const Decrementar = () =>{

    const { proximo} = useContext(PokemonContexto)

    return(
        <div>   
            <button onClick={()=>proximo(a=>a-1)}>
                Decrementar
            </button>
        </div>
    )
}

export default Decrementar;