const Produto = (pronps) => {
    return (
        <div>
            <h3>Nome: {pronps.nome}</h3>
            <h3>Categoria: {pronps.categoria}</h3>
            <h3>Preço: {pronps.valor}</h3>
        </div>
    )
}

export default Produto