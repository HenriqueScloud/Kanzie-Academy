import style from "./style.module.css";

export const Total = ({ listCardTransations }) => {
    const FinanceTotal = listCardTransations.reduce((acc, card) => {

        return card.type === "Despesa"
                ? acc - Number(card.Valor)
                : acc + Number(card.Valor); 
    }, 0);


    return (
        <aside className={style.total}>
            <span className={style.saldo}>
                <h3>Valor Total</h3>
                <p>O valor se refere ao saldo </p>
            </span>
            <span className={style.price}>R$ {FinanceTotal} </span>
        </aside>
    );
};
