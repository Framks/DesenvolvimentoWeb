import {Children,cloneElement} from "react";

const Pc = ({children}) => {
    return (
        <div>
            <h3>Peças do pc: </h3>
            <hr/>
            <h2>
                {
                Children.map(
                    children,
                    (x) => cloneElement(x)
                )
                }
            </h2>
        </div>
    )
}

const PlacaMae = ({nome,preco}) => {
    return(
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}

const Memoria = ({nome,preco}) => {
    return(
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}
const PlacaDeVideo = ({nome,preco}) => {
    return(
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}

export {Pc,PlacaDeVideo,PlacaMae,Memoria};