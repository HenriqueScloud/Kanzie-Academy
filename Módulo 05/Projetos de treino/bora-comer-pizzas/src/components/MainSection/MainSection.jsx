
import { pizzasList } from "../../Database/DataBase.js";
export const MainSection = () =>{
    return(
        <>
            <section>
                <h2>Confira o Cardápio</h2>
                <ul>
                    {pizzasList.map((pizza, index) => {
                        return(
                            <li key={index}> 
                            <h1>{pizza.id}</h1>
                                <img src={pizza.img} alt="" />
                                <h3>{pizza.title}</h3>
                            </li>      
                    )
                    })}
                </ul>
            </section>
        </>
    )
}