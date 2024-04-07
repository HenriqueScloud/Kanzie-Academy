import { FinanceCard } from "./FinanceCard/FinanceCard";
import style from './style.module.css'
export const FinanceList = ({listCardTransations, removeCard})=>{
    return(
        <ul className={style.financeList}>
            <h3 className={style.title}>Resumo Financeiro</h3>
            {listCardTransations.length === 0 &&(
                <div className={style.zeroLançamentos}>
                    <h2 className={style.zeroLançamentosH2}>Você ainda não possui lançamentos </h2>
                </div>
            )}
            {listCardTransations.map((card)=>{
                return(
                <FinanceCard id={card.id} descricao={card.descricao} type={card.type} valor={card.Valor} key={card.id} removeCard={removeCard} /> 
                )
            }
            )}
        </ul>
    )
} 