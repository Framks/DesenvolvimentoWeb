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

const PromessaComAsync = () => {

    const [reusltado,setResultado] = useState("")

    async function apiGetPromessa() {
        try{
            const res = await MinhaPromessa
            setResultado(res)
        }catch(error){
            setResultado(error)
        }
    }

    useEffect(
        () => {
            apiGetPromessa()
        },
        [] 
    )

    return(
        <>
            <h3>Promessas com async</h3>
            <h4>Resultado: {reusltado}</h4>
        </>
    )
}

export default PromessaComAsync;