import style from './style.module.css';


export const FinaceCard = () => {

    


    return (
        <>
            <li className={style.container_card}>
                <div className={style.title}>
                    <h3 className={style.descricao}>Salario - mes de dezembro</h3>
                    <p className={style.type}>Entrada</p>
                </div>
                <div className={style.value}>
                    <span className={style.value_num}>R$ 5.000,00</span>
                    <button>Excluir</button>
                </div>
            </li>
        </>
    );
};
