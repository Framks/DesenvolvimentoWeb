import { Children, cloneElement } from "react"

const Hero = ({name, img, arena}) => {
    return(
        <>
            <h3>Nome: {name}, Arena: {arena}</h3>
            <img width={200} src={img}/>
        </>
    )
}

const Enemy = ({name, img,arena}) =>{
    return(
        <>
            <h3>Nome: {name}, Arena: {arena}</h3>
            <img width={200} src={img}/>
        </>
    )
}

const Arena = ({children, name}) =>{
    return (
        <>
            {
                Children.map(children, (x) => cloneElement(x, {arena:name}))
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