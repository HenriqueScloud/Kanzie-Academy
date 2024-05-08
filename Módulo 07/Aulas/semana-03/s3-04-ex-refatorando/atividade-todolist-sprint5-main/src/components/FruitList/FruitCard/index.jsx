export const FruitCard = ({fruit, removeFruit}) => {
    return(
        <li>
            <h3>{fruit.name}</h3>
            <span>{Number(fruit.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            <button onClick={() => removeFruit(fruit.id)}>Remover</button>
        </li>
    )
}