// PROP DRILLING
const CompA = () =>{

    const variavelDeA = "variavel de a"

    return(
        <div>
            <CompB variavel={variavelDeA}/>
            <CompC variavel={variavelDeA}/>
        </div>
    )
}

const CompB = ({variavel}) =>{
    return(
        <div>
            <h3>{variavel}</h3>
        </div>
    )
}
const CompC = ({variavel}) =>{
    return(
        <div>
            <CompD variavel={variavel}/>
        </div>
    )
}
const CompD = ({variavel}) =>{
    return(
        <div>
            <CompE variavel={variavel}/>
        </div>
    )
}
const CompE = ({variavel}) =>{
    return(
        <div>
            <h3>{variavel}</h3>
        </div>
    )
}

export {CompA, CompB, CompC, CompD,CompE}