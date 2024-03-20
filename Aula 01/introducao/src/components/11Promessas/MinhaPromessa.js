import { useEffect, useState } from "react"

const MinhaPromessa = new Promise(
    (resolve, reject) => {
        // computção de x segundos .. 
        setTimeout(()=>{
            const numeroRandom = Math.floor(Math.random() * 10)+1 
            if( numeroRandom%2 === 0){
                resolve("deu certo, seu número é: "+numeroRandom)
            }else{
                reject("deu errado, seu número é: "+numeroRandom)
            }
        }, 4000
           )
    }
)

const ComponentePromessa = () => {

    const [reusltado,setResultado] = useState("")

    useEffect(
        () => {
            MinhaPromessa.then((valor)=>{setResultado(setResultado)}).catch((reject) => setResultado(reject))
        },
        [] 
    )

    return(
        <>
            <h3>Promessas</h3>
            <h4>Resultado: {reusltado}</h4>
        </>
    )
}

export default ComponentePromessa;