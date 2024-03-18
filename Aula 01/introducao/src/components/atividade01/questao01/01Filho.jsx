const Filho = ({altura,peso}) => {

    function calcularImc(){
        let retorno = ""
        let imc = peso/(altura*altura)
        if(imc < 18){
            retorno = "Abaixo do peso"
        }else if(imc > 25){
            retorno = "Acima do peso"
        }else{
            retorno = "Peso ideal"
        }
        return retorno
    }

    return(
        <div>
            <h3>{calcularImc()}  </h3>
        </div>
    )
}

export default Filho;