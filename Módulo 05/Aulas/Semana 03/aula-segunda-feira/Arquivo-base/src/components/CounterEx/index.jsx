import { useState } from "react";

export const CounterEx = () => {

    const [Count, setCount] = useState(0);


    const addCount = ()=>{
        setCount(Count + 1);
    };
    const subCount = ()=>{
        setCount(Count - 1);
    };

    return (
        <>
        <h1>{ Count }</h1>
        <p>{ Count * 2}</p>
        

        <button onClick={addCount} >Adicionar *1 ao contador </button>
        <button onClick={subCount} >remover *1 ao contador </button>
        </>
    )
}


// A principal função dos estados é evitar a interação com o dom em javascript 