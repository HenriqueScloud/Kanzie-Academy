import style from './style.module.css';
import { useState } from 'react';


export const FinaceForm = ()=>{
    

    const [descricao, setDescricao] = useState('')
    const [Valor, setValor] = useState(0)
    const [type, setType] = useState('Entrada')


    const [FinanceListData, setFinanceListData] = useState([
        {
            id: crypto.randomUUID(),
            descricao: "Salário", 
            valor:500,
            type:"Entrada",
        },

    ])

    

    const addNewFinanceCard = (event) =>{
        event.preventDefault();

        const newFinanceCard = {
            id: crypto.randomUUID(),
            descricao,
            Valor,
            type,
        }

        setFinanceListData([...FinanceListData,newFinanceCard])
        console.log(FinanceListData);
        console.log(newFinanceCard);
        
    }
    

    
    









    return(
        <form className={style.form} onSubmit={addNewFinanceCard}>
            <label htmlFor="descricao">Descrição</label>
            <input  type="text" 
                    name="descricao" 
                    id="descricao" 
                    placeholder="Digite aqui sua descrição" 
                    className='inputs'
                    required
                    onChange={()=>setDescricao(event.target.value)}/>
            <p>Ex: Compra de Roupas </p>

            <label htmlFor="valor">Valor (R$)</label>
            <input  type="number" 
                    name="valor" 
                    id="valor" 
                    placeholder="1" 
                    step="0.1" 
                    required
                    className='inputs'
                    onChange={()=>setValor(event.target.value)}/>

            <label htmlFor="type">Tipo de Valor</label>
            <select name="type" 
                    id="type"   
                    className='inputs' 
                    onChange={()=>setType(event.target.value)}>
                    
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>

            <button className='buttons' >Inserir Valor</button>
        </form>
    )
}