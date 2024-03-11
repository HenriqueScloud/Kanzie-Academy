import { pizzasList } from "../../../Database/DataBase";
import style from "./style.module.css"
export const MainSection = () =>{
    return(
        <>
            <section className="container">
                <h2 className={style.menuTitle}>Confira o Cardápio</h2>
                <ul className={style.menuList}>
                    {pizzasList.map((pizza, index) => {
                        return(
                            <li key={index} className={style.menuItem}> 
                                <img src={pizza.img} alt="" />
                                <h3 className={style.foodName}>{pizza.title}</h3>
                            </li>      
                    )
                    })}
                </ul>
            </section>
        </>
    )
}