import style from './style.module.css';


export const FinanceCard = ({id,descricao,valor,type, removeCard}) => {



    return (
        <>
            <li className={style.container_card} key={id}>
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
