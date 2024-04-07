import { Header } from "../../components/Header/Header";
import { FinanceForm } from "../../components/FinanceForm/FinanceForm";
import { Total } from "../../components/Total/Total";
import { FinanceList } from "../../components/FInanceList/FinanceList";
import { useState } from "react";
export const HomePage = () => {
    const [listCardTransations, setListCardTransitions] = useState([]);
    const removeCard = (id) => {
        setListCardTransitions(listCardTransations.filter((card) => card.id !== id));
    }
    return (
        <>
        <Header />
        <main>
            <div>
            <FinanceForm setlistCardTransations={setListCardTransitions} listCardTransations={listCardTransations}/> 
            <Total listCardTransations={listCardTransations} />
            </div>
            <FinanceList listCardTransations={listCardTransations}  removeCard={removeCard}/>
        </main>
        </>
    );
};
