import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";
import { Modal } from "../../components/Modal";

export const HomePage = () => {

    const [bagItems, setBagItem] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const addToBag = (item) => {
        const addbagnew = {...item,idBag: crypto.randomUUID()}
        setBagItem([...bagItems, addbagnew]);
    };

    const removeBagItems = (idBag)=>{
        setBagItem(bagItems.filter((item)=>idBag!=item.idBag))
    }


    return (
        <>
            {isModalOpen && (
            <Modal
                setIsModalOpen={setIsModalOpen}
                bagItems={bagItems}
                removeBagItems={removeBagItems}
            />
            )}

            <Header
            bagItemsCount={bagItems.length}
            setIsModalOpen={setIsModalOpen}
            />
            <main className="container">
            <ProductSection addToBag={addToBag} />
            </main>
        </>
    );
};
