import { PokemonContexto } from "./PokemonContexto";
import PokemonImagem from "./PokemonImagem";
import { useState } from "react";

const Principal = () =>{

    let [contador,proximo] = useState(1)
    
    return(
        <div>
            <PokemonContexto.Provider value={{contador,proximo}}>
                <PokemonImagem/>
            </PokemonContexto.Provider>
        </div>
    )
}

export default Principal;