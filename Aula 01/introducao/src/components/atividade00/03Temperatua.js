const Temperatura = ({temperatura}) => {

    function celsiusParaFahrenheit(celsius){
        return (celsius * (9/5))+32;
    }

    function fahrenheitParacelsius(f){
        return ( f - 32)*(5/9);
    }

    function kelvin(k){
        return { fahrenheit : celsiusParaFahrenheit((k-273.15)) ,
            celsius : k-273.15
        }
    }

    return (
        <div>
            <p>kelvin para fahrenheit: {kelvin(temperatura).fahrenheit.toFixed(2)}</p>
            <p>kelvin para celsius: {kelvin(temperatura).celsius.toFixed(2)}</p>
            <p>celsius para fahrenheit: {celsiusParaFahrenheit(temperatura).toFixed(2)}</p>
            <p>fahrenheit para celsius: {fahrenheitParacelsius(temperatura).toFixed(2)}</p>
        </div>
    )
}

export default Temperatura;