import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";

export const HomePage = () => {
    const [bagItems, setBagItem] = useState([]);
    //array de objetos com todos os itens de cards 

    const addToBag = (item) => {
        setBagItem([...bagItems, item]);
    };
    // função que adiciona um novo item ao array


    return (
        <>
        <Header bagItemsCount={bagItems.length} />
        <main className="container">
            <ProductSection addToBag={addToBag} />
        </main>
        </>
    );
    };
