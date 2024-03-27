// CONTEXTO
import { Variavel } from "./VariavelContext";
import { useContext } from "react";

const CompA = () =>{
    return(
        <div>
            <Variavel.Provider value="variavel de a">
                <CompB />
                <CompC />
            </Variavel.Provider>
        </div>
    )
}

const CompB = () =>{
    const variavel = useContext(Variavel);
    return(
        <div>
            <h3>{variavel}</h3>
        </div>
    )
}
const CompC = () =>{
    return(
        <div>
            <CompD />
        </div>
    )
}
const CompD = () =>{
    return(
        <div>
            <CompE/>
        </div>
    )
}
const CompE = () =>{
    const value = useContext(Variavel);

    return(
        <div>
            <h3>{value}</h3>
        </div>
    )
}

export {CompA, CompB, CompC, CompD,CompE}