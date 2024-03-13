import ComFilho from "./ComFilho";


const ComPai = () =>{

    function receberMensagemFilho(mensagem){
        alert("Recebi do eu filho: "+mensagem)
    }

    return(
        <div>
            <ComFilho mensagem="oi filho" enviarMensagemPai={receberMensagemFilho}/>
        </div>
    );
}



export default ComPai;