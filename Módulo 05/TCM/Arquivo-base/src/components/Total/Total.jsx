import style from './style.module.css'


export const Total = () => {

    return(
        <aside className={style.total}>
            <span className={style.saldo}>
                <h3>Valor Total</h3>
                <p>O valor se refere ao saldo </p>
            </span>
            <span className={style.price}>R$ 800,00 </span>
        </aside>
    )
}