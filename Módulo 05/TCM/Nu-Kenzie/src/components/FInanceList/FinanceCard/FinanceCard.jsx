import style from './style.module.css';
export const FinanceCard = ({id,descricao,valor,type, removeCard}) => {
    let styleCard= style.container_card;
    if(type=='Despesa'){
        styleCard= style.container_card_despesa;
        valor = -Math.abs(valor);
    }
    else{
        valor = Math.abs(valor);
    }





    return (
        
        <>
            <li className={styleCard} key={id}>
                <div className={style.title}>
                    <h3 className={style.descricao}>{descricao}</h3>
                    <p className={style.type}>{type}</p>
                </div>
                <div className={style.value}>
                    <span className={style.value_num}>R$ {valor},00</span>
                    <button onClick={()=>removeCard(id)}>Excluir</button>
                </div>
            </li>
        </>
    );
};
