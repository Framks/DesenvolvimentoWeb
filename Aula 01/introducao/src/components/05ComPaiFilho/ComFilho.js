const ComFilho = ({mensagem, enviarMensagemPai}) =>{

    return(
        <div>
            <h2>mensagem: {mensagem}</h2>
            <button onClick={() => enviarMensagemPai("oi pai")}>
                Enviar mensagem ara o pai!
            </button>
        </div>
    );
}

export default ComFilho;