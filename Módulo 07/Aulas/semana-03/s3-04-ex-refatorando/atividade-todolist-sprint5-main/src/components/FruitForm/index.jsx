import { useState } from "react";

export const FruitForm = ({addFruit}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const submit = (e) => {
        e.preventDefault();
        addFruit({ name, price });
        setName("");
        setPrice("");
    }

    return(
        <form onSubmit={submit}>
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Preço" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit">Cadastrar fruta</button>
        </form>
    )
}