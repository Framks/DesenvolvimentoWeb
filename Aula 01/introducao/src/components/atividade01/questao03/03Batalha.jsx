import { Children, cloneElement } from "react"

const Hero = ({name, img}) => {
    return(
        <>
            <h3>Nome: {name}</h3>
            <img width={200} src={img}/>
        </>
    )
}

const Enemy = ({name, img}) =>{
    return(
        <>
            <h3>Nome: {name}</h3>
            <img width={200} src={img}/>
        </>
    )
}

const Arena = ({children, name}) =>{
    return (
        <>
            <h2> Arena: {name}</h2>
            {
                Children.map(children, (x) => cloneElement(x, arena = name))
            }
        </>
    )
}

const World = ({children}) => {
    return(
        <>
            {
                Children.map(children,(x) => cloneElement(x))
            }
        </>
    )
}

export {Hero, Enemy,Arena,World}