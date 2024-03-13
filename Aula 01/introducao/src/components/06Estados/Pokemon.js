import { useState } from "react";
import axios from "axios"

const Pokemon = () =>{

    let [contador,proximo] = useState(1)
    
    let [nome, setNome] = useState("")
    let url = "https://pokeapi.co/api/v2/pokemon-species/"+contador

    axios.get(url).then(function(responce){
        setNome(responce.data.name)
    })

    return(
        <div>
            <h2>nome: {nome}</h2>
            <button onClick={()=>  proximo(--contador)} >
                POKEMON voltar!
            </button>
            <img height={150} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+contador+".png"}/>
            <button onClick={() => proximo(++contador)}>
                Proximo POKEMON!
            </button>
        </div>
    )
}


export default Pokemon;