import Produto from './Produto';

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr/>
            <Produto nome="Margarina" categoria="Alimento" valor={5.0}/>
            <hr/>
            <Produto nome="Sabão" categoria="Limpeza" valor={6.0}/>
        
        </div>
    )
}

export default Loja