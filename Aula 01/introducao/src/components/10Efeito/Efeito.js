import {useState, useEffect} from "react";

const Efeito = () => {
    const [contador, setContado] = useState(0)
    const [ehpar, setEhpar] = useState(true)
    
    useEffect(
        () => {
            if(contador%2 === 0) setEhpar(true)
            else setEhpar(false)
        },
        [contador]
    )

    return(
        <>
            <h3>Contador: {contador}</h3>
            <h3>É par: {ehpar+""}</h3>
            <button onClick={() => setContado(anterior => anterior+1)}>
                Aumentar
            </button>
        </>
    )
}

export default Efeito;