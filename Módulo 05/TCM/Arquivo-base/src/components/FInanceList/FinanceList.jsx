import { FinaceCard } from "./FinanceCard/FinanceCard";
import style from './style.module.css'


// import { FinaceForm } from "../FinanceForm/FinanceForm";

export const FinaceList = ()=>{

    // console.log(FinaceForm)
    return(
        <ul className={style.financeList}>
            <h3 className={style.title}>Resumo Financeiro</h3>
            <FinaceCard/>
            <FinaceCard/>
            <FinaceCard/>
        </ul>
    )
}