import PokemonIncrementar from "./PokemonIncrementar";
import PokemonDecrementar from "./PokemonDecrementar";
import { PokemonContexto } from "./PokemonContexto";
import { useContext } from "react";

const PokemonImagem = () =>{

    const {contador} = useContext(PokemonContexto)

    return(
        <div>
            <PokemonDecrementar/>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+contador+".png"} alt="Pokemon - nome" width={150}/>
            <PokemonIncrementar/>
        </div>
    )
}

export default PokemonImagem;